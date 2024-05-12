import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import NavBar from "./Home/NavBar/NavBar";
import ManageServiceCard from "../Components/ManageServiceCard";

const ManageService = () => {
  const { user } = useAuth();
  const [myService, setMyService] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/data/${user?.email}`).then((res) => {
      const data = res.data;
      setMyService(data);
    });
  }, [user]);
  return (
    <div>
      <div className="h-20">
        <NavBar />
      </div>
      <div className="max-w-6xl mx-auto px-4 my-20">
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
    </div>
  );
};

export default ManageService;
