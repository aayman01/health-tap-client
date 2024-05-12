import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const AllServiceCard = ({ service }) => {
//   console.log(service);
  const {
    _id,
    serviceImage,
    serviceName,
    description,
    serviceProviderImage,
    serviceProviderName,
    servicePrice,
    serviceLocation,
  } = service;
  return (
    <div className="overflow-hidden bg-inherit rounded-lg shadow-xl">
      <div className="flex items-center gap-6">
        <div className="">
          <img
            className="rounded-sm object-cover ml-3 w-24 h-28"
            src={serviceImage}
            alt="service image"
          />
        </div>
        <div className="p-6 w-full">
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
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
              <div className="">
                <p className="text-end font-bold bg-[#ff7404] p-2 rounded-md text-white">
                  ${servicePrice}
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-second font-bold text-2xl">{serviceName}</h3>
            <p className="my-2 text-sm text-gray-400">
              {description.slice(0, 100)}...
            </p>
            <p className="flex items-center gap-1 text-base uppercase">
              <CiLocationOn />
              {serviceLocation}
            </p>
          </div>
        </div>
      </div>
      <div className="p-2">
        <Link to={`/providerViewDeatils/${_id}`}>
          <button className="btn btn-main hover:bg-[#ff7404] w-full p-2">
            View Deatils
          </button>
        </Link>
      </div>
    </div>
  );
};

AllServiceCard.propTypes = {
    service : PropTypes.object.isRequired,
}

export default AllServiceCard;
