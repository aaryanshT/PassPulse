import React, { useState } from "react";
import { firestore } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import CryptoJS from "crypto-js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import zxcvbn from "zxcvbn";

const AddPassword = () => {
  const [website, setWebsite] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("");
  const isFormFilled = website.trim() && password.trim() && category.trim();
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [strengthText, setStrengthText] = useState("");

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const result = zxcvbn(newPassword);
    setPasswordStrength(result.score * 25);
    
    // Set strength text based on score
    const strengthLabels = ["Very Weak", "Weak", "Fair", "Strong", "Very Strong"];
    setStrengthText(strengthLabels[result.score]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const encryptedPassword = CryptoJS.AES.encrypt(password, "your-secret-key").toString();
    const newPassword = {
      website,
      password: encryptedPassword,
      category,
    };
    try {
      const docRef = await addDoc(collection(firestore, "passwords"), newPassword);
      console.log("Document written with ID:", docRef.id);
      toast.success(`Password for ${website} added successfully!`, {
        position: "bottom-right",
        autoClose: 5000,
      });
      setWebsite("");
      setPassword("");
      setCategory("");
      setPasswordStrength(0);
      setStrengthText("");
    } catch (e) {
      console.error("Error adding document: ", e);
      toast.error("Error adding Password! ", {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="card transform transition duration-300 shadow-xl hover:shadow-2xl w-80 h-auto rounded-lg p-6 bg-gray-800">
        <h2 className="text-xl font-semibold text-center mb-6 text-green-500">
          Add New Password
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="input input-bordered flex items-center gap-2 p-2 border rounded-lg bg-gray-700 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-5 h-5 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow bg-transparent focus:outline-none text-white"
              placeholder="Website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          <div className="input input-bordered flex items-center gap-2 p-2 border rounded-lg bg-gray-700 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-5 h-5 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 1 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow bg-transparent focus:outline-none text-white"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <div 
            className="w-full bg-gray-700 rounded-lg h-2"
            title={`Password Strength: ${strengthText}`}
          >
            <div
              className={`h-full rounded-lg ${
                passwordStrength <= 25 ? 'bg-red-500' : 
                passwordStrength <= 50 ? 'bg-orange-500' : 
                passwordStrength <= 75 ? 'bg-yellow-500' : 'bg-green-500'
              }`}
              style={{ width: `${passwordStrength}%` }}
            ></div>
          </div>
          <div className="text-sm text-white">{strengthText}</div>

          <select
            className="select select-bordered w-full p-2 border rounded-lg bg-gray-700 text-white"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>
              Category
            </option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Other">Other</option>
          </select>

          {isFormFilled && (
            <button
              type="submit"
              className="btn bg-green-500 text-white w-full py-2 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Add Password
            </button>
          )}
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddPassword;
