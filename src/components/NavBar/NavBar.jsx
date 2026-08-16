import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaRegSun, FaTimes } from "react-icons/fa";
import { BsCloudMoonFill } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import "./NavBar.css";
const NavBar = ({navLinks,logo,btnTitle,theme,changeTheme,isLoggedIn,onLogout,}) => {
  const [show, setShow] = useState(false);
  const [logoutLoading, setLogoutLoading] = useState(false);

  const navigate = useNavigate();

  const handleNavClick = (event, link) => {
    const token = localStorage.getItem("token")?.trim();
    if (link.requiresAuth && !token) {
      event.preventDefault();
      navigate("/getStarted");
    }
    setShow(false);
  };

  const goToGetStarted = () => {
    setShow(false);
    navigate("/getStarted");
  };
  const finishLocalLogout = () => {
    localStorage.removeItem("token");
    onLogout?.();
    setShow(false);
    navigate("/getStarted", {
      replace: true,
      state: {
        message:
          "You have been logged out successfully. Please log in again.",
      },
    });
  };

  const logoutUser = async () => {
    if (logoutLoading) return;
    const token = localStorage.getItem("token")?.trim();
    if (!token) {
      finishLocalLogout();
      return;
    }

    try {
      setLogoutLoading(true);
      const response = await axios.post(
        "https://zoological-flow-production-40af.up.railway.app/api/auth/logout",
        {},
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Logout response:", response.data);
    } catch (error) {
      console.error("Logout status:", error.response?.status);
      console.error("Logout response:", error.response?.data);
    } finally {
      finishLocalLogout();
      setLogoutLoading(false);
    }
  };
  return (
    <>
      <nav className="Ali-NavBar">
        <div className="Ali-Container">
          <img
            src={logo}
            alt="Logo"
            className="Ali-logo"
          />
          <div className="ahm-show-btn-container">
            <button
              type="button"
              className="show-btn"
              aria-expanded={show}
              onClick={() => setShow(!show)}
            >
              {!show ? <FiMenu /> : <FiX />}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="Ali-links">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={(event) =>
                  handleNavClick(event, link)
                }
                className={({ isActive, isPending }) => {
                  if (isPending) return "pending";
                  if (isActive) return "active";
                  return "";
                }}
              >
                {link.name}
              </NavLink>
            ))}

            {isLoggedIn ? (
              <button
                type="button"
                className="logout-btn-desktop"
                onClick={logoutUser}
                disabled={logoutLoading}
              >
                <MdLogout aria-hidden="true" /> {logoutLoading? "Logging out...": "Log out"}
              </button>):(
              <button
                type="button"
                className="start-btn-desktop"
                onClick={goToGetStarted}
              >
                <span className="Ali-white-link-desktop">
                  {btnTitle}
                </span>
              </button>
            )}

            <button
              type="button"
              className="dark-light-Mode-DesktopBtn"
              onClick={changeTheme}
            >
              {theme === "light" ? (
                <>
                  <BsCloudMoonFill /> Dark
                </>
              ) : (
                <>
                  <FaRegSun /> Light
                </>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile navigation */}
      <div
        className="mobile-menu"
        style={{
          display: show ? "block" : "none",
        }}
      >
        <FaTimes
          aria-label="Close navigation menu"
          style={{
            margin: "10px",
            fontSize: "20px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={() => setShow(false)}
        />

        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={(event) =>
              handleNavClick(event, link)
            }
          >
            {link.name}
          </NavLink>
        ))}

        {isLoggedIn ? (
          <button
            type="button"
            className="start-btn-mobile"
            onClick={logoutUser}
            disabled={logoutLoading}
          >
            <MdLogout aria-hidden="true" />

            {logoutLoading
              ? "Logging out..."
              : "Log out"}
          </button>
        ) : (
          <button
            type="button"
            className="start-btn-mobile"
            onClick={goToGetStarted}
          >
            <span className="Alilink-mobile">
              {btnTitle}
            </span>
          </button>
        )}

        <button
          type="button"
          className="dark-light-Mode-MobileBtn"
          onClick={changeTheme}
        >
          {theme === "light" ? (
            <>
              <BsCloudMoonFill /> Dark
            </>
          ) : (
            <>
              <FaRegSun /> Light
            </>
          )}
        </button>
      </div>
    </>
  );
};

export default NavBar;