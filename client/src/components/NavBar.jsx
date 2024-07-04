import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import RightBar from "./RightBar";
import SideBar from "./SideBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NavBar = () => {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLogged(true);
    }
  }, []); // dependency m nhi daal sakta 

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("user");
        setIsLogged(false);
        toast.success("Logged out successfully!", {
          position: "bottom-right",
          autoClose: 1000,
          onClose: () => {
            window.location.reload();
          }
        });
       
      })
      .catch((error) => {
        toast.error("Error logging out. Please try again.", {
          position: "bottom-right",
          autoClose: 2000,
        });
        console.log("Error signing out:", error);
      });
  };

  return (
    <div className="navbar shadow-xl relative">
      {isLogged&&<div className="flex-none">
        <SideBar />
      </div>}
      <div className="flex-1">
        <a className="btn btn-ghost text-3xl text-green-500 mx-auto">Pass Pulse</a>
      </div>
      {!isLogged && (
        <div className="flex-none p-1 z-10">
          <Link to="/register">
            <div className="btn bg-green-500 text-white z-1">Register</div>
          </Link>
        </div>
      )}
      {isLogged && (
        <div className="flex-none p-1 z-10">
          <div className="btn bg-green-500 text-white z-1" onClick={handleLogout}>
            Logout
          </div>
        </div>
      )}
      {/* <div className="flex-none z-0">
        <RightBar />
      </div> */}
      <ToastContainer />
    </div>
  );
};

export default NavBar;
