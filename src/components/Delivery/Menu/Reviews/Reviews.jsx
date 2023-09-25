import React, { useState } from "react";
import { useParams } from "react-router";
import "./Reviews.css";
import { review } from "../../../../constants";
import { Link } from "react-router-dom";
import { reviewsPage } from "../../../../constants";
import Login from "../../../Login/Login";

function Reviews() {
  const [showLogin, setShowLogin] = useState(false);
  let { hotles } = useParams();
  let { city } = useParams();
  const selectedHotelReviews = reviewsPage.filter(
    (hotel) => hotel.name === hotles
  )[0];

  if (!selectedHotelReviews) {
    return <div className="not-text">No reviews found for {hotles}.</div>;
  }
  const openLoginModal = () => {
    console.log("clicked");
    setShowLogin(true);
  };

  const closeLoginModal = () => {
    setShowLogin(false);
  };

  return (
    <div>
      <div>
        <p className="reviews-p-tag">{hotles} Reviews</p>
      </div>
      <div className="dropdown">
        <a
          className="btn btn-secondary review-btn dropdown-toggle"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {review[0]}
        </a>

        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          {review.map((e, index) => (
            <li key={index} className="cityname-li">
              {e}
            </li>
          ))}
        </ul>
      </div>
      {selectedHotelReviews.comments.map((comment, index) => (
        <div key={index} className="comment-container">
          <hr />
          <div className="id-review">
            <img
              src={
                comment.picture ||
                "https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
              }
              alt=""
              className="id-img"
            />
            <div className="id-1-review">{comment.custName}</div>
          </div>
          <div className="rating-review-num">{comment.rating} ★</div>
          <p style={{ color: "grey" }}> {comment.comment}</p>
          <p>0 Votes for helpful, 0 Comments</p>
          {/* Buttons */}
          <div>
            <button className="btn-review-feed" onClick={openLoginModal}>
              {" "}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0aWhG5FPPwU2oMjbuxiBLCckXl-CbzE4eEQ&usqp=CAU"
                alt=""
                className="img-help"
              />
              Helpful
            </button>
            <button className="btn-review-feed" onClick={openLoginModal}>
              {" "}
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8mJiYAAAAgICAODg6srKwZGRkTExMJCQkcHBygoKCCgoJOTk74+Pi/v7/o6Oh3d3dlZWVWVlb09PSysrLQ0NAWFhaMjIympqba2trFxcWenp58fHxQUFA1NTUvLy9ra2s8PDzg4OBHR0fs7OyQkJBwcHDU1NS4uLhdXV06OjrmGrisAAAD90lEQVR4nO3caXeiMBgFYHmDLC7FFXdtRa3O//+BI5u1xuqcgzexzn2+zhzCbUKCWajViIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiOg/MZm9L/3ADH/ZnX2ajdduKBEJXDNipUJf1KxtLmD9GC8ZjetmjEc9cZXj+DI2lK/fEm/cN1RYrj1YuY7jSGKk2CiWkYlyLjTkGDH01/iSIpEpvpQrJsExopIIXU7bkSG6jB9EaS0qhe5vusYed900jegd0IW0sAXctPPS7uYNWsZSDI+832yydrpCFjGVD+Tl73oP00pE9nRdaQCvft9b2p+GXWAJYrWRFs3UEVwBQ5EN7ur/Ik+IG6/qrhh8+70mfQ4dHzdgjWJgA/knKk3o4d4a595zJOzArt95/YThyye8UofDWQNlpr+fWUg4FB9HBk+QcJCNUCDB9gkS1g5+iBLrkxbsS6tiQjwmrIoJ8ZiwKibEY8KqmBCPCau6mrCN8xQJ2yvB8bXFQgsJ68hfwL42bWgh4VqAu0z0NRgbz2H0hjPRSmNfWhUT4jFhVUyIx4RVMSEeE1bFhHhMWNW1hIMmjr7FzELCqXg4+l5WCwn3onBk9gQJa82khZLstLko9jRVMSEeE1b1JAlDaEKz5500AT6hgXNHN/QF3ErnnqvtpTNqmCdswgrYxtCTAPeN4jRhrG3oe5i669jdrO9mCzbAhjQRx5vDrn5fI08o+nrGwwj28ndsipW8AFjG3Dv21dYGjI9sNER2NFkzddTSUsSF58Abaa3WO/4ZVWzjFOl6VQRUPWw5+cGjHfw07oVNU1Sx9I1+6djm702SzKbrKIouxo4IYT0cH8Qr1/b13e2PVjwNyg/S3RLJt38bofZklPV3HO2xbTTzcfpzXj4TG+S+jJxn5AzrIvgh4c67cW8PESxMBEwbY9lqviWcoKtQmfuYw6QloZ5woe7cYTWhtEy+Tn3usuf/POG0rELA6RnPF9kZP4J87MPD84SrvArVqvtw782xpU9VyFnCetH/2D4p/FjnCf08oGvvsxkIZwm3RULH5v083lfCftHNgD/LYdxXwk7xLpfc/P+/zynhuqxCux+VeLxTwl4+UlieiQMoE5aDPf4jTqaVCZd5FcbICRQ7ioTlee7XGuwzRcLiR5Orrbr/fnnCWT5P6yjbtwOQJTwN9nvbtwOQJZwXg73db2SBpAmjsgptfYoPKk14yH/th+BP4Vki6jB52cE+I6pbTM5YXXQDChxVzD7Z3sGAcpo+fMXBPnNK6Nm+E5RW2Ubt7tAA2ueVqP7YvhGcTjq/H7/oSJHbJ+I0X7QfJSIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiJL/gLoz2DDevkCTAAAAABJRU5ErkJggg=="
                alt=""
                className="img-help"
              />
              Comment
            </button>
            <button className="btn-review-feed" onClick={openLoginModal}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNiWzBl10EJOYv6go_hPpAFpuTN8T0Zdo92A&usqp=CAU"
                alt=""
                className="img-help"
              />
              Share
            </button>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Reviews;
