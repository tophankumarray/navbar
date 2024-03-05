import React from "react";

const Sidebar = ({ toggle }) => {
  return (
    <div
      className={` ${
        toggle ? " hidden " : " block "
      } w-64 bg-grey-300 fixed h-full shadow-2xl`}
    >
      <div></div>
      <hr />
      <ul className="mt-3">
        <li className="mb-2 rounded hover:shadow hover:bg-blue-300 py-2">
          <a href="" className="px-3">
            <i className="fa-solid fa-gauge-high inline-block w-6 mr-2 -mt-2"></i>
            Dashboard
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-300 py-2">
          <a href="" className="px-3">
            <i className="fa-solid fa-gauge-high inline-block w-6 mr-2 -mt-2"></i>
            Inventory
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-300 py-2">
          <a href="" className="px-3">
            <i className="fa-solid fa-gauge-high inline-block w-6 mr-2 -mt-2"></i>
            Orders
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-300 py-2">
          <a href="" className="px-3">
            <i className="fa-solid fa-gauge-high inline-block w-6 mr-2 -mt-2"></i>
            Shipping
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-300 py-2">
          <a href="" className="px-3">
            <i className="fa-solid fa-gauge-high inline-block w-6 mr-2 -mt-2"></i>
            Channel
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
