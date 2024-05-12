import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Ai from '../assets/Ai.json'

const ErrorPage = () => {
  return (
    <div>
      <div className="flex h-[450px] justify-center items-center">
        <Lottie className=" w-[400px]" animationData={Ai}></Lottie>
      </div>
      <h2 className="text-center font-bold text-4xl">Page Not Found</h2>
      <Link className="flex justify-center mt-4 font-bold " to="/">
        <button className="btn btn-main hover:bg-[#ff7404]">
          Go to homepage
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
