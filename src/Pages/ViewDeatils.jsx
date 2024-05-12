import { Link, useLoaderData } from "react-router-dom";
import NavBar from "./Home/NavBar/NavBar";
import { VscDebugBreakpointData } from "react-icons/vsc";

const ViewDeatils = () => {
    const allData = useLoaderData();
    
    console.log(allData)
    return (
      <div>
        <div className="h-20">
          <NavBar />
        </div>
        <div className="max-w-6xl mx-auto px-4">
          {/* service provider information */}
          <div className="flex justify-center items-center my-10">
            {/* service provider information */}
            <div className="flex flex-col rounded-lg bg-[#fed938] justify-center w-full items-center py-5">
              <div className="p-5">
                <img
                  className="w-56 h-56 rounded-full"
                  src={allData[0]?.serviceProviderImage}
                  alt="service provider image"
                />
              </div>
              <div className="text-center">
                <h2 className="text-primary font-semibold">
                  Doctor Name: {allData[0]?.serviceProviderName}
                </h2>
                <p className="text-primary font-semibold">
                  Location: {allData[0]?.serviceLocation}
                </p>
              </div>
            </div>
          </div>
          {/* service information */}
          <div className="flex justify-center items-center ">
            <img
              className="w-56 mb-5"
              src={allData[0]?.serviceImage}
              alt={allData[0]?.serviceName}
            />
          </div>
          <div className="text-center mb-5">
            <h2 className="text-primary font-bold text-4xl underline decoration-[#ff7404]">
              {allData[0]?.serviceName}
            </h2>
          </div>
          <div className="flex items-center">
            <VscDebugBreakpointData className="text-primary " />
            <h2 className="underline decoration-[#ff7404] text-primary font-bold text-2xl ">
              Service Description:
            </h2>
          </div>
          <div className="ml-4">
            <span className="text-gray-400">
              {allData[0].serviceDescription}
            </span>
          </div>

          <div className="flex-col md:flex items-center justify-between">
            <div className="flex items-center mt-3">
              <div className="flex items-center">
                <VscDebugBreakpointData className="text-primary " />
                <h2 className="underline decoration-[#ff7404] text-primary font-bold text-2xl ">
                  Service provided by:
                </h2>
              </div>
              <p className="text-[#ff7404] text-xl font-bold">
                {allData[0]?.serviceProviderName}
              </p>
            </div>
            <div className="flex items-center mt-3 mr-5">
              <div className="flex items-center">
                <VscDebugBreakpointData className="text-primary " />
                <h2 className="underline decoration-[#ff7404] text-primary font-bold text-2xl ">
                  Price:
                </h2>
              </div>
              <p className="text-[#ff7404] text-xl font-bold">
                {allData[0].servicePrice}
              </p>
            </div>
          </div>
          <div className="mb-16 mt-10">
            <Link to={`/bookconfirm/${allData[0]?._id}`}>
              <button className="btn btn-main w-full">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ViewDeatils;