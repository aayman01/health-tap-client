import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
import NavBar from "./Home/NavBar/NavBar";
import { format } from "date-fns";


const BookedService = () => {
  const [bookedService, setBookedService] = useState([]);
  const [empty, setEmpty] = useState("");
  const { user } = useAuth();
  console.log(bookedService);
  useEffect(() => {
    axios
      .get(`https://health-tap-server.vercel.app/bookedService/${user.email}`)
      .then((res) => {
        setBookedService(res.data);
        if (res.data.length === 0) {
          setEmpty("You haven't booked any of our service yet...");
        }
      });
  }, [user]);

  return (
    <div>
      <Helmet>
        <title>HealthTap | Booked Service</title>
      </Helmet>
      <div className="h-20">
        <NavBar />
      </div>
      <div className="max-w-6xl mx-auto px-4 my-20">
        {empty ? (
          <div className="flex justify-center items-center h-screen-minus-20px">
            <h2 className="text-4xl font-bold text-second text-center">{empty}</h2>
          </div>
        ) : (
          <div>
            <div>
              <h3 className="text-center text-3xl font-bold mb-11 text-primary">
                Booked Services
              </h3>
            </div>
            <div className="overflow-x-auto border rounded-lg">
              <table className="table table-lg">
                <thead className="text-lg text-second">
                  <tr>
                    <th>No.</th>
                    <th>Service Name</th>
                    <th>Provider Name</th>
                    <th>Date</th>
                    <th>Area</th>
                    <th>Price</th>
                    <th>Status</th>
                  </tr>
                </thead>
                {bookedService.map((service, idx) => (
                  <tbody key={service._id}>
                    <tr>
                      <th className="text-primary">{idx + 1}</th>
                      <td>{service?.serviceName}</td>
                      <td>{service?.providerName}</td>
                      <td>{format(new Date(service?.date), "d MMMM,yyyy")}</td>
                      <td className="uppercase">{service?.area}</td>
                      <td>{service?.price}</td>
                      <td className={`inline-flex items-center font-bold`}>
                        <p
                          className={`px-2 py-1 rounded-lg ${
                            service?.serviceStatus === "Pending" &&
                            " text-yellow-500 font-bold bg-yellow-100/60"
                          } ${
                            service?.serviceStatus === "Working" &&
                            "bg-blue-100/60 text-blue-500"
                          }
                      ${
                        service?.serviceStatus === "Completed" &&
                        "bg-emerald-100/60 text-emerald-500"
                      }`}
                        >
                          {service?.serviceStatus}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookedService;
