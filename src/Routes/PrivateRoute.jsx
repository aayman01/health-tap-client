import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import PropTypes from "prop-types";
import { ClipLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <ClipLoader color="#4844bc" size={50} />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

PrivateRoute.propTypes ={
    children : PropTypes.node.isRequired,
}
export default PrivateRoute;