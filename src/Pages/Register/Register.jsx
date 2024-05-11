import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/xj_3gkQFD.png'
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../Hooks/useAuth';
import { updateProfile } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';
import NavBar from '../Home/NavBar/NavBar';
const Register = () => {
    const { createUser, googleLogIn } = useAuth();
    const navigate = useNavigate();
    
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;
        
        createUser(email, password)
          .then((result) => {
            updateProfile(result.user, {
              displayName: name,
              photoURL: photoUrl,
            })
              .then((result) => console.log(result))
              .catch();
            toast.success("Successfully registered!");
            setTimeout(() => navigate("/login"), 1500);
          })
          .catch((error) => {
            toast.error(error.message);
          });    
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
          toast.error(error.message);
        });
    };
    return (
      <div>
        <div className="h-20">
          <NavBar />
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="hero min-h-screen my-10">
            <div className="hero-content flex-col lg:flex-row gap-10">
              <div className="w-1/2">
                <img src={img} alt="" />
              </div>
              <div className="card shrink-0 w-full max-w-sm shadow-2xl">
                <h2 className="text-center p-4 text-3xl font-bold">
                  Register your account
                </h2>
                <form onSubmit={handleSubmit} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
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
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Photo Url</span>
                    </label>
                    <input
                      type="text"
                      name="photoUrl"
                      placeholder="Photo URL"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control mt-6">
                    <input
                      className="btn btn-main hover:bg-[#ff7404]"
                      type="submit"
                      value="Register"
                    />
                  </div>
                </form>
                <p className="text-center text-black mb-4 font-medium">
                  -Or Register with-
                </p>
                <div className="flex text-2xl items-center gap-3 justify-center">
                  <button onClick={handleGoogleLogin}>
                    <FcGoogle />
                  </button>
                </div>
                <p className="text-center text-black mt-4 pb-10 font-medium">
                  Already have an account?
                  <Link
                    className="text-red-600 font-medium underline decoration-red-600"
                    to="/register"
                  >
                    {" "}
                    Please Login
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

export default Register;