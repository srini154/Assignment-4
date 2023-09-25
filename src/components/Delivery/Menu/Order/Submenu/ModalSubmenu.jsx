import React from "react";
import "./ModalSubmenu.css";
function ModalSubmenu() {
  return (
    <div className="modal-submenu-1">
      <div className="submenu-modal-cont-1">
        <div>
          <p style={{ textAlign: "start" }}>
            Online ordering is only supported on the mobile app
          </p>
          <button className="btn-download-app">Download The App</button>
        </div>

        <img
          src="https://b.zmtcdn.com/web/assets2ddb28beed453a23b571279486a51c5d1638438756.png"
          alt=""
          className="modalsubmenu-phone-img"
        />
      </div>
    </div>
  );
}

export default ModalSubmenu;
