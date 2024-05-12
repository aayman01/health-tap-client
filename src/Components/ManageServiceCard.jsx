import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";

const ManageServiceCard = ({service}) => {
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

    const handleDelete = id => {
        console.log(id)
    }
    return (
      <div className="card card-compact bg-base-100 shadow-xl border">
        <figure>
          <img className="w-80 h-60" src={serviceImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h3 className="text-second font-bold text-2xl">{serviceName}</h3>
          <p className="mt-2 text-sm text-gray-400">
            {description.slice(0, 100)}...
          </p>
          <div className="flex items-center justify-between">
            <p className="flex font-semibold items-center gap-1 text-base uppercase">
              <CiLocationOn />
              {serviceLocation}
            </p>
            <div>
              <p className="text-end font-bold bg-[#ff7404] p-2 rounded-md text-white">
                ${servicePrice}
              </p>
            </div>
          </div>
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
          <div className="card-actions justify-end">
            <button className="btn btn-main hover:bg-[#ff7404]">
              Update
            </button>
            <button onClick={()=>handleDelete(_id)} className="btn btn-warning">
              Delete
            </button>
          </div>
        </div>
      </div>
    );
};

ManageServiceCard.propTypes = {
    service: PropTypes.node.isRequired,
}

export default ManageServiceCard;