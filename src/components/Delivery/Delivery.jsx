import React, { useEffect, useState } from "react";
import "./Delivery.css";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import HotelCard from "./HotelCard";
import { Hotels } from "../../constants";
import Menu from "./Menu/Menu";
import { Link } from "react-router-dom";
function Delivery() {
  const [filter, setFilter] = useState("");
  const [hotelsList, setHotelsList] = useState(Hotels);
  let { city } = useParams();
  const UpdateHotelFilter = (selectedFilter) => {
    if (filter === selectedFilter.key) {
      setFilter("");
      setHotelsList(Hotels);
    } else {
      setFilter(selectedFilter.key);

      let FilteredHotels;
      if (selectedFilter.key === "rating") {
        FilteredHotels =
          selectedFilter && selectedFilter.value !== ""
            ? Hotels.filter(
                (e) => e[selectedFilter.key] >= selectedFilter.value
              )
            : Hotels;
      } else {
        FilteredHotels =
          selectedFilter && selectedFilter.value !== ""
            ? Hotels.filter(
                (e) => e[selectedFilter.key] === selectedFilter.value
              )
            : Hotels;
      }

      setHotelsList(FilteredHotels);
    }
  };
  return (
    <div>
      <div className="contres-5">
        <div className="res-cust">
          <button className="btn-res-cust">Filters</button>
        </div>
        <div className="res-cust">
          <button
            className={`btn-res-cust ${filter === "category" ? "active" : ""}`}
            onClick={() =>
              UpdateHotelFilter({ key: "category", value: "pureveg" })
            }
          >
            PureVeg
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
            className={`btn-res-cust ${filter === "cusine" ? "active" : ""}`}
            onClick={() => UpdateHotelFilter({ key: "cusine", value: "pizza" })}
          >
            Cusines
          </button>
        </div>
      </div>
      {!filter && (
        <div className="foods-color">
          <div className="foods">
            <h1>Inspiration for your first order</h1>
            <div className="foods-logo">
              <div className="logo-del">
                <img
                  src="https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
                  alt=""
                  onClick={() =>
                    UpdateHotelFilter({
                      key: "cusine",
                      value: "north",
                    })
                  }
                />
                <div className="logo-del-text">Biryani</div>
              </div>
              <div className="logo-del">
                <img
                  src="https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png"
                  alt=""
                  onClick={() =>
                    UpdateHotelFilter({
                      key: "cusine",
                      value: "south",
                    })
                  }
                />
                <div className="logo-del-text">Dosas</div>
              </div>
              <div className="logo-del">
                <img
                  src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
                  alt=""
                  onClick={() =>
                    UpdateHotelFilter({
                      key: "cusine",
                      value: "pizza",
                    })
                  }
                />
                <div className="logo-del-text">Pizza</div>
              </div>
              <div className="logo-del">
                <img
                  src="https://b.zmtcdn.com/data/dish_images/d9766dd91cd75416f4f65cf286ca84331634805483.png"
                  alt=""
                  onClick={() =>
                    UpdateHotelFilter({
                      key: "cusine",
                      value: "south",
                    })
                  }
                />
                <div className="logo-del-text">Idli</div>
              </div>
              <div className="logo-del">
                <img
                  src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
                  alt=""
                  onClick={() =>
                    UpdateHotelFilter({
                      key: "cusine",
                      value: "burger",
                    })
                  }
                />
                <div className="logo-del-text">Burger</div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="res-name-cont-1">Delivery Restaurants in {city}</div>
      <div className="row" style={{ padding: "0 150px", marginLeft: "2.5rem" }}>
        {hotelsList.map((e, index) => (
          <Link
            key={index}
            to={`/Assignment-4/restaurants/${city}/${e.name}`}
            className="col-sm-4 hotelcard-link"
          >
            <HotelCard data={e} />
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Delivery;
