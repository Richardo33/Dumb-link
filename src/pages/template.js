import React from "react";
import "../style/template.css";
import Sidebar from "../component/sidebar";
import Phone1 from "../Assets/Phone(1).png";
import Phone3 from "../Assets/Phone(3).png";
import Phone4 from "../Assets/Phone(4).png";
import Phone2 from "../Assets/Phone (2).png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="template">
      <div className="left">
        <Sidebar />
      </div>
      <div className="right">
        <h3>Template</h3>
        <div className="main container-fluid">
          <img
            onClick={() => navigate("/createlink")}
            className="mt-5"
            src={Phone1}
            alt=""
          />
          <img className="mt-5" src={Phone2} alt="" />
          <img className="mt-5" src={Phone3} alt="" />
          <img className="mt-5" src={Phone4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
