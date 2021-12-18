import React from 'react';
import { whileStatement } from "@babel/types";
import { Link } from 'react-router-dom';
import "./sparks.css";

function Nav() {
    
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
          <Link style={navStyle} to="/SparksOFtheMonth">
            <li className="spark-month">Spark of the Month</li>
          </Link>
          <Link style={navStyle} to="/SparksOFtheQuatar">
            <li className="spark-quater">Spark of the Quater</li>
          </Link>
          <Link style={navStyle} to="/SparksOFtheYear">
            <li className="spark-year">Spark of the Year</li>
          </Link>
        </ul>
      </nav>
        
    )
}

export default Nav;
