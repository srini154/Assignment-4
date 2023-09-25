import React, { useState, useEffect } from "react";
import "./Menu.css";
import Header from "../../Header/Header";
import Overview from "./Overview/Overview";
import Order from "./Order/Order";
import Reviews from "./Reviews/Reviews";
import Photos from "./Photos/Photos";
import Menu1 from "./Menu1/Menu1";
import Footer from "../../Footer/Footer";
import { useParams } from "react-router";
import { Hotels } from "../../../constants";
import BookTable from "../../Dinein/MenuDinein/BookTable/BookTable";
import SuccessBook from "../../Dinein/MenuDinein/BookTable/SuccessBook";
import ModalSubmenu from "./Order/Submenu/ModalSubmenu";
function Menu() {
  let { hotles, city } = useParams();

  const [currentPage, setCurrentPage] = useState("overview");
  const [menuDetails, setMenuDetails] = useState(null);
  const [loader, setLoader] = useState(true);
  const { hotles: hotelname } = useParams();
  const [isBookingSuccessful, setIsBookingSuccessful] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    let hoteldetails = Hotels.filter((e) => e.name == hotelname);
    // console.log(hoteldetails[0]);
    setMenuDetails(hoteldetails[0]);

    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);
  const handleBookingSuccess = () => {
    setIsBookingSuccessful(true);
  };
  const handleBookingCancel = () => {
    setIsBookingSuccessful(false);
  };

  return (
    <div>
      <Header />
      <hr />
      {loader ? (
        <div className="text-center">
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div className="container-menu">
            <div className="menu-main">
              {menuDetails.hotelImg.map((e, index) => (
                <div key={index} className={`menu-pics-${index + 1}`}>
                  <img src={e} alt="" />
                </div>
              ))}
              {/* 
          <div className="menu-pics-2">
            <img src="" alt="" />

            <img src="" alt="" />
          </div> */}
            </div>
          </div>
          <div className="menu-list-details">
            <div className="name-rating-1">
              <div className="name-res">{menuDetails.name}</div>
              <div className="pic-res-1">{menuDetails.rating} ★</div>
            </div>
            <div>{menuDetails.dish}</div>
            <div>
              <span className="open-now">Open now</span> - 11:30am – 1am (Today)
            </div>
            <div>
              <button className="btn-res-1">
                <a href="https://www.google.com/maps/dir/17.4851982,78.5676488/17.4615321,78.3667479/@17.4682347,78.301359,11z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0?entry=ttu">
                  direction
                </a>
              </button>
              <button className="btn-res-1">bookmark</button>
              <button className="btn-res-1">share</button>
            </div>
            <button
              className={`btn-1-delivery ${
                currentPage === "overview" ? "selected1" : ""
              }`}
              onClick={() => setCurrentPage("overview")}
            >
              Overview
            </button>
            <button
              className={`btn-1-delivery ${
                currentPage === "Order" ? "selected1" : ""
              }`}
              onClick={() => setCurrentPage("Order")}
            >
              Order Online
            </button>
            <button
              className={`btn-1-delivery ${
                currentPage === "Reviews" ? "selected1" : ""
              }`}
              onClick={() => setCurrentPage("Reviews")}
            >
              Reviews
            </button>
            <button
              className={`btn-1-delivery ${
                currentPage === "Photos" ? "selected1" : ""
              }`}
              onClick={() => setCurrentPage("Photos")}
            >
              Photos
            </button>
            <button
              className={`btn-1-delivery ${
                currentPage === "Menu" ? "selected1" : ""
              }`}
              onClick={() => setCurrentPage("Menu")}
            >
              Menu
            </button>
            <button
              className={`btn-1-delivery ${
                currentPage === "Book" ? "selected1" : ""
              }`}
              onClick={() => setCurrentPage("Book")}
            >
              Book A Table
            </button>
            <hr></hr>
            {currentPage === "overview" && <Overview data={menuDetails} />}
            {currentPage === "Order" && (
              <Order
                data={
                  menuDetails.categorymenuItems
                    ? menuDetails.categorymenuItems
                    : []
                }
              />
            )}
            {currentPage === "Reviews" && <Reviews />}
            {currentPage === "Photos" && <Photos />}
            {currentPage === "Menu" && <Menu1 />}
            {currentPage === "Book" && !isBookingSuccessful && (
              <BookTable
                onSuccess={handleBookingSuccess}
                onCancel={handleBookingCancel}
              />
            )}
            <div className="submenu-container">
              {currentPage === "Order" && <ModalSubmenu />}
            </div>
            {isBookingSuccessful && <SuccessBook />}
          </div>
        </>
      )}
      <div style={{ width: "60rem", marginLeft: "16rem" }}>
        <hr />
        <p style={{ fontWeight: "bold" }}>RELATED TO {hotles} Hotel</p>
        <p style={{ textAlign: "inherit", fontFamily: "poppins" }}>
          Restaurants in {city},{city} Restaurants, Ameerpet restaurants, Best
          Ameerpet restaurants,{city} City restaurants, Quick Bites in{city},
          Quick Bites near me, Quick Bites in
          {city} City, Quick Bites in Ameerpet, in{city}, near me, in
          {city} City, in Ameerpet, Order food online in Ameerpet, Order food
          online in{city}, Order food online in{city} City, New Year Parties in
          {city}, Christmas' Special in{city}
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Menu;
