import React, { useState } from "react";
import "./Category.css";
import { categoryMEnuDetails } from "../../../../../constants";
import { useParams } from "react-router";
import Submenu from "../Submenu/Submenu";

// function Category() {
//   const [activeButtonIndex, setActiveButtonIndex] = useState(null);
//   const { hotles: hotelname } = useParams();

//   const handleButtonClick = (index) => {
//     setActiveButtonIndex(index);
//   };

//   const hotelData = categoryMEnuDetails.filter(
//     (hotel) => hotel.name === hotelname
//   );

//   const buttonsData = hotelData.length > 0 ? hotelData[0].category1 : [];

//   return (
//     <div>
//       {buttonsData.map((text, index) => (
//         <Button
//           key={index}
//           text={text}
//           isActive={activeButtonIndex === index}
//           onClick={() => handleButtonClick(index)}
//         />
//       ))}
//     </div>
//   );
// }

// function Button({ text, isActive, onClick }) {
//   const buttonClass = `category-menu ${isActive ? "clicked" : ""}`;

//   return (
//     <div>
//       <button className={buttonClass} onClick={onClick}>
//         {text}
//       </button>
//     </div>
//   );
// }

function Category({ data }) {
  const { hotles: hotelname } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleCategoryClick = (categoryIndex) => {
    setSelectedCategory(categoryIndex);
  };
  // console.log(data);

  const hotelData = categoryMEnuDetails.find(
    (hotel) => hotel.name === hotelname
  );

  const buttonsData = data ? data.map((e) => e.category) : [];

  return (
    <div style={{ display: "flex" }}>
      <div>
        {buttonsData.map((text, index) => (
          <Button
            key={index}
            text={text}
            isActive={selectedCategory === index}
            onClick={() => handleCategoryClick(index)}
          />
        ))}
      </div>
      <div className="vl"></div>
      {selectedCategory !== null && (
        <Submenu
          menuData={data[selectedCategory].menu}
          categoryIndex={selectedCategory}
        />
      )}
    </div>
  );
}

function Button({ text, isActive, onClick }) {
  const buttonClass = `category-menu ${isActive ? "clicked" : ""}`;

  return (
    <div>
      <button className={buttonClass} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

export default Category;
