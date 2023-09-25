import React, { useState } from "react";
import "./Submenu.css";
// import { menuDetailsItems } from "../../../../../constants";
import { useParams } from "react-router";
import ModalSubmenu from "./ModalSubmenu";

// function Submenu() {
//   let { hotles: hotelName } = useParams();
//   let { city } = useParams();
//   const selectedHotelMenu = menuDetailsItems.find(
//     (menuItem) => menuItem.name === hotelName
//   );

//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredMenuItems = selectedHotelMenu
//     ? selectedHotelMenu.categorymenuItems.map((categoryItem) => ({
//         ...categoryItem,
//         menu: categoryItem.menu.filter((menuItem) =>
//           menuItem.dishName.toLowerCase().includes(searchTerm.toLowerCase())
//         ),
//       }))
//     : [];

//   return (
//     <div
//       className="submenu-parent-div"
//       style={{ overflowY: "scroll", maxHeight: "300px" }}
//     >
//       {selectedHotelMenu ? (
//         <>
//           <div className="submenu-main">
//             <div className="order-online-text">Order Online</div>
//             <div>
//               <input
//                 type="text"
//                 placeholder="Search for a dish"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="search-text-submenu"
//               />
//             </div>
//           </div>
//           {filteredMenuItems.length > 0 ? (
//             filteredMenuItems.map((categoryItem) => (
//               <div key={categoryItem.category}>
//                 <p
//                   style={{
//                     marginLeft: "30px",
//                     fontSize: "18px",
//                     color: "grey",
//                   }}
//                 >
//                   {categoryItem.category}
//                 </p>
//                 {categoryItem.menu.map((menuItem, index) => (
//                   <div key={index} className="menu-item-details">
//                     <img
//                       src={menuItem.dishImg}
//                       alt=""
//                       style={{ borderRadius: "10px" }}
//                     />
//                     <div className="menu-item-name">
//                       <p style={{ fontWeight: "bold" }}>{menuItem.dishName}</p>
//                       <p>{menuItem.dishRate}</p>
//                       <p>{menuItem.dishComment}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ))
//           ) : (
//             <p>No matching dishes found.</p>
//           )}
//         </>
//       ) : (
//         <p>Menu not available for {hotelName}</p>
//       )}
//     </div>
//   );
// }
function Submenu({ menuData, categoryIndex }) {
  // const selectedHotelMenu = menuDetailsItems.find(
  //   (menuItem) => menuItem.name === hotelname
  // );

  // const selectedCategory = selectedHotelMenu
  //   ? selectedHotelMenu.categorymenuItems[categoryIndex]
  //   : null;

  return (
    <div
      className="submenu-parent-div"
      style={{
        overflowY: "scroll",
        maxHeight: "300px",
        // minWidth: "100%",
        // maxWidth: "100%",
        width: "650px",
      }}
    >
      {menuData ? (
        menuData.map((menuItem, index) => (
          <div key={index} className="menu-item-details">
            <img src={menuItem.dishImg} alt="" />
            <div className="menu-item-name">
              <p style={{ fontWeight: "bold" }}>{menuItem.dishName}</p>
              <p>{menuItem.dishRate}</p>
              <p>{menuItem.dishComment}</p>
            </div>
          </div>
        ))
      ) : (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          No menu items available for this category.
        </p>
      )}
    </div>
  );
}
export default Submenu;
