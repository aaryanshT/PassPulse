import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../firebase-config";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success("Registered successfully!", {
          position: "bottom-right",
          autoClose: 1000,
          onClose: () => {
            navigate("/login");
          }
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error(errorMessage, {
          position: "bottom-right",
          autoClose: 2000,
        });
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200 relative">
      <Link to="/">
        <div className="btn btn-ghost absolute top-3 left-3">&lt;back</div>
      </Link>
      <div className="card w-full max-w-md shadow-2xl bg-base-100 p-6 rounded-lg">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold">Register Now!</h1>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
          </div>

          <div className="mt-2">
            <Link to="/login" className="label-text-alt link link-hover">
              Already a user? Sign in!
            </Link>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary w-full" type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
