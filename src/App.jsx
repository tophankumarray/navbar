import React, { useState } from "react";
import "./app.css";
import Sidebar from "./Component/Sidebar";
import Dashboard from "./Component/Dashboard";

const App = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex">
      <Sidebar toggle={toggle} />
      <Dashboard toggle={toggle} setToggle={setToggle} />
    </div>
  );
};

export default App;
