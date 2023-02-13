import React from "react";
import logo1 from "../assets/logo1.png";

export default function HomePage() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center ">
      <h1>Job Tracker</h1>

      <div className="row">
        <img src={logo1} alt="logo"></img>
      </div>

      <h3>Log in</h3>
    </div>
  );
}
