import { Link } from 'react-router-dom';
import img from '../../assets/xj_3gkQFD.png'
import { FaGithub } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
const Login = () => {
    return (
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <div className="w-1/2">
            <img src={img} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-main hover:bg-[#ff7404]"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center text-black mb-4 font-medium">
              -Or login with-
            </p>
            <div className="flex text-2xl items-center gap-3 justify-center">
              <button>
                <FcGoogle />
              </button>
              <button>
                <FaGithub />
              </button>
            </div>
            <p className="text-center text-black mt-4 pb-10 font-medium">
              Do not have an account?
              <Link
                className="text-red-600 font-medium underline decoration-red-600"
                to="/register"
              >
                {" "}
                Register
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    );
};

export default Login;