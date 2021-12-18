import React from "react";
//import Child2 from "./child2";
import DashForm from "./dashform";
// import "./dashboard.css"

const Dashboard = () => {
  return (
    <div className="container">
      <h1>DashBoard</h1>
      <DashForm className="inside" />
      {/* <Child2 /> */}
    </div>
  );
};

export default Dashboard;
