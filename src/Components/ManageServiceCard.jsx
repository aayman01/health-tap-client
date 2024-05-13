import axios from "axios";
import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageServiceCard = ({ service, setMyService, myService }) => {
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

  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/myService/${id}`).then((data) => {
          const res = data.data;
          if (res.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            const remaining = myService.filter(dt => dt._id !== id);
            setMyService(remaining)
          }
        });
      }
    });
  };
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
          <a href="#" className="mx-2 font-semibold text-gray-700" role="link">
            {serviceProviderName}
          </a>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/updateprovider/${_id}`}>
            <button className="btn btn-main hover:bg-[#ff7404]">Update</button>
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn btn-warning">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

ManageServiceCard.propTypes = {
  service: PropTypes.any,
  myService: PropTypes.any,
  setMyService: PropTypes.any,
};

export default ManageServiceCard;
