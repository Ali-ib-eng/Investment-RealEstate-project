import { Link, NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";
import {FaRegSun,FaTimes,FaUserCircle} from "react-icons/fa";
import { BsCloudMoonFill }from "react-icons/bs";
import { FiMenu, FiX }from "react-icons/fi";
const NavBar = ({navLinks,logo,btnTitle,theme,changeTheme,})=>{
  const [show, setShow] = useState(false);
  //اضافة دالة التنقل بين الصفحات
  const navigate = useNavigate();
  //is user logged in or not
  const isLoggedIn=Boolean(
    localStorage.getItem("token")?.trim()
  );
  const handleNavClick = (event,link)=>{
    const token = localStorage.getItem("token")?.trim();
    if (link.requiresAuth && !token) {
      // Prevent navigation and redirect to login eg \properties
      event.preventDefault();
      navigate("/getStarted");
    }
    setShow(false);
  };

  const userPagePath=isLoggedIn?"/userDashboard": "/getStarted";
  return (
    <>
      <nav className="Ali-NavBar">
        <div className="Ali-Container">
          <img src={logo} alt="Logo" className="Ali-logo" />

          <div className="ahm-show-btn-container">
            <button
              className="show-btn"
              onClick={() => setShow(!show)}>{!show ? <FiMenu /> : <FiX />}
            </button>
            {!show && (
              <Link
                className="user-btn-desktop" to={userPagePath}
              >
                <FaUserCircle className="ahm-user-icon" />
              </Link>
            )}
          </div>
          {/*desktop view*/}
          <div className="Ali-links">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                onClick={(event) =>
                  handleNavClick(event, link)
                }
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                      ? "active"
                      : ""
                }
              >
                {link.name}
              </NavLink>
            ))}

            {!isLoggedIn && (
              <button className="start-btn-desktop">
                <Link
                  className="Ali-white-link-desktop"
                  to="/getStarted"
                >
                  {btnTitle}
                </Link>
              </button>
            )}

            <button
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

            <Link
              className="user-btn-desktop"
              to={userPagePath}
            >
              <FaUserCircle className="ahm-user-icon" />
            </Link>
          </div>
        </div>
      </nav>
      {/*mobile view*/}
      <div
        className="mobile-menu"
        style={{ display: show ? "block" : "none" }}
      >
        <FaTimes
          style={{
            margin: "10px",
            fontSize: "20px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={() => setShow(false)}
        />

        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            onClick={(event) =>
              handleNavClick(event, link)
            }
          >
            {link.name}
          </NavLink>
        ))}
        
        {!isLoggedIn && (
          <button
            onClick={() => setShow(false)}
            className="start-btn-mobile"
          >
            <Link
              className="Alilink-mobile"
              to="/getStarted"
            >
              {btnTitle}
            </Link>
          </button>
        )}<button
          className="dark-light-Mode-MobileBtn"
          onClick={changeTheme}
        >
          {theme==="light" ?(
            <>
              <BsCloudMoonFill /> Dark
            </>
          ) : (
            <>
              <FaRegSun /> Light
            </>
          )}
        </button>

        <Link
          onClick={() => setShow(false)}
          className="user-btn-desktop"
          to={userPagePath}
        >
          <FaUserCircle className="ahm-user-icon" />
        </Link>
      </div>
    </>
  );
};

export default NavBar;