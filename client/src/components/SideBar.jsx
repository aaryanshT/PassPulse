import { GiHamburgerMenu } from "react-icons/gi";
import { SlSocialInstagram } from "react-icons/sl";
import { MdCastForEducation } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";
import { TfiLayoutWidthDefault } from "react-icons/tfi";
import { IoDocumentsOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
const SideBar = () => {
  return (
    <div>
      <div className="drawer ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center relative">
          <label
            htmlFor="my-drawer-2"
            className=" btn-ghost btn  absolute position  left-5 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current text-green-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-55 gap-5 min-h-full bg-base-200 text-base-content font-bold">
            {/* Sidebar content here */}

            <div className="relative">
              <h1 className="text-xl font-bold">Your Collections</h1>
              <div className="absolute inset-x-0  h-0.5 bg-gray-300"></div>
            </div>

            <Link to={"/default"}>
              <li>
                <a>
                  <TfiLayoutWidthDefault />
                  Default
                </a>
              </li>
            </Link>

            <Link to={"/social"}>
              <li>
                <a>
                  <SlSocialInstagram /> Social
                </a>
              </li>
            </Link>

            <Link to={"/education"}>
              <li>
                <a>
                  <MdCastForEducation />
                  Education
                </a>
              </li>
            </Link>

            <Link to={"/gaming"}>
              <li>
                <a>
                  <IoGameControllerOutline />
                  Gaming
                </a>
              </li>
            </Link>

            <Link to={"/documents"}>
              <li>
                <a>
                  <IoDocumentsOutline />
                  Documents
                </a>
              </li>
            </Link>
            <div className=" btn drawer-button  absolute bottom-5 right-8 mx-auto ">
              <FaPlus />
              Add Collection
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
