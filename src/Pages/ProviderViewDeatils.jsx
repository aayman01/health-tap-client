import { useLoaderData } from "react-router-dom";
import NavBar from "./Home/NavBar/NavBar";
import { VscDebugBreakpointData } from "react-icons/vsc";

const ProviderViewDeatils = () => {
     const allData = useLoaderData();
    return (
      <div>
        <div className="h-20">
          <NavBar />
        </div>
        <div className="max-w-6xl mx-auto px-4 mb-20">
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
            <span className="text-gray-400">{allData[0]?.description}</span>
          </div>

          <div className="flex-row md:flex items-center justify-between">
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
                {allData[0]?.servicePrice}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProviderViewDeatils;