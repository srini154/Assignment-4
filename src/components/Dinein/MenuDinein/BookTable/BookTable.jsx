import React, { useState } from "react";
import { selectDate } from "../../../../constants";
import { useParams } from "react-router";
import "./BookTable.css";
import { Dineinres } from "../../../../constants";
import { selectGuest } from "../../../../constants";
import { Link } from "react-router-dom";
import { dialcodes } from "../../../../constants";
import SuccessBook from "./SuccessBook";
function BookTable() {
  const [selectedDialCode, setSelectedDialCode] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedGuest, setSelectedGuest] = useState("");
  const [isBooked, setIsBooked] = useState(false);
  const DialCodeSelection = (dialCode) => {
    setSelectedDialCode(dialCode);
  };
  const handleDateSelection = (date) => {
    setSelectedDate(date);
  };

  const handleGuestSelection = (guest) => {
    setSelectedGuest(guest);
  };
  let { hotles } = useParams();
  let { city } = useParams();
  const handleBookClick = () => {
    setIsBooked(true);
  };
  const matchedRestaurant = Dineinres.find(
    (restaurant) => restaurant.name.toLowerCase() === hotles.toLowerCase()
  );

  return (
    <div>
      {matchedRestaurant && !isBooked ? (
        <div className="book-table-query">
          <p className="tex-book-table">Please select your booking details</p>
          <div className="flex-query">
            <div className="dropdown">
              <a
                className="btn btn-secondary drp-btn-date dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {selectedDate || "Select Date"}
              </a>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                {selectDate.map((e, index) => (
                  <li
                    key={index}
                    className="dialcode-li"
                    onClick={() => handleDateSelection(e)}
                    style={{ cursor: "pointer" }}
                  >
                    {e}
                  </li>
                ))}
              </ul>
            </div>
            <div className="dropdown">
              <a
                className="btn btn-secondary drp-btn-date dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {selectedGuest || "Select Guests"}
              </a>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                {selectGuest.map((e, index) => (
                  <li
                    key={index}
                    className="dialcode-li"
                    onClick={() => handleGuestSelection(e)}
                    style={{ cursor: "pointer" }}
                  >
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="tex-book-table">Enter guest details</p>
          <div className="name-lastname-book">
            <div>
              <input
                type="text"
                className="name-text-book"
                placeholder=" First Name"
              />
            </div>
            <div>
              <input
                type="text"
                className="name-text-book"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="name-lastname-book">
            <div>
              <input
                type="text"
                className="name-text-book-1"
                placeholder=" First Name"
              />
            </div>
            {/* Dropdown for phone num */}
            <div className="main-1-1">
              <div className="input-group mb-book">
                <button
                  className="btn btn-outline-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {selectedDialCode || "+91"}
                </button>
                <ul className="dropdown-menu cityname-ul-login">
                  {dialcodes.map((e, index) => (
                    <li key={index} className="cityname-li-login">
                      <Link
                        className="cityname-li-text-login"
                        onClick={() => DialCodeSelection(e.dial_code)}
                      >
                        {e.dial_code}
                      </Link>
                    </li>
                  ))}
                </ul>
                <input
                  type="text"
                  className="form-control input-otp-1 "
                  aria-label="Text input with dropdown button"
                  placeholder="Phone"
                />
              </div>
            </div>
          </div>
          <p className="tex-book-table"> Additional requests</p>
          <textarea
            rows="5"
            maxLength="5"
            cols="89"
            name="comment"
            form="usrform"
            className="textarea-book"
            style={{ resize: "none" }}
          ></textarea>{" "}
          <button className="book-table-btn" onClick={handleBookClick}>
            Book
          </button>
        </div>
      ) : isBooked ? (
        <SuccessBook
          selectedDate={selectedDate}
          selectedGuest={selectedGuest}
        />
      ) : (
        <p className="not-text">
          No dine-in available for {hotles} Hotel in {city}
        </p>
      )}
    </div>
  );
}

export default BookTable;
