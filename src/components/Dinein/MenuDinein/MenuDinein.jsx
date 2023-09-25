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
import { Dineinres } from "../../../constants";
import BookTable from "./BookTable/BookTable";

function Menu() {
  const [currentPage, setCurrentPage] = useState("overview");
  const [menuDetails, setMenuDetails] = useState(null);
  const [loader, setLoader] = useState(true);
  const { hotles: hotelname } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
    // setLoader(true);
    // console.log("srinivas", hotelname);
    let hoteldetails = Dineinres.filter((e) => e.name == hotelname);
    // console.log(hoteldetails);
    setMenuDetails(hoteldetails[0]); // seting the hotel details to setmenudetails

    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

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
                currentPage === "Menu" ? "selected1" : ""
              }`}
              onClick={() => setCurrentPage("Book")}
            >
              Book A Table
            </button>
            <hr></hr>
            {currentPage === "overview" && <Overview data={menuDetails} />}
            {currentPage === "Order" && <Order />}
            {currentPage === "Reviews" && <Reviews />}
            {currentPage === "Photos" && <Photos />}
            {currentPage === "Menu" && <Menu1 />}
            {currentPage === "Book" && <BookTable />}
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

export default Menu;
