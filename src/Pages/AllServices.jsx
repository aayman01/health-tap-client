import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./Home/NavBar/NavBar";
import AllServiceCard from "../Components/AllServiceCard";

const AllServices = () => {
  const [allService, setAllService] = useState([]);
  console.log(allService);
  useEffect(() => {
    axios.get("http://localhost:5000/allServiceProvider").then((res) => {
      setAllService(res.data);
    });
  }, []);
  return (
    <div>
      <div className="h-20">
        <NavBar />
      </div>
      <div className="max-w-6xl mx-auto px-4 mb-20">
        <div>
          <h2 className="text-primary underline decoration-current font-bold text-3xl mt-20 mb-10 text-center">
            All Services
          </h2>
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
