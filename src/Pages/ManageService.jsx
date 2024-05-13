import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import NavBar from "./Home/NavBar/NavBar";
import ManageServiceCard from "../Components/ManageServiceCard";
import { Helmet } from "react-helmet-async";

const ManageService = () => {
  const { user } = useAuth();
  const [myService, setMyService] = useState([]);
  const [empty, setEmpty] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:5000/data/${user?.email}`).then((res) => {
      const data = res.data;
      setMyService(data);
      if (data.length === 0) {
        setEmpty("You haven't added any service");
      }
    });
  }, [user]);
  return (
    <div>
      <Helmet>
        <title>HealthTap | Manage Service</title>
      </Helmet>
      <div className="h-20">
        <NavBar />
      </div>
      <div className="max-w-6xl mx-auto px-4 my-20">
        {empty ? (
          <div className="flex justify-center items-center h-screen-minus-20px">
            <h2 className="text-4xl font-bold text-center text-second">{empty}</h2>
          </div>
        ) : (
          <div>
            <div className="mb-16">
              <h2 className="text-primary underline decoration-current font-bold text-3xl mt-20  text-center">
                Manage Services
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {myService.map((service) => (
                <ManageServiceCard
                  key={service._id}
                  service={service}
                  myService={myService}
                  setMyService={setMyService}
                ></ManageServiceCard>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageService;
