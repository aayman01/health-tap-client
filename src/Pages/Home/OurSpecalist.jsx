import img1 from '../../assets/doctor1.jpg'
import img2 from '../../assets/Doctor2.jpg'
import img3 from '../../assets/doctor3.jpg'
import img4 from '../../assets/doctor4.jpg'
import img5 from '../../assets/doctor5.jpg'
import img6 from '../../assets/doctor6.jpg'
const OurSpecalist = () => {
    return (
      <div className="max-w-6xl mx-auto px-4">
        <div>
          <h2 className="text-4xl font-bold text-second mb-16 mt-32 text-center">
            Our Specialists
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-28">
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img src={img1} alt="doctor" />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-xl font-bold text-center">
                DR. Sherrie Onks
              </h2>
              <p className="text-second font-bold">Specialty: Dermatology</p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img src={img2} alt="doctor" />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-xl font-bold">Dr. James Mitchell</h2>
              <p className="text-second font-bold">Specialty: Cardiology</p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img src={img3} alt="doctor" />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-xl font-bold">Dr. Robert Chen</h2>
              <p className="text-second font-bold">Specialty: Orthopedics</p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img src={img4} alt="doctor" />
            </figure>
            <div className="card-body">
              <h2 className="text-xl font-bold text-center">
                Dr. David Johnson
              </h2>
              <p className="text-second font-bold text-center">
                Specialty: Gastroenterology
              </p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img src={img5} alt="doctor" />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-xl font-bold">Dr. Sarah Patel</h2>
              <p className="text-second font-bold">Specialty: Pediatrics</p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img src={img6} alt="doctor" />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-xl font-bold">Dr. Luna Morales</h2>
              <p className="text-second font-bold">Specialty: Neurology</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default OurSpecalist;