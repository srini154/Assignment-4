import React from "react";
import { Hotels } from "../../../../constants";
import { useParams } from "react-router";
function Menu1() {
  const { hotles } = useParams();
  const filteredRestaurant = Hotels.find(
    (restaurant) => restaurant.name === hotles
  );

  if (!filteredRestaurant) {
    return <p>Restaurant not found</p>;
  }
  if (
    !filteredRestaurant.menuImages ||
    filteredRestaurant.menuImages.length === 0
  ) {
    return <p className="not-text">No menu images available for {hotles}</p>;
  }

  const images = filteredRestaurant.menuImages;

  return (
    <div>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu1;
