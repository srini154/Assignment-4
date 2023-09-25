import React from "react";
import { imagesMenu } from "../../../../constants";
import { useParams } from "react-router";
import "./Photos.css";
function Photos() {
  let { hotles } = useParams();
  const filteredRestaurant = imagesMenu.filter(
    (restaurant) => restaurant.name === hotles
  );

  if (filteredRestaurant.length === 0) {
    return <p className="not-text">No data available for {hotles}</p>;
  }
  const images = filteredRestaurant[0].resImages;
  return (
    <>
      {images.length > 0 ? (
        <div className="image-grid">
          {images.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      ) : (
        <p>No Images Available</p>
      )}
    </>
  );
}

export default Photos;
