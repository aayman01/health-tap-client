import phone from '../../assets/phone.png'

const Appointment = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 my-16">
      <div className="md:flex items-center justify-between gap-6">
        <section className="p-6 rounded-md shadow-2xl bg-inherit">
          <h2 className="text-5xl font-bold text-primary mb-4">
            Make an Appointment
          </h2>

          <form className="">
            <div className="grid grid-cols-1 gap-6 mt-4 lg:grid-cols-3">
              <div>
                <label className="form-control">
                  <div className="label">
                    <span className="label-text font-bold">Select Doctor:</span>
                  </div>
                  <select
                    className="px-4 py-3 input input-bordered rounded-md border w-full"
                    name="doctorName"
                    required
                  >
                    <option value="Dr. Emily Roberts">Dr. Emily Roberts</option>
                    <option value="Dr. James Mitchell">
                      Dr. James Mitchell
                    </option>
                    <option value="Dr. Sarah Patel">Dr. Sarah Patel</option>
                    <option value="Dr. Robert Chen">Dr. Robert Chen</option>
                    <option value="Dr. Laura Morales">Dr. Laura Morales</option>
                    <option value="Dr. David Johnson">Dr. David Johnson</option>
                  </select>
                </label>
              </div>
              <label className="form-control">
                <div className="label">
                  <span className="label-text font-bold">
                    Select Department:
                  </span>
                </div>
                <select
                  className="px-4 py-3 input input-bordered rounded-md border w-full"
                  name="department"
                  required
                >
                  <option value="Dermatology">Dermatology</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Pediatrics"> Pediatrics</option>
                  <option value="Orthopedics"> Orthopedics</option>
                  <option value="Neurology"> Neurology</option>
                  <option value="Gastroenterology">Gastroenterology</option>
                </select>
              </label>

              <label className="form-control">
                <div className="label">
                  <span className="label-text font-bold">Your Name:</span>
                </div>
                <input
                  type="text"
                  name="servicePrice"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                  required
                />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="label-text font-bold">Your mobile:</span>
                </div>
                <input
                  type="text"
                  name="mobile"
                  placeholder="Your mobile"
                  className="input input-bordered w-full"
                  required
                />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="label-text font-bold">Set date:</span>
                </div>
                <input
                  type="date"
                  name="date"
                  placeholder="Set date"
                  className="input input-bordered w-full"
                  required
                />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="label-text font-bold">Set Time:</span>
                </div>
                <input
                  type="time"
                  name="time"
                  placeholder="Set time"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="flex justify-end mt-6">
              <button className="btn btn-main hover:bg-[#ff7404]">
                Make An Appointment
              </button>
            </div>
          </form>
        </section>
        <p className="text-xl text-gray-400 text-center mt-4">Or</p>
        <div className="flex flex-col justify-center items-center">
          <img className="w-[200px] h-[200px]" src={phone} alt="" />
          <p className="text-primary font-bold text-4xl text-center">
            + (01) 335 780 65
          </p>
          <p className="text-gray-400 mt-2 text-center">
            Need more information? call this number.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
