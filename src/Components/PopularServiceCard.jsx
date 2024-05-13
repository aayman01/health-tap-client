import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PopularServiceCard = ({ service }) => {
  const {
    _id,
    serviceImage,
    serviceName,
    serviceDescription,
    serviceProviderImage,
    serviceProviderName,
    servicePrice,
  } = service;
  return (
    <div className="max-w-2xl overflow-hidden bg-inherit rounded-lg shadow-2xl">
      <div className="flex items-center">
        <div className="">
          <img
            className="rounded-sm object-cover ml-3 w-32 h-28"
            src={serviceImage}
            alt="service image"
          />
        </div>
        <div className="p-6 card">
          <div>
            <h3 className="text-second font-bold text-2xl">{serviceName}</h3>
            <p className="mt-2 text-sm text-gray-400">
              {serviceDescription.slice(0, 100)}...
            </p>
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <div className="flex items-center w-1/2">
                <img
                  className="object-cover h-10 rounded-full"
                  src={serviceProviderImage}
                  alt="Avatar"
                />
                <a
                  href="#"
                  className="mx-2 font-semibold text-gray-700"
                  role="link"
                >
                  {serviceProviderName}
                </a>
              </div>
              <div className="w-1/2">
                <p className="text-end font-bold">{servicePrice}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2">
        <Link to={`/viewdeatils/${_id}`}>
          <button className="btn btn-main hover:bg-[#ff7404] w-full p-2">
            View Deatils
          </button>
        </Link>
      </div>
    </div>
  );
};

PopularServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
};

export default PopularServiceCard;
