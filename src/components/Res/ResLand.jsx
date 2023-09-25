import React, { useState, useEffect } from "react";
import "./Res.css";
import main1 from "../../Images/main1.avif";
import Delivery from "../Delivery/Delivery";
import Dinein from "../Dinein/Dinein";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Nightlife from "../NightLife/Nightlife";
import Landing from "../Landing/Landing";
import { Link } from "react-router-dom";

import DropdownButton from "../Dropdown/Dropdown";
import Breadcrumps from "../../Breadcrumps/Breadcrumps";
import Header from "../Header/Header";
function Res() {
  const [deliveryClicked, setDeliveryClicked] = useState(true);
  const [dineInClicked, setDineInClicked] = useState(false);
  const [nightClicked, setNightClicked] = useState(false);
  const [currentPage, setCurrentPage] = useState("delivery");
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      {/* <Breadcrumps /> */}
      <div id="hr-line">
        <div className="contres-2">
          <div
            className={` contres-3 ${
              currentPage === "delivery" ? "selected2" : ""
            }`}
          >
            <button
              className={`btn-del-logo ${
                currentPage === "delivery" ? "selected" : ""
              }`}
              onClick={() => setCurrentPage("delivery")}
            >
              <img
                className="del-img"
                src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png"
                alt=""
              />
            </button>
            <button
              className={`btn-1-delivery ${
                currentPage === "delivery" ? "selected1" : ""
              }`}
              onClick={() => setCurrentPage("delivery")}
            >
              Delivery
            </button>
          </div>
          <div>
            <div
              className={` contres-3 ${
                currentPage === "dinein" ? "selected2" : ""
              }`}
            >
              <button
                className={`btn-del-logo ${
                  currentPage === "dinein" ? "selected" : ""
                }`}
                onClick={() => setCurrentPage("dinein")}
              >
                <img
                  className="del-img"
                  src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png"
                  alt=""
                />
              </button>
              <button
                className={`btn-1-delivery ${
                  currentPage === "dinein" ? "selected1" : ""
                }`}
                onClick={() => setCurrentPage("dinein")}
              >
                Dine-In
              </button>
            </div>
          </div>
          <div
            className={` contres-3 ${
              currentPage === "Nightlife" ? "selected2" : ""
            }`}
          >
            <button
              className={`btn-del-logo ${
                currentPage === "Nightlife" ? "selected" : ""
              }`}
              onClick={() => setCurrentPage("Nightlife")}
            >
              <img
                className="del-img"
                src="https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png"
                alt=""
              />
            </button>
            <button
              className={`btn-1-delivery ${
                currentPage === "Nightlife" ? "selected1" : ""
              }`}
              onClick={() => setCurrentPage("Nightlife")}
            >
              Nightlife
            </button>
          </div>
        </div>
      </div>
      {currentPage === "delivery" && <Delivery />}
      {currentPage === "dinein" && <Dinein />}
      {currentPage === "Nightlife" && <Nightlife />}
    </div>
  );
}

export default Res;
