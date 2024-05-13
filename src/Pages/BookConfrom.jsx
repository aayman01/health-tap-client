import { useLoaderData, useNavigate } from "react-router-dom";
import NavBar from "./Home/NavBar/NavBar";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const BookConfrom = () => {
    const lodedData = useLoaderData();
    // console.log(lodedData)
    const {user} = useAuth();
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const serviceName = form.serviceName.value;
        const serviceId = form.serviceId.value;
        const serviceImage = form.serviceImage.value;
        const providerEmail = form.providerEmail.value;
        const providerName = form.providerName.value;
        const userEmail = form.userEmail.value;
        const userName = form.userName.value;
        const date = form.date.value;
        const area = form.area.value;
        const price = form.price.value;
        const serviceStatus = "Pending"
        const data = {
          serviceName,
          serviceId,
          serviceImage,
          providerEmail,
          providerName,
          userEmail,
          userName,
          date,
          area,
          price,
          serviceStatus,
        };

        console.log(data)

        axios.post("http://localhost:5000/bookedservice",data)
        .then(res => {
            const data = res.data;
            if(data.insertedId){
                Swal.fire({
                  title: "Success!",
                  text: "Successfully Booked",
                  icon: "success",
                });
                setTimeout(() => navigate('/'),1500)
            }
        })

    }

    return (
      <div>
        <Helmet>
          <title>HealthTap | Book Confirm</title>
        </Helmet>
        <div className="h-20">
          <NavBar />
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-[#fed938] md:p-20 rounded-lg mt-10 mb-14">
            <h2 className="text-3xl text-center mb-7 text-[#ff7404] font-bold">
              Confirm Booking
            </h2>
            <div className="">
              <form onSubmit={handleSubmit}>
                <div className="md:flex items-center gap-4">
                  <label className="form-control md:w-1/2">
                    <div className="label">
                      <span className="label-text font-bold">Service Id:</span>
                    </div>
                    <input
                      type="text"
                      name="serviceId"
                      placeholder=""
                      className="input input-bordered w-full "
                      defaultValue={lodedData[0]._id}
                      readOnly
                    />
                  </label>
                  <label className="form-control md:w-1/2">
                    <div className="label">
                      <span className="label-text font-bold">
                        Service Name:
                      </span>
                    </div>
                    <input
                      type="text"
                      name="serviceName"
                      placeholder=""
                      className="input input-bordered w-full "
                      defaultValue={lodedData[0].serviceName}
                      readOnly
                    />
                  </label>
                </div>
                <div className="md:flex items-center gap-4">
                  <label className="form-control md:w-1/2">
                    <div className="label">
                      <span className="label-text font-bold">
                        Service Image:
                      </span>
                    </div>
                    <input
                      type="text"
                      name="serviceImage"
                      placeholder=""
                      className="input input-bordered w-full"
                      readOnly
                      defaultValue={lodedData[0].serviceImage}
                    />
                  </label>
                  <label className="form-control md:w-1/2">
                    <div className="label">
                      <span className="label-text font-bold">
                        provider email:
                      </span>
                    </div>
                    <input
                      type="email"
                      name="providerEmail"
                      placeholder=""
                      className="input input-bordered w-full"
                      readOnly
                      defaultValue={lodedData[0].providerEmail}
                    />
                  </label>
                </div>
                <div className="md:flex items-center gap-4">
                  <label className="form-control md:w-1/2">
                    <div className="label">
                      <span className="label-text font-bold">
                        Provider Name:
                      </span>
                    </div>
                    <input
                      type="text"
                      name="providerName"
                      placeholder=""
                      className="input input-bordered w-full"
                      readOnly
                      defaultValue={lodedData[0].serviceProviderName}
                    />
                  </label>
                  <label className="form-control md:w-1/2">
                    <div className="label">
                      <span className="label-text font-bold">
                        Current User emai:
                      </span>
                    </div>
                    <input
                      type="text"
                      name="userEmail"
                      className="input input-bordered w-full"
                      readOnly
                      defaultValue={user?.email}
                    />
                  </label>
                </div>
                <div className="md:flex items-center gap-4">
                  <label className="form-control md:w-1/2">
                    <div className="label">
                      <span className="label-text font-bold">
                        Current user name
                      </span>
                    </div>
                    <input
                      type="text"
                      name="userName"
                      defaultValue={user?.displayName}
                      placeholder="Enter coffee Category"
                      className="input input-bordered w-full"
                      readOnly
                    />
                  </label>
                  <label className="form-control md:w-1/2">
                    <div className="label">
                      <span className="label-text font-bold">
                        Service Taking Date
                      </span>
                    </div>
                    <input
                      type="date"
                      name="date"
                      placeholder="Enter coffee Details"
                      className="input input-bordered w-full"
                      required
                    />
                  </label>
                </div>
                <div className="md:flex items-center gap-4">
                  <label className="form-control md:w-1/2">
                    <div className="label">
                      <span className="label-text font-bold">Area:</span>
                    </div>
                    <input
                      type="text"
                      name="area"
                      placeholder="Enter your area"
                      className="input input-bordered w-full"
                      required
                    />
                  </label>
                  <label className="form-control md:w-1/2">
                    <div className="label">
                      <span className="label-text font-bold">Price:</span>
                    </div>
                    <input
                      type="text"
                      name="price"
                      defaultValue={lodedData[0].servicePrice}
                      className="input input-bordered w-full"
                      readOnly
                    />
                  </label>
                </div>
                <input
                  className="mt-5 btn btn-main hover:bg-[#ff7404] w-full font-bold"
                  type="submit"
                  value="Purchase"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BookConfrom;