import "../scss/SearchResults.scss";
import { observer } from "mobx-react";
import CarItem from "./CarItem";
import { useStores } from "../context/RootStoreContext";

function SearchResults() {
  const { carsStore } = useStores();

  let carData = [];
  carData = carsStore.renderCars();
  return (
    <div className="search-results">
      <div className="sort-box">
        <label>Sort by</label>
        <select
          onChange={(e) => {
            carsStore.setSortQuery(e.target.value);
            carsStore.setPage(1);
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
