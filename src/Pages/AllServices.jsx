import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./Home/NavBar/NavBar";
import AllServiceCard from "../Components/AllServiceCard";
import { Helmet } from "react-helmet-async";

const AllServices = () => {
  const [allService, setAllService] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [search, setSearch] = useState('');
  // console.log(allService);
  useEffect(()=>{
    const getData = async () => {
      const { data } = await axios.get(
        "http://localhost:5000/allServiceProvider"
      )
      setAllService(data)
    }
    getData()
  },[])

  const handleSearch = e => {
    e.preventDefault();
    setSearch(searchText)
  };
  console.log(allService)
  return (
    <div>
      <Helmet>
        <title>HealthTap | All Services</title>
      </Helmet>
      <div className="h-20">
        <NavBar />
      </div>
      <div className="max-w-6xl mx-auto px-4 mb-20">
        <div>
          <h2 className="text-primary underline decoration-current font-bold text-3xl mt-20 mb-10 text-center">
            All Services
          </h2>
          <div>
            <form onSubmit={handleSearch}>
              <div className="flex items-center justify-end">
                <input
                  type="text"
                  name="search"
                  onChange={(e) => setSearchText(e.target.value)}
                  value={searchText}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
                <button className="ml-1 btn btn-main hover:bg-[#ff7404]">
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="mb-8">
            {allService.map((service) => (
              <AllServiceCard
                key={service._id}
                service={service}
              ></AllServiceCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
