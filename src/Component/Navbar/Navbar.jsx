import React from "react";

const Navbar = ({ toggle, setToggle }) => {
  return (
    <nav className="bg-[#fff] px-4 py-3 flex justify-between ">
      <div className="flex items-center text-xl">
        <i
          class="fa-solid fa-bars me-4 cursor-pointer"
          onClick={() => setToggle(!toggle)}
        ></i>
      </div>
      <div className="flex items-center gap-x-5">
        <div className="w-6 h-6">
          <i class="fa-regular fa-moon"></i>
        </div>
        <div className="w-6 h-6">
          <i class="fa-regular fa-bell"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
