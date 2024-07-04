import React, { useState } from "react";

const AddPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(" ");
  const isFormFilled = email && password;
  const [passrate,setPassrate] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="card transform transition duration-300 shadow-xl hover:shadow-2xl w-80 h-auto rounded-lg p-6 ">
        <h2 className="card-title text-xl font-semibold text-center mb-6 text-green-500">
          Add New Password
        </h2>

        <form className="space-y-4 form" onSubmit={handleSubmit}>
          <label className="input input-bordered flex items-center gap-2 p-2 border rounded-lg bg-gray-700 text-white">
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
              type="email"
              className="grow bg-transparent focus:outline-none text-white"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="input input-bordered flex items-center gap-2 p-2 border rounded-lg bg-gray-700 text-white">
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
              onChange={(e) => {
                setPassword(e.target.value);
                setPassrate(e.target.value.length);
              }}
            />
          </label>

          <progress
            className=" progress progress-success w-full h-2 "
            value= {passrate}
            max="100"
          ></progress>

          <select className="select select-bordered w-full p-2 border rounded-lg bg-gray-700 text-white">
            <option disabled selected>
              Category
            </option>
            <option>Work</option>
            <option>Personal</option>
            <option>Other</option>
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
    </div>
  );
};

export default AddPassword;
