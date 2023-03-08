import "../scss/CarOfWeek.scss";
import { useRef } from "react";
import CarDetail from "../components/CarDetail";
import CommentCard from "../components/CommentCard";
import { useStores } from "../context/RootStoreContext";

const data = [
  { name: "John", comment: "Very nice car" },
  { name: "Mario", comment: "This is my favorite car" },
  { name: "Tony", comment: "My dream car!" },
  { name: "Joseph", comment: "Mercedes never never disappoint" },
  { name: "Chris", comment: "I like it :)" },
  { name: "Ivan", comment: "Beautiful car!" },
  { name: "Tony", comment: "My dream car!" },
  { name: "Joseph", comment: "Mercedes never never disappoint" },
];

function CarOfWeek() {
  const { carsStore } = useStores();
  const { carOfWeek } = carsStore;

  const slider = useRef();

  const slideLeft = () => {
    slider.current.scrollLeft = slider.current.scrollLeft - 300;
  };
  const slideRight = () => {
    slider.current.scrollLeft = slider.current.scrollLeft + 300;
  };

  return (
    <div className="car-detail">
      <div className="car-detail-box_info">
        <div className="car-image-box">
          <img className="car-image" src={carOfWeek.img} alt="car" />
        </div>
        <div className="car-info">
          <div className="car-info_left">
            <div className="car">
              <span className="car-icon">
                <ion-icon name="car-sport-outline"></ion-icon>
              </span>
              <span className="car-text">
                {carOfWeek.make} {carOfWeek.model}
              </span>
            </div>
            <div className="car">
              <span className="car-icon">
                <ion-icon name="build-outline"></ion-icon>
              </span>
              <span className="car-text">{carOfWeek.year} </span>
            </div>
            <div className="car">
              <span className="car-icon">
                <ion-icon name="cash-outline"></ion-icon>
              </span>
              <span className="car-text">{carOfWeek.price} $</span>
            </div>
          </div>

          <div className="car-info_right"></div>
        </div>
        <div className="car-info-description">
          <div className="description-title">
            <ion-icon name="caret-forward"></ion-icon>

            <h4>More about car:</h4>
          </div>
          <div className="description-text">{carOfWeek.description}</div>
        </div>
      </div>
      <div className="down-part">
        <div className="about-carofweek">
          <h4>What others say about car of the week :</h4>
        </div>

        <div className="slider-parent">
          <div className="box">
            <div className="slider" ref={slider}>
              {data.map((com, index) => {
                return (
                  <CommentCard
                    key={index}
                    name={com.name}
                    content={com.comment}
                  />
                );
              })}

              <button onClick={slideLeft} className="slider-btn left-btn">
                <ion-icon name="caret-back-outline"></ion-icon>
              </button>
              <button onClick={slideRight} className="slider-btn right-btn">
                <ion-icon name="caret-forward-outline"></ion-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarOfWeek;
