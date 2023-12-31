import React, { useState } from "react";
import "./Category.css";
import { categoryMEnuDetails } from "../../../../../constants";
import { useParams } from "react-router";
import Submenu from "../Submenu/Submenu";

function Category({ data }) {
  const { hotles: hotelname } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleCategoryClick = (categoryIndex) => {
    setSelectedCategory(categoryIndex);
  };

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
