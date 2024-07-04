import React from 'react';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';

const RightBar = () => {
  return (
    <div className="  fixed top-0 right-0 h-full w-20  flex flex-col items-center justify-center gap-10 ">
      <button className="btn btn-ghost mb-4">
        content 1
      </button>
      <button className="btn btn-ghost mb-4">
        content 2
      </button>
      <button className="btn btn-ghost">
        content-3
      </button>
    </div>
  );
};

export default RightBar;
