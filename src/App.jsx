import {Navigate,Route,Routes,}from "react-router-dom";
import "./index.css";
import Invest from "./pages/Invest";
import Properties from "./pages/Properties";
import About from "./pages/About";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ViewAllInvestments from "./pages/viewAllInvestments/viewAllInvestments";
import UserDashboard from "./components/userDashboard/userDashboard";
import logoImg from "/IMG-homePage/pro-logo.png";
import { useEffect, useState } from "react";
import GetStarted from "./pages/GetStarted";
import UpdatePassword from "./components/updateAccount/updateAccount";
//auto transform
function ProtectedRoute({ children }) {
  const token=localStorage.getItem("token")?.trim();
  if (!token) {
    return (
      <Navigate
        to="/getStarted" replace />);
  }
  //page inside ProtectedRoute
  return children;
}

function App() {
  const navLinks = [
    {
      name: "Invest",
      path: "/",
      requiresAuth:true,// This link requires authentication
    },
    {
      name: "About",
      path: "/about",
      requiresAuth:false,//this link doesnt requires authentication
    },
    {
      name: "Properties",
      path: "/properties",
      requiresAuth:true,
    },
  ];

  const sections = [
    {
      title: "Links",
      items:[
        "Investment Terms",
        "Privacy Policy",
      ],
    },
    {
      title: "Support",
      items:["Contact Us","Help Center"],
    },
    {
      title:"Legal",
      items: [
        "Regional Compliance",
        "Terms of Use",
      ],
    },
  ];

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme",theme);
  }, [theme]);

  const changeTheme =()=>{
    setTheme((previousTheme) =>
      previousTheme==="light"?"dark":"light");
};

  return (
    <>
    <div className={` app ${theme}`}>
      <NavBar
        navLinks={navLinks}
        logo={logoImg}
        btnTitle="Get Started"
        theme={theme}
        changeTheme={changeTheme}
      />

      <Routes>
        {/* public routes which is user see*/}
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/getStarted"
          element={<GetStarted />}
        />
        {/* protected routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Invest />
            </ProtectedRoute>
          }
        />
        {/* protected routes */}
        <Route
          path="/properties"
          element={
            <ProtectedRoute>
              <Properties />
            </ProtectedRoute>
          }
        />
        {/* protected routes */}
        <Route
          path="/viewAllInvestments"
          element={
            <ProtectedRoute>
              <ViewAllInvestments />
            </ProtectedRoute>
          }
        />
        {/* protected routes */}
        <Route
          path="/userDashboard"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        {/* protected routes */}
        <Route
          path="/updatePassword"
          element={
            <ProtectedRoute>
              <UpdatePassword />
            </ProtectedRoute>
          }
        />

        {/* بحال بدنا نضيف روابط جديدة */}
        <Route
          path="*"
          element={<Navigate to="/getStarted" replace />}
        />
      </Routes>

      <Footer
        title="Syria Rebuild"
        paragaraph="A leading platform for real estate investment management in Syria, licensed and operating according to international governance and transparency standards."
        sections={sections}
      />
    </div>
    </>
  );
}

export default App;

