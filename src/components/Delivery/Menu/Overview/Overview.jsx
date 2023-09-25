import React, { useState, useEffect } from "react";
import "./Overview.css";
import { Hotels } from "../../../../constants";
function Overview({ data }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="About-menu">About This place</div>
      <div className="menu-all-visible">
        <div>
          <div>
            <p
              style={{
                fontSize: "20px",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              Menu
            </p>
            <p>See all Menu</p>
          </div>

          <img className="menu-img-1" src={data.menuImg} alt="" />

          <div className="cusine-text">Cusines</div>
          <button className="cusines-btn">North Indian</button>
          <button className="cusines-btn">Chinese</button>
          <button className="cusines-btn">Italian</button>
          <button className="cusines-btn">Biryani</button>
        </div>
        <div className="box-cont-menu">
          <p className="call-box">Call</p>
          <p style={{ color: " rgb(227, 190, 120)" }}>+919121011177</p>
          <p className="call-box">Direction</p>
          <img
            src="https://maps.zomato.com/php/staticmap?center=17.4615321069,78.3667478710&maptype=zomato&markers=17.4615321069,78.3667478710,pin_res32&sensor=false&scale=2&zoom=16&language=en&size=240x150&size=400x240&size=650x250"
            alt=""
            className="map-img"
          />
          <p>{data.address}</p>
        </div>
      </div>
      <div className="text-menu-1">People Say This Place Is Known For</div>
      <p className="text-menu-2">
        Good Quality Food, Quick Service, Reasonable Price, Nice Food, Main
        Course, Tasty Food
      </p>
      <p className="text-menu-1">Average Cost</p>
      <p className="text-menu-2">{data.cost}</p>
    </div>
  );
}

export default Overview;
