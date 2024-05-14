import { Helmet } from "react-helmet-async";
import NavBar from "./Home/NavBar/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";

const ServiceToDo = () => {
   
  const [empty, setEmpty] = useState("");
  const [bookedService, setBookedService] = useState([]);
  const options = [
    { value: "Pending", label: "Select an option" },
    { value: "Working", id: 1 },
    { value: "Completed", id: 2 },
  ];

//   useEffect(() => {
//     axios.get("http://localhost:5000/bookedService").then((res) => {
//       setBookedService(res.data);
//       if (res.data.length === 0) {
//         setEmpty("Anyone haven't booked any of our service yet...");
//       }
//     });
//   }, []);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    axios.get("http://localhost:5000/bookedService").then((res) => {
      setBookedService(res.data);
      if (res.data.length === 0) {
        setEmpty("Anyone haven't booked any of our service yet...");
      }
    });
  };

  const handleChange = (value,id) => {
    axios
      .patch(`http://localhost:5000/updateservice/${id}`, {
        value
      })
      .then((res) => {
        console.log(res.data);
      });
    // getData();
  }
  const handleSave = () =>{
    getData()
  }
  return (
    <div>
      <Helmet>
        <title>HealthTap | Service To Do</title>
      </Helmet>
      <div className="h-20">
        <NavBar />
      </div>
      <div className="max-w-6xl mx-auto px-4 my-20">
        {empty ? (
          <div className="flex justify-center items-center h-screen-minus-20px">
            <h2 className="text-4xl font-bold text-second text-center">
              {empty}
            </h2>
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
                    <th>Price</th>
                    <th>Current Status</th>
                    <th>Update Status</th>
                    <th></th>
                  </tr>
                </thead>
                {bookedService.map((service, idx) => (
                  <tbody key={service._id}>
                    <tr>
                      <th className="text-primary">{idx + 1}</th>
                      <td>{service?.serviceName}</td>
                      <td>{service?.providerName}</td>
                      <td>{format(new Date(service?.date), "d MMMM,yyyy")}</td>
                      <td>{service?.price}</td>
                      <td
                        className={`font-bold ${
                          service?.serviceStatus === "Pending" &&
                          "text-yellow-500"
                        } ${
                          service?.serviceStatus === "Working" &&
                          "text-blue-500"
                        } ${
                          service?.serviceStatus === "Completed" &&
                          "text-emerald-500"
                        }`}
                      >
                        {service?.serviceStatus}
                      </td>
                      <td>
                        <select
                          defaultValue={service?.serviceStatus}
                          name="updatestatus"
                          onChange={(e) => {
                            handleChange(e.target.value, service._id);
                          }}
                        >
                          {options.map((opt, idx) => (
                            <option key={idx}>{opt.value}</option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <button onClick={handleSave} className="btn btn-main">
                          Save
                        </button>
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

export default ServiceToDo;
