import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/log.png'
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../Hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';
import NavBar from '../Home/NavBar/NavBar';
const Login = () => {
    const { user,signInUser, googleLogIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    console.log(user)
    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const user = {email, password}
        console.log(user)

        signInUser(email, password)
          .then((result) => {
            console.log(result)
            toast.success("Successfully logged in!");
            setTimeout(
              () => navigate(location?.state ? location.state : "/"),
              1500
            );
          })
          .catch((error) => {
            toast.error(error.code);
          })
    }

    const handleGoogleLogin = () => {
      googleLogIn()
        .then((result) => {
            console.log(result)
          toast.success("Successfully logged in!");
          setTimeout(
            () => navigate(location?.state ? location.state : "/"),
            1500
          );
        })
        .catch((error) => {
            console.log(error)
          toast.error(error.message);
        })
    };

    return (
      <div>
        <div className="h-20">
          <NavBar />
        </div>
        <div className="max-w-6xl mx-auto px-4 my-10">
          <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-10">
              <div className="w-1/2">
                <img src={img} alt="" />
              </div>
              <div className="card shrink-0 w-full max-w-sm shadow-2xl">
                <h2 className="text-center p-4 text-3xl font-bold">
                  Login your account
                </h2>
                <form onSubmit={handleSubmit} className="card-body">
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
                  <button onClick={handleGoogleLogin}>
                    <FcGoogle />
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
                <Toaster position="bottom-right" reverseOrder={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;