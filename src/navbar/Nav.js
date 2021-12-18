import { whileStatement } from "@babel/types";
import React from "react";
import { Link } from "react-router-dom";
import "./App.css"

const Nav = () => {
  const navStyle = {
    color: 'white',
    
  };
  return (
    <nav>
      <h2>EDGE HUB</h2>
      <ul className="nav-Link">
      <Link style={navStyle} to="/all">
          <li className="spark-month">All</li>
        </Link>
        <Link style={navStyle} to="/SparkOFtheMonth">
          <li className="spark-month">Spark of the Month</li>
        </Link>
        <Link style={navStyle} to="/SparkOFtheQuater">
          <li className="spark-quater">Spark of the Quater</li>
        </Link>
        <Link style={navStyle} to="/SparkOFtheYear">
          <li className="spark-year">Spark of the Year</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
