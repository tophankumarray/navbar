import React from "react";
import Navbar from "./Navbar/Navbar";

const Dashboard = ({ toggle, setToggle }) => {
  return (
    <div className={`${toggle ? "" : " ml-64 "} w-full shadow-lg`}>
      <Navbar toggle={toggle} setToggle={setToggle} />
    </div>
  );
};

export default Dashboard;
