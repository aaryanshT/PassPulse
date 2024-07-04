import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import AddPassword from "../components/AddPassword";
import LandingPage from "./LandingPage";

const HomePage = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLogged(true);
    }
  }, []);

  return (
    <div>
      <NavBar />
      {isLogged && <AddPassword />}
      {!isLogged && <LandingPage />}
    </div>
  );
};

export default HomePage;
