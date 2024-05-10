import { Link } from "react-router-dom";
import banner from '../../assets/banner.png'

const Banner = () => {
    return (
      <div>
        <div className="hero pt-20 h-[400px] lg:h-[500px] bg-[#fed938] lg:px-24">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={banner} className="max-w-sm bg-none hidden lg:block" />
            <div>
              <h1 className="text-6xl font-bold playfair-display text-second">
                <span className="text-primary">Welcome!</span> to Healthtap. How
                can we help you?
              </h1>
              <p className="mb-10 font-medium mt-6 text-primary">
                We offers a range of medical services, including primary care,
                mental health, and dermatology consultations
              </p>
              <Link to="/" className="btn btn-main hover:bg-[#ff7404]">
                Make an appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;