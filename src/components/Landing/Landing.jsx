import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import main from "../../Images/Nav.jpg";
import logo from "../../Images/main.avif";
import india from "../../Images/indai.webp";
import ae from "../../Images/ae.webp";
import au from "../../Images/au.png";
import br from "../../Images/br.webp";
import ca from "../../Images/ca.webp";
import cl from "../../Images/cl.webp";
import cz from "../../Images/cz.webp";
import gb from "../../Images/gb.png";
import id from "../../Images/id.webp";
import ie from "../../Images/ie.png";
import it from "../../Images/it.webp";
import lb from "../../Images/lb.webp";
import lk from "../../Images/lk.webp";
import nz from "../../Images/nz.png";
import ph from "../../Images/ph.webp";
import pl from "../../Images/pl (1).webp";
import pt from "../../Images/pt.png";
import qa from "../../Images/qa.webp";
import sg from "../../Images/sg.webp";
import sk from "../../Images/sk.webp";
import tr from "../../Images/tr.webp";
import us from "../../Images/us.png";
import za from "../../Images/za.webp";
import uk from "../../Images/uk.png";
import uae from "../../Images/uae.webp";
import sl from "../../Images/sl.webp";
import "./Landing.css";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Res from "../Res/ResLand";
import City from "../City/City";
import { cityName } from "../../constants";
function Landing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showResComponent, setShowResComponent] = useState(false);

  const showRes = () => {
    setShowResComponent(true);
  };

  return (
    <div>
      <div className="container-1">
        <img className="img-main" src={main} alt="" />
        <div className="navbar-search"></div>

        <img className="img-2" src={logo} alt="" />

        <div className="img-text">
          Find the best restaurants, cafés{" "}
          <div style={{ marginLeft: "6rem" }}>and bars in India</div>
        </div>
      </div>
      <div className="cont-2">
        <p className="text-2">
          Popular locations in &nbsp;
          <img src={india} alt="" />
          &nbsp; India
        </p>
        <div className="cont-1">
          <p className="text-3">
            From swanky upscale restaurants to the cosiest hidden gems serving
            the most incredible food, Zomato covers it all. Explore menus, and
            millions of restaurant photos and reviews from users just like you,
            to find your next great meal.
          </p>
        </div>
        <div className="cont-3">
          <div className="container text-center">
            <div className="row">
              <div className="col">
                {cityName.map((e, index) => (
                  <Link key={index} to={`/Assignment-4/restaurants/${e}`}>
                    <City cityName={e} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="text-4">
            <h1>All Countries</h1>
          </div>
          <div className="button-container">
            <button className="centered-button">
              <div className="text-5">
                &nbsp;&nbsp;
                <img className="country-imgs" src={india} alt="" />
                &nbsp;&nbsp; India
              </div>
            </button>
            <Link to={"/Assignment-4/Australia"}>
              <button className="centered-button">
                <div className="text-5">
                  &nbsp;&nbsp;
                  <img className="country-imgs" src={au} alt="" />
                  &nbsp;&nbsp; Australia
                </div>
              </button>
            </Link>
            <Link to={"/Assignment-4/Brazil"}>
              <button className="centered-button">
                <div className="text-5">
                  &nbsp;&nbsp;
                  <img className="country-imgs" src={br} alt="" />
                  &nbsp;&nbsp; Brazil
                </div>
              </button>
            </Link>
          </div>

          <div className="button-container">
            <Link to={"/Assignment-4/Canada"}>
              <button className="centered-button">
                <div className="text-5">
                  &nbsp;&nbsp;
                  <img className="country-imgs" src={ca} alt="" />
                  &nbsp;&nbsp; Canada
                </div>
              </button>
            </Link>
            <Link to={"/Assignment-4/Chile"}>
              <button className="centered-button">
                <div className="text-5">
                  &nbsp;&nbsp;
                  <img className="country-imgs" src={cl} alt="" />
                  &nbsp;&nbsp; Chile
                </div>
              </button>
            </Link>
            <Link to={"/Assignment-4/Czech Republic"}>
              <button className="centered-button">
                <div className="text-5">
                  &nbsp;&nbsp;
                  <img className="country-imgs" src={cz} alt="" />
                  &nbsp;&nbsp; Czech Republic
                </div>
              </button>
            </Link>
          </div>
          <div className="button-container">
            <Link to={"/Assignment-4/Indonesia"}>
              <button className="centered-button">
                <div className="text-5">
                  &nbsp;&nbsp;
                  <img className="country-imgs" src={id} alt="" />
                  &nbsp;&nbsp; Indonesia
                </div>
              </button>
            </Link>
            <Link to={"/Assignment-4/Ireland"}>
              <button className="centered-button">
                <div className="text-5">
                  &nbsp;&nbsp;
                  <img className="country-imgs" src={ie} alt="" />
                  &nbsp;&nbsp; Ireland
                </div>
              </button>
            </Link>
            <Link to={"/Assignment-4/Italy"}>
              <button className="centered-button">
                <div className="text-5">
                  &nbsp;&nbsp;
                  <img className="country-imgs" src={it} alt="" />
                  &nbsp;&nbsp; Italy
                </div>
              </button>
            </Link>
          </div>
          <div className="button-container">
            <Link to={"/Assignment-4/Lebanon"}>
              <button className="centered-button">
                <div className="text-5">
                  &nbsp;&nbsp;
                  <img className="country-imgs" src={lb} alt="" />
                  &nbsp;&nbsp; Lebanon
                </div>
              </button>
            </Link>
            <Link to={"/Assignment-4/Malaysia"}>
              <button className="centered-button">
                <div className="text-5">
                  &nbsp;&nbsp;
                  <img className="country-imgs" src={lk} alt="" />
                  &nbsp;&nbsp; Malaysia
                </div>
              </button>
            </Link>
            <Link to={"/Assignment-4/New Zealand"}>
              <button className="centered-button">
                <div className="text-5">
                  &nbsp;&nbsp;
                  <img className="country-imgs" src={nz} alt="" />
                  &nbsp;&nbsp; New Zealand
                </div>
              </button>
            </Link>
          </div>
          <div className="button-container">
            <Link to={"/Assignment-4/Philippines"}>
              <button className="centered-button">
                <div className="text-5">
                  &nbsp;&nbsp;
                  <img className="country-imgs" src={ph} alt="" />
                  &nbsp;&nbsp; Philippines
                </div>
              </button>
            </Link>
            <Link to={"/Assignment-4/Poland"}>
              <button className="centered-button">
                <div className="text-5">
                  &nbsp;&nbsp;
                  <img className="country-imgs" src={pl} alt="" />
                  &nbsp;&nbsp; Poland
                </div>
              </button>
            </Link>
            <Link to={"/Assignment-4/ Portugal"}>
              <button className="centered-button">
                <div className="text-5">
                  &nbsp;&nbsp;
                  <img className="country-imgs" src={pt} alt="" />
                  &nbsp;&nbsp; Portugal
                </div>
              </button>
            </Link>
          </div>
          <div className="button-container">
            <Link to={"/Assignment-4/Qatar"}>
              <button className="centered-button">
                <div className="text-5">
                  &nbsp;&nbsp;
                  <img className="country-imgs" src={qa} alt="" />
                  &nbsp;&nbsp; Qatar
                </div>
              </button>
            </Link>
            <Link to={"/Assignment-4/Singapore"}>
              <button className="centered-button">
                <div className="text-5">
                  &nbsp;&nbsp;
                  <img className="country-imgs" src={sg} alt="" />
                  &nbsp;&nbsp; Singapore
                </div>
              </button>
            </Link>
            <Link to={"/Assignment-4/Slovakia"}>
              <button className="centered-button">
                <div className="text-5">
                  &nbsp;&nbsp;
                  <img className="country-imgs" src={sk} alt="" />
                  &nbsp;&nbsp; Slovakia
                </div>
              </button>
            </Link>
          </div>
          <div className="button-container">
            <Link to={"/Assignment-4/South Africa"}>
              <button className="centered-button">
                <div className="text-5">
                  &nbsp;&nbsp;
                  <img className="country-imgs" src={za} alt="" />
                  &nbsp;&nbsp; South Africa
                </div>
              </button>
            </Link>
            <Link to={"/Assignment-4/ Sri Lanka"}>
              <button className="centered-button">
                <div className="text-5">
                  &nbsp;&nbsp;
                  <img className="country-imgs" src={sl} alt="" />
                  &nbsp;&nbsp; Sri Lanka
                </div>
              </button>
            </Link>
            <Link to={"/Assignment-4/Turkey"}>
              <button className="centered-button">
                <div className="text-5">
                  &nbsp;&nbsp;
                  <img className="country-imgs" src={tr} alt="" />
                  &nbsp;&nbsp; Turkey
                </div>
              </button>
            </Link>
          </div>
          <div className="button-container">
            <Link to={"/Assignment-4/UAE"}>
              <button className="centered-button">
                <div className="text-5">
                  &nbsp;&nbsp;
                  <img className="country-imgs" src={uae} alt="" />
                  &nbsp;&nbsp; UAE
                </div>
              </button>
            </Link>
            <Link to={"/Assignment-4/United Kingdom"}>
              <button className="centered-button">
                <div className="text-5">
                  &nbsp;&nbsp;
                  <img className="country-imgs" src={uk} alt="" />
                  &nbsp;&nbsp; United Kingdom
                </div>
              </button>
            </Link>
            <Link to={"/Assignment-4/United States"}>
              <button className="centered-button">
                <div className="text-5">
                  &nbsp;&nbsp;
                  <img className="country-imgs" src={us} alt="" />
                  &nbsp;&nbsp; United States
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* {showResComponent ? <Res /> : null} */}
      <Footer />
    </div>
  );
}

export default Landing;
