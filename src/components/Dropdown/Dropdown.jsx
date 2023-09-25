import React from "react";

import "./Dropdown.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { cityName } from "../../constants";
function DropdownButton() {
  let { city } = useParams();

  return (
    <div className="dropdown">
      <button
        className="btn  menu-search-dropdown dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        id="dropdownMenu"
      >
        <span className="city-arrow">
          <img
            src="data:image/png;base64,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"
            alt=""
            className="maplogo"
          />{" "}
          {city}
        </span>
      </button>
      <ul
        className="dropdown-menu  cityname-ul dropdown-menu-dark"
        style={{}}
        aria-labelledby="dropdownMenu"
      >
        {cityName.map((e, index) => (
          <li key={index} className=" cityname-li">
            <Link className="cityname-li-text" to={`/restaurants/${e}`}>
              {e}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropdownButton;
