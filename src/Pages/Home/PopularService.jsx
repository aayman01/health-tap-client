import axios from "axios";
import { useEffect, useState } from "react";
import PopularServiceCard from "../../Components/PopularServiceCard";

const PopularService = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        axios
          .get("http://localhost:5000/services")
          .then((res) => {
            setServices(res.data)
          });
    },[])
    return (
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 my-20">
          {services.map((service) => (
            <PopularServiceCard
              service={service}
              key={service._id}
            ></PopularServiceCard>
          ))}
        </div>
      </div>
    );
};

export default PopularService;