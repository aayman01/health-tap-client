import axios from "axios";
import { useEffect, useState } from "react";
import PopularServiceCard from "../../Components/PopularServiceCard";

const PopularService = () => {
    const [services, setServices] = useState([]);
    // console.log(services)
    useEffect(()=>{
        axios
          .get("https://health-tap-server.vercel.app/services")
          .then((res) => {
            setServices(res.data)
          });
    },[])
    return (
      <div className="max-w-6xl mx-auto px-4">
        <div>
          <h2 className="text-primary font-bold text-3xl mt-20 mb-10 text-center">Our Popular Services</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mb-20">
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