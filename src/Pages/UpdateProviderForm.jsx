import { useLoaderData, useNavigate } from "react-router-dom";
import NavBar from "./Home/NavBar/NavBar";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const UpdateProviderForm = () => {
    const data = useLoaderData(); 
    // console.log(data)
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const serviceImage = form.serviceImage.value;
        const serviceName = form.serviceName.value;
        const servicePrice = form.servicePrice.value;
        const serviceLocation = form.area.value;
        const description = form.description.value;
        const serviceProviderName = form.serviceProviderName.value;
        const serviceProviderEmail = form.serviceProviderEmail.value;
        const serviceProviderImage = form.serviceProviderPhotoUrl.value; 

        const formInfo = {
          serviceImage,
          serviceName,
          servicePrice,
          serviceLocation,
          description,
          serviceProviderName,
          serviceProviderEmail,
          serviceProviderImage
        };
        console.log(formInfo)
        axios
          .put(`http://localhost:5000/service/${data[0]._id}`, formInfo)
          .then((res) => {
            const result = res.data;
            if (result.modifiedCount > 0) {
              Swal.fire({
                text: "Updated Succesfully",
                icon: "success",
              });
              navigate("/manageservice");
            }
            console.log(result);
          });

    }
    return (
      <div>
        <Helmet>
          <title>HealthTap | Update Information</title>
        </Helmet>
        <div>
          <div className="h-20">
            <NavBar />
          </div>
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-[#fed938] p-20 rounded-lg mt-10 mb-14">
              <h2 className="text-3xl text-center mb-7 text-[#ff7404] font-bold">
                Add Service
              </h2>
              <div className="">
                <form onSubmit={handleSubmit}>
                  <div className="md:flex items-center gap-4">
                    <label className="form-control md:w-1/2">
                      <div className="label">
                        <span className="label-text font-bold">
                          Service Image Url:
                        </span>
                      </div>
                      <input
                        type="text"
                        name="serviceImage"
                        defaultValue={data[0].serviceImage}
                        placeholder="Service image url"
                        className="input input-bordered w-full "
                        required
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
                        defaultValue={data[0].serviceName}
                        placeholder="Service Name"
                        className="input input-bordered w-full "
                        required
                      />
                    </label>
                  </div>
                  <div className="md:flex items-center gap-4">
                    <label className="form-control md:w-1/2">
                      <div className="label">
                        <span className="label-text font-bold">
                          Service Provider Name:
                        </span>
                      </div>
                      <input
                        type="text"
                        name="serviceProviderName"
                        defaultValue={data[0].serviceProviderName}
                        placeholder="Price"
                        className="input input-bordered w-full"
                        required
                      />
                    </label>
                    <label className="form-control md:w-1/2">
                      <div className="label">
                        <span className="label-text font-bold">
                          Service Provider Email:
                        </span>
                      </div>
                      <input
                        type="text"
                        name="serviceProviderEmail"
                        defaultValue={data[0].serviceProviderEmail}
                        placeholder="Service Provider Email"
                        className="input input-bordered w-full"
                        required
                      />
                    </label>
                  </div>
                  <label className="form-control">
                    <div className="label">
                      <span className="label-text font-bold">
                        Service Provider Photo Url:
                      </span>
                    </div>
                    <input
                      type="text"
                      name="serviceProviderPhotoUrl"
                      defaultValue={data[0].serviceProviderImage}
                      placeholder="Service Provider Photo Url"
                      className="input input-bordered w-full"
                      required
                    />
                  </label>
                  <div className="md:flex items-center gap-4">
                    <label className="form-control md:w-1/2">
                      <div className="label">
                        <span className="label-text font-bold">Price:</span>
                      </div>
                      <input
                        type="text"
                        name="servicePrice"
                        defaultValue={data[0].servicePrice}
                        placeholder="Price"
                        className="input input-bordered w-full"
                        required
                      />
                    </label>
                    <label className="form-control md:w-1/2">
                      <div className="label">
                        <span className="label-text font-bold">
                          Service Area:
                        </span>
                      </div>
                      <input
                        type="text"
                        name="area"
                        placeholder="Service Area"
                        defaultValue={data[0].serviceLocation}
                        className="input input-bordered w-full"
                        required
                      />
                    </label>
                  </div>
                  <label>
                    <div className="label">
                      <span className="label-text font-bold">Description:</span>
                    </div>
                    <textarea
                      placeholder="Description"
                      defaultValue={data[0].description}
                      rows={5}
                      className="textarea textarea-lg textarea-bordered w-full"
                      name="description"
                      required
                    ></textarea>
                  </label>
                  <input
                    className="mt-5 btn btn-main hover:bg-[#ff7404] w-full font-bold"
                    type="submit"
                    value="Update Service"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UpdateProviderForm;