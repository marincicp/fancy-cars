import "../scss/CarDetail.scss";
import React, { useState } from "react";
import { observer } from "mobx-react";
import store from "../store";
import CommentItem from "./CommentItem";

const CarDetail = () => {
  const [autor, setAutor] = useState("");
  const [commentContent, setCommentContent] = useState("");
  let car = store.selectedCar;
  let coms = store.allComments;

  if (Object.keys(store.selectedCar).length === 0) {
    return (
      <div className="started-message">
        <p>Find and select a nice car !</p>
      </div>
    );
  }

  return (
    <div className="car-detail">
      <div className="car-detail-box_info">
        <div className="car-image-box">
          <img className="car-image" src={car.img} alt="car" />
        </div>
        <div className="car-info">
          <div className="car-info_left">
            <div className="car">
              <span className="car-icon">
                <ion-icon name="car-sport-outline"></ion-icon>
              </span>
              <span className="car-text">
                {car.make} {car.model}
              </span>
            </div>
            <div className="car">
              <span className="car-icon">
                <ion-icon name="build-outline"></ion-icon>
              </span>
              <span className="car-text">{car.year} </span>
            </div>
            <div className="car">
              <span className="car-icon">
                <ion-icon name="cash-outline"></ion-icon>
              </span>
              <span className="car-text">{car.price} $</span>
            </div>
          </div>

          <div className="car-info_right">
            <button
              className="save-btn"
              onClick={() => {
                // if (!car.saved) {
                //   store.addSavedCar(car);
                // } else {
                //   store.deleteSavedCar(car.id);
                store.setSaved(car);
                // }
                // store.controlSavedCars(car);
                store.setSelectedCar(car);
              }}
            >
              <ion-icon
                name={`bookmark${car.saved ? "" : "-outline"}`}
              ></ion-icon>
            </button>
          </div>
        </div>
        <div className="car-info-description">
          <div className="description-title">
            <ion-icon name="caret-forward"></ion-icon>

            <h4>More about car:</h4>
          </div>
          <div className="description-text">{car.description}</div>
        </div>
      </div>

      <div className="car-detail-box_comments">
        <div className="comment-title">
          {" "}
          <ion-icon name="chatbox-ellipses-outline"></ion-icon>{" "}
          <h4>Leave a Comment</h4>
        </div>
        <form
          className="comment-form"
          onSubmit={(e) => {
            e.preventDefault();
            if (autor.length > 0 && commentContent.length > 0) {
              store.createComment(car.id, autor, commentContent);
              setAutor("");
              setCommentContent("");
            }
          }}
        >
          <input
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
            className="name"
            placeholder="Your name..."
          />{" "}
          <input
            value={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
            className="comment"
            placeholder="Write a comment..."
          />
          <button>Post</button>
        </form>
        <div className="all-comments">
          {coms !== undefined
            ? coms.map((com) => {
                if (com.car_id === car.id) {
                  return <CommentItem key={com.comment_id} comment={com} />;
                }
              })
            : ""}
        </div>
      </div>
    </div>
  );
};

export default observer(CarDetail);
