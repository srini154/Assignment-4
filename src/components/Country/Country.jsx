import React, { useEffect } from "react";
import "./Country.css";
import DropdownButton from "../Dropdown/Dropdown";
import { useParams } from "react-router-dom";
import india from "../../Images/indai.webp";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
function Country() {
  let { country } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <img
        src="https://b.zmtcdn.com/web/assets/goodbye/b749f75353fb9c69351fdc69684f15c11675246123.png?output-format=webp"
        alt=""
        className="country-back"
      />
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt=""
        className="logo-country"
      />
      <p className="para-country">Goodbye {country}!</p>
      <p className="para-country-1">
        It has been a great run but we have, sadly, stopped our operations here!
        You can still explore dine-in restaurants and order amazing food on
        Zomato in <span style={{ fontWeight: "bold" }}>India!</span>
      </p>

      <div className="country-text-3">
        <p className="country-text-4">Where are we serving?</p>
        <p className=" country-text-5">
          From dining out at the cosiest hidden gems to food delivery from
          swanky restaurants to serving the most incredible food, Zomato covers
          it all. Explore top restaurants, menus, and millions of photos and
          reviews from users just like you!
        </p>
      </div>
      <Link to={"/"}>
        <div className="india-btn-cont">
          <img
            src="https://b.zmtcdn.com/web/assets/6c058ad778e88d175fedddf7b7bdd3741675255650.png"
            alt=""
            className="india-img"
          />
          <p className="india-text">India</p>
          <p className="india-text-1">Delivery | Dine In</p>
        </div>
      </Link>
      <Footer />
    </div>
  );
}

export default Country;
