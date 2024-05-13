import { useLoaderData } from "react-router-dom";
import NavBar from "./Home/NavBar/NavBar";

const UpdateProviderForm = () => {
    const data = useLoaderData(); 
    console.log(data)

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

        const formInfo = {
          serviceImage,
          serviceName,
          servicePrice,
          serviceLocation,
          description,
          serviceProviderName,
          serviceProviderEmail,
        };
        console.log(formInfo)

    }
    return (
      <div>
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
                      <select
                        className="px-4 py-3 rounded-md border w-full"
                        name="serviceName"
                        required
                      >
                        <option value="Dermatology">Dermatology</option>
                        <option value="Cardiology">Cardiology</option>
                        <option value="Pediatrics">Pediatrics</option>
                        <option value="Orthopedics">Orthopedics</option>
                        <option value="Neurology">Neurology</option>
                        <option value="Gastroenterology">
                          Gastroenterology
                        </option>
                        <option value="Mental Health">Mental Health</option>
                      </select>
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
                      className="textarea textarea-lg textarea-bordered w-full"
                      name="description"
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