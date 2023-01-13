import React from "react";
import logo1 from "../assets/logo1.png";

export default function HomePage() {
  return (
    <div className="centeredPage">
      <h1>Job Tracker</h1>
      
      <img src={logo1} alt="logo"></img>
      <h3>Log in</h3>
    </div>
  );
}
