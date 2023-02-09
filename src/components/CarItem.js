import "../scss/CarItem.scss";
import store from "../store";
import { observer } from "mobx-react";

function CarItem({ car }) {
  return (
    <div
      className={`car-item ${car.id === store.selectedCar.id ? "active" : ""}`}
      onClick={() => store.setSelectedCar(car)}
    >
      <div className="car-item_image">
        <img className="car-image" src={car.img} alt="car" />
      </div>
      <div className="car-item_text">
        <p className="car-model">{car.model}</p>
        <p className="car-make">
          <span className="icon">
            <ion-icon name="caret-forward-outline"></ion-icon>
          </span>
          <span>{car.make}</span>
        </p>
      </div>
    </div>
  );
}

export default observer(CarItem);
