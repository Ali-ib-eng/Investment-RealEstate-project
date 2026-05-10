import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";
import { FaRegSun } from "react-icons/fa";
import { BsCloudMoonFill } from "react-icons/bs";
const NavBar = ({navLinks,logo,btnTitle,theme,changeTheme}) => {
  const [show,setShow]=useState(false);
  return (
    <>
      <nav className="Ali-NavBar">
        <div className="Ali-Container">
          <img src={logo} alt="Logo" className="Ali-logo" />
          <button
            className="show-btn"
            onClick={()=>setShow(!show)}
          >
              &#9776;
          </button>
          <div className="Ali-links">
            {navLinks.map((link, index) => (
              <NavLink key={index} to={link.path}
              className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""}>

                {link.name}
              </NavLink>
            ))}
            <button className="start-btn-desktop">
              <Link className="Ali-white-link-desktop" to="/get-started">{btnTitle}</Link>
              </button>
              <button className="dark-light-Mode-DesktopBtn" onClick={changeTheme}>{theme==="light"?<><BsCloudMoonFill/> Dark</> : <><FaRegSun/> Light</> }</button>
          </div>
          
        </div>
        
      </nav>
      <div className="mobile-menu"
           style={{ display:show?"block":"none" }}>
        {navLinks.map((link, index) => (
          <NavLink key={index} to={link.path}>
            {link.name}
          </NavLink>
        ))}
        <button className="start-btn-mobile">
          <Link className="Alilink-mobile" to="/get-started">{btnTitle}</Link>
          </button>
          <button className="dark-light-Mode-MobileBtn" onClick={changeTheme}>{theme==="light"?<> <BsCloudMoonFill/> Dark</> : <><FaRegSun /> Light</> }</button>
          
      </div>
    </>
  );
};
export default NavBar;
