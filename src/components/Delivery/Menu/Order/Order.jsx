import React, { useState, useEffect } from "react";
import Category from "./Category/Category";
import { categoryMEnuDetails } from "../../../../constants";
import Submenu from "./Submenu/Submenu";
import "./Order.css";
import { useParams } from "react-router";
function Order({ data }) {
  const { hotles: hotelname } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="order-main">
      <div className="category-main-order">
        {data.length > 0 ? (
          <Category data={data} />
        ) : (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            No Menu Available
          </p>
        )}
      </div>
    </div>
  );
}

export default Order;
