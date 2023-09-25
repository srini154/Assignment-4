import React from "react";
import { Link } from "react-router-dom";
import main1 from "../../Images/main1.avif";
import DropdownButton from "../Dropdown/Dropdown";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { useState } from "react";
import { Dineinres } from "../../constants";
function Header() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const openLoginModal = () => {
    setTimeout(() => {
      setLoginModalOpen(true);
    }, 500);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const openSignupModal = () => {
    setTimeout(() => {
      setSignupModalOpen(true);
    }, 500);
  };

  const closeSignupModal = () => {
    setSignupModalOpen(false);
  };
  const openRegisterformLogin = () => {
    closeLoginModal();

    openSignupModal();
  };
  const openLoginForm = () => {
    closeSignupModal();
    openLoginModal();
  };
  const filteredHotels = Dineinres.filter((hotel) =>
    hotel.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="contres-1">
      <Link to={"/"}>
        <img src={main1} className="main-img" alt="" />
      </Link>
      <div className="search-navbar-1">
        <DropdownButton />
        <input
          className="in-search-1"
          type="text"
          placeholder="Search for restaurants"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          disabled
        ></input>
      </div>

      <button className="login-button1" onClick={openLoginModal}>
        Log in
      </button>
      <button className="signup-button1" onClick={openSignupModal}>
        Sign Up
      </button>
      {loginModalOpen && (
        <div className="modal-login">
          <div className="modal-content-login ">
            <span className="close" onClick={closeLoginModal}>
              &times;
            </span>
            <Login openRegister={openRegisterformLogin} />
          </div>
        </div>
      )}

      {signupModalOpen && (
        <div className="modal-login">
          <div className="modal-content-login">
            <span className="close" onClick={closeSignupModal}>
              &times;
            </span>
            <Register openLogin={openLoginForm} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
