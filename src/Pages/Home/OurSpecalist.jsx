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
          <h2 className='text-3xl font-bold text-primary mb-16 mt-32 text-center'>Our Specialists</h2>
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
              <h2 className="text-xl font-bold">DR. Sherrie Onks</h2>
              <p className="text-second font-bold">Specialty: Dermatology</p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img src={img3} alt="doctor" />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-xl font-bold">DR. Sherrie Onks</h2>
              <p className="text-second font-bold">Specialty: Dermatology</p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img src={img4} alt="doctor" />
            </figure>
            <div className="card-body">
              <h2 className="text-xl font-bold text-center">
                DR. Sherrie Onks
              </h2>
              <p className="text-second font-bold">Specialty: Dermatology</p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img src={img5} alt="doctor" />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-xl font-bold">DR. Sherrie Onks</h2>
              <p className="text-second font-bold">Specialty: Dermatology</p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img src={img6} alt="doctor" />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-xl font-bold">DR. Sherrie Onks</h2>
              <p className="text-second font-bold">Specialty: Dermatology</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default OurSpecalist;