import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/icon.png'
import useAuth from "../../Hooks/useAuth";

const NavBar = () => {
  const { user, logOut } = useAuth();
 console.log(user)
  const handleLogOut = () => {
    logOut()
    .then()
    .catch()
  }
    return (
      <div>
        {/* #4844bc #ff7404 */}
        <div className="navbar ml-0 pl-0">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "font-medium p-2 hover:bg-[#4844bc] text-[#ff7404] hover:text-white"
                        : "text-[#4844bc] text-base font-medium"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "font-medium p-2 hover:bg-[#4844bc] text-[#ff7404] hover:text-white"
                        : "text-[#4844bc] text-base font-medium"
                    }
                  >
                    Services
                  </NavLink>
                </li>
                {user && (
                  <li>
                    <a className="text-second font-medium">Dashboard</a>
                    <ul className="p-1 space-y-1">
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "font-medium p-2 hover:bg-[#4844bc] text-[#ff7404] hover:text-white"
                              : "text-[#4844bc] text-base font-medium"
                          }
                        >
                          Add Service
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "font-medium p-2 hover:bg-[#4844bc] text-[#ff7404] hover:text-white"
                              : "text-[#4844bc] text-base font-medium"
                          }
                        >
                          Manage Service
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "font-medium p-2 hover:bg-[#4844bc] text-[#ff7404] hover:text-white"
                              : "text-[#4844bc] text-base font-medium"
                          }
                        >
                          Booked-Services
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "font-medium p-2 hover:bg-[#4844bc] text-[#ff7404] hover:text-white"
                              : "text-[#4844bc] text-base font-medium"
                          }
                        >
                          Service-To-Do
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                )}
              </ul>
            </div>
            <Link to="/">
              <div className="flex items-center justify-center">
                <img className="w-16 h-16" src={logo} alt="logo.png" />
                <h1 className="text-[#ff7404] font-bold text-3xl">
                  Health<span className="text-[#4844bc]">Tap</span>
                </h1>
              </div>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "font-medium text-base p-2 hover:bg-[#4844bc] text-[#ff7404] hover:text-white"
                      : "text-[#4844bc] text-base font-medium"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "font-medium text-base p-2 hover:bg-[#4844bc] text-[#ff7404] hover:text-white"
                      : "text-[#4844bc] text-base font-medium"
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                {user && (
                  <details>
                    <summary className="text-[#ff7404] font-medium text-base">
                      Dashboard
                    </summary>
                    <ul className="space-y-1">
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "font-medium p-2 hover:bg-[#4844bc] text-[#ff7404] hover:text-white"
                              : "text-[#4844bc] text-base font-medium"
                          }
                        >
                          Add Service
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "font-medium p-2 hover:bg-[#4844bc] text-[#ff7404] hover:text-white"
                              : "text-[#4844bc] text-base font-medium"
                          }
                        >
                          Manage Service
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "font-medium p-2 hover:bg-[#4844bc] text-[#ff7404] hover:text-white"
                              : "text-[#4844bc] text-base font-medium"
                          }
                        >
                          Booked-Services
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "font-medium p-2 hover:bg-[#4844bc] text-[#ff7404] hover:text-white"
                              : "text-[#4844bc] text-base font-medium"
                          }
                        >
                          Service-To-Do
                        </NavLink>
                      </li>
                    </ul>
                  </details>
                )}
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img alt="User Photo" src={user?.photoURL} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <button onClick={handleLogOut}>Logout</button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login" className="btn btn-main hover:bg-[#ff7404]">
                Log In
              </Link>
            )}
          </div>
        </div>
      </div>
    );
};

export default NavBar;