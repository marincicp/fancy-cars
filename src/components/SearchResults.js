import "../scss/SearchResults.scss";
import store from "../store";
import { observer } from "mobx-react";
import CarItem from "./CarItem";

function SearchResults() {
  let carData = [];

  carData = store.renderCars();

  return (
    <div className="search-results">
      <div className="sort-box">
        <label>Sort by</label>
        <select
          onChange={(e) => {
            store.setSortQuery(e.target.value);
            store.setPage(1);
          }}
        >
          <option value="All" key={"All"}>
            All
          </option>
          <option value="Year" key={"Year"}>
            Newest
          </option>
          <option value="Price" key={"Price"}>
            Price High to Low
          </option>
        </select>
      </div>
      <div className="cars-div">
        {carData.length === 0 ? (
          <div className="message-box">
            <p>
              <span className="icon">
                <ion-icon className="icon" name="warning-outline"></ion-icon>
              </span>
              <span>No car found !</span>
            </p>
          </div>
        ) : (
          carData.map((car) => {
            return <CarItem key={car.id} car={car} />;
          })
        )}
      </div>
    </div>
  );
}

export default observer(SearchResults);
