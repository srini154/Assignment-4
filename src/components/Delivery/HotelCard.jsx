import React from "react";

function HotelCard({ data }) {
  return (
    <div className="res-pic">
      <img src={data.img} alt="" />
      <div className="name-rating">
        <p>{data.name}</p>
        <p className="pic-res-1">{data.rating} ★</p>
      </div>
      <div className="dish-1">
        {data.dish} <span className="rate-1">{data.cost}</span>
      </div>
      <span className="time-1">{data.time}</span>
    </div>
  );
}

export default HotelCard;

{
  /* <div className="res-pic">
        <img
          src="https://b.zmtcdn.com/data/dish_photos/114/db3790efc86280d73ddd153dbce50114.jpg"
          alt=""
        />
        <div className="name-rating">
          <p>Santosh Dhaba</p>
          <p className="pic-res-1">4.2 ★</p>
        </div>
        <div className="dish-1">
          North Indian, Chinese <span className="rate-1">₹250 for one</span>
        </div>
        <span className="time-1">30 min</span>
      </div>
      <div className="res-pic">
        <img
          src="https://b.zmtcdn.com/data/dish_photos/a33/7f9bddabe960dc2ee0cc3d90f14dca33.jpg?output-format=webp"
          alt=""
        />
        <div className="name-rating">
          <p>La Pino'z Pizza</p>
          <p className="pic-res-1">3.7 ★</p>
        </div>
        <div className="dish-1">
          Pizza, Italian <span className="rate-1">₹250 for one</span>
        </div>
        <span className="time-1">30 min</span>
      </div>
      <div className="res-pic">
        <img
          src="https://b.zmtcdn.com/data/dish_photos/e80/6f3b73aa0bd0e7172768d1e22ea31e80.jpg"
          alt=""
        />
        <div className="name-rating">
          <p>Burger King</p>
          <p className="pic-res-1">4.0 ★</p>
        </div>
        <div className="dish-1">
          Burger, Fast Food <span className="rate-1">₹250 for one</span>
        </div>
        <span className="time-1">30 min</span>
      </div>
      <div className="res-pic">
        <img
          src="https://b.zmtcdn.com/data/dish_photos/09f/efe5ecf7f898740e35c775cb42c6209f.jpg"
          alt=""
        />
        <div className="name-rating">
          <p>Taj Mahal - Taj Mahal Hotel</p>
          <p className="pic-res-1">4.3 ★</p>
        </div>
        <div className="dish-1">
          <span className="span-1"> South Indian</span>

          <span className="rate-1">₹100 for one</span>
        </div>
        <span className="time-1">30 min</span>
      </div>
      <div className="res-pic">
        <img
          src="https://b.zmtcdn.com/data/dish_photos/d77/23cdebb3fe7706ece1c877bcc3de0d77.png?output-format=webp"
          alt=""
        />
        <div className="name-rating">
          <p> Raghavendra Udupi Veg</p>
          <p className="pic-res-1">4.2 ★</p>
        </div>
        <div className="dish-1">
          South Indian, North Indian{" "}
          <span className="rate-1">₹250 for one</span>
        </div>
        <span className="time-1">30 min</span>
      </div>
      <div className="res-pic">
        <img
          src="https://b.zmtcdn.com/data/pictures/chains/7/91917/31c5379f9533cb894c0c790db5c636dc_o2_featured_v2.jpg?output-format=webp"
          alt=""
        />
        <div className="name-rating">
          <p>Swiss Castle</p>
          <p className="pic-res-1">4.2 ★</p>
        </div>
        <div className="dish-1">
          Bakery, Street Food<span className="rate-1">₹250 for one</span>
        </div>
        <span className="time-1">30 min</span>
      </div> */
}
