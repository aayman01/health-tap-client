import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/icon.png'
import useAuth from "../../../Hooks/useAuth";
import { useEffect, useState } from "react";
import '../NavBar/NavBar.css';

const NavBar = () => {
  const { user, logOut } = useAuth();
  const [fix, setFix] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else setTheme("light");
  };
  
  
  const onScrollChange = () => {
    if (window.scrollY >= 100) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  window.addEventListener("scroll", onScrollChange);

  const handleLogOut = () => {
    logOut()
    .then()
    .catch()
  }
    return (
      <div className="max-6xl mx-auto">
        {/* #4844bc #ff7404 */}
        <div
          className={
            fix
              ? "newFixed navbar bg-white fixed z-10 mb-7 px-4"
              : "navbar mt-3 fixed z-10 mb-7 px-4"
          }
        >
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
                    to="/services"
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
                          to="/addservice"
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
                          to="/manageservice"
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
                          to="/bookedservice"
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
                          to="/servicetodo"
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
                  to="/services"
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
                    <summary className="text-[#4844bc] font-medium text-base">
                      Dashboard
                    </summary>
                    <ul className="space-y-1">
                      <li>
                        <NavLink
                          to="/addservice"
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
                          to="/manageservice"
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
                          to="/bookedservice"
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
                          to="/servicetodo"
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
            <label className="swap swap-rotate mr-5">
              <input
                type="checkbox"
                onChange={handleToggle}
                checked={theme === "light" ? false : true}
              />
              <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              <svg
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
            {user ? (
              <div className="dropdown dropdown-end mr-4">
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
                    <button
                      onClick={handleLogOut}
                      className="font-semibold p-2 hover:bg-[#4844bc] text-[#ff7404] hover:text-white"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link
                to="/login"
                className="btn btn-main mr-4 hover:bg-[#ff7404]"
              >
                Log In
              </Link>
            )}
          </div>
        </div>
      </div>
    );
};

export default NavBar;