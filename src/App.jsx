import {  Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./index.css";
import Invest from "./pages/Invest";
import Properties from "./pages/Properties";
import About from "./pages/About";
import GetStarted from "./pages/GetStarted";
import ViewAllInvestments from "./pages/viewAllInvestments/viewAllInvestments";

import SaleProduct from "./components/saleProduct/saleProduct";


import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import FormForInverstorData from "./components/formForInverstorData/formForInverstorData";
import logoImg from "/IMG-homePage/pro-logo.png";
const hasStoredToken=() => {
  return Boolean(localStorage.getItem("token")?.trim());
};

function PurchaseProtectedRoute({ children, isLoggedIn }) {
  if (!isLoggedIn) {
    return <Navigate to="/getStarted" replace />;
  }
  return children;
}
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(hasStoredToken);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  const navLinks = [
    {
      name: "sale",
      path: "/sale",
      requiresAuth: true,
    },
    {
      name: "Invest",
      path: "/",
      //requiresAuth: true,
    },
    {
      name: "About",
      path: "/about",
      //requiresAuth: false,
    },
    {
      name: "Properties",
      path: "/properties",
      //requiresAuth: true,
    },
    
  ];

  const sections = [
    {
      title: "Links",
      items: ["Investment Terms", "Privacy Policy"],
    },
    {
      title: "Support",
      items: ["Contact Us", "Help Center"],
    },
    {
      title: "Legal",
      items: ["Regional Compliance", "Terms of Use"],
    },
  ];

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const changeTheme = () => {
    setTheme((previousTheme) =>
      previousTheme === "light" ? "dark" : "light"
    );
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className={`app ${theme}`}>
      <NavBar
        navLinks={navLinks}
        logo={logoImg}
        btnTitle="Get Started"
        theme={theme}
        changeTheme={changeTheme}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />

      <Routes>
        {/* Public routes */}
        <Route path="/about" element={<About />} />

        <Route
          path="/getStarted"
          element={
            <GetStarted onLoginSuccess={handleLoginSuccess} />
          }
        />

        
        <Route
          path="/"
          element={
              <Invest isLoggedIn={isLoggedIn} />
          }
        />

        <Route
          path="/properties"
          element={
              <Properties />
          }
        />
        <Route
          path="/sale"
          element={
            <PurchaseProtectedRoute isLoggedIn={isLoggedIn}>
              <SaleProduct />
            </PurchaseProtectedRoute>
          }
        />

        <Route
          path="/viewAllInvestments"
          element={
              <ViewAllInvestments
                isLoggedIn={isLoggedIn}
               />
          }
        />
        <Route
  path="/formForInverstorData"
  element={
    <PurchaseProtectedRoute isLoggedIn={isLoggedIn}>
      <FormForInverstorData />
    </PurchaseProtectedRoute>
  }
/>
</Routes>
        

      <Footer
        title="Syria Rebuild"
        paragaraph="A leading platform for real estate investment management in Syria, licensed and operating according to international governance and transparency standards."
        sections={sections}
      />
    </div>
  );
}

export default App;
