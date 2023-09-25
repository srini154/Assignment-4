import React, { useState } from "react";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import "../Dinein/Dinein.css";
import HotelCard from "../Delivery/HotelCard";

import { Dineinres } from "../../constants";
import { Link } from "react-router-dom";
function Dinein() {
  const [filter, setFilter] = useState("");
  const [hotelsList, setHotelsList] = useState(Dineinres);
  let { city } = useParams();
  const UpdateHotelFilter = (selectedFilter) => {
    if (filter === selectedFilter.key) {
      setFilter("");
      setHotelsList(Dineinres);
    } else {
      setFilter(selectedFilter.key);

      let FilteredHotels;
      if (selectedFilter.key === "rating") {
        FilteredHotels =
          selectedFilter && selectedFilter.value !== ""
            ? Dineinres.filter(
                (e) => e[selectedFilter.key] >= selectedFilter.value
              )
            : Dineinres;
      } else {
        FilteredHotels =
          selectedFilter && selectedFilter.value !== ""
            ? Dineinres.filter(
                (e) => e[selectedFilter.key] === selectedFilter.value
              )
            : Dineinres;
      }

      setHotelsList(FilteredHotels);
    }
  };
  return (
    <div>
      <img
        className="dinein-img"
        src="https://b.zmtcdn.com/data/o2_assets/da94405b04f6ae6bf64a4e2a01b1b5c11686563732.png"
        alt=""
      />
      <div className="contres-5">
        <div className="res-cust">
          <button className="btn-res-cust">Filters</button>
        </div>
        <div className="res-cust">
          <button
            className={`btn-res-cust ${filter === "category" ? "active" : ""}`}
            onClick={() =>
              UpdateHotelFilter({ key: "category", value: "Outdoor" })
            }
          >
            Outdoor Seating
          </button>
        </div>
        <div className="res-cust">
          <button
            className={`btn-res-cust ${filter === "rating" ? "active" : ""}`}
            onClick={() => UpdateHotelFilter({ key: "rating", value: "4.0" })}
          >
            Rating: 4.0+
          </button>
        </div>
        <div className="res-cust">
          {" "}
          <button
            className={`btn-res-cust ${filter === "Drink" ? "active" : ""}`}
            onClick={() =>
              UpdateHotelFilter({ key: "Drink", value: "Alcohol" })
            }
          >
            Serves Alcohol
          </button>
        </div>
      </div>

      <div className="res-name-cont-1">
        Trending dining restaurants in {city}
      </div>
      <div className="row" style={{ padding: "0 150px", marginLeft: "2.5rem" }}>
        {/* {hotelsList.map((e, index) => (
          // <div key={index} className="col-sm-4">
          //   <HotelCard data={e} />
          // </div>
          <Link
            key={index}
            to={`/restaurants/${city}/${e.name}`}
            className="col-sm-4 hotelcard-link"
          >
            <HotelCard data={e} />
          </Link>
        ))} */}
        {hotelsList.length > 0 ? (
          hotelsList.map((e, index) => (
            <Link
              key={index}
              to={`/restaurants/${city}/${e.name}`}
              className="col-sm-4 hotelcard-link"
            >
              <HotelCard data={e} />
            </Link>
          ))
        ) : (
          <p>No hotels match the selected filters.</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Dinein;
