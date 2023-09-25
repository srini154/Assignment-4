import React, { useState } from "react";
import "./Submenu.css";

import { useParams } from "react-router";
import ModalSubmenu from "./ModalSubmenu";

function Submenu({ menuData, categoryIndex }) {
  return (
    <div
      className="submenu-parent-div"
      style={{
        overflowY: "scroll",
        maxHeight: "300px",

        width: "650px",
      }}
    >
      {menuData ? (
        menuData.map((menuItem, index) => (
          <div key={index} className="menu-item-details">
            <img src={menuItem.dishImg} alt="" />
            <div className="menu-item-name">
              <p style={{ fontWeight: "bold" }}>{menuItem.dishName}</p>
              <p>{menuItem.dishRate}</p>
              <p>{menuItem.dishComment}</p>
            </div>
          </div>
        ))
      ) : (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          No menu items available for this category.
        </p>
      )}
    </div>
  );
}
export default Submenu;
