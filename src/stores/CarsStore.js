import { makeAutoObservable } from "mobx";
import { RES_PER_PAGE } from "../config/config";
import { fetchAllCars, fetchCarOFWeek, fetchSearchResults } from "../apis/api";

export class CarsStore {
  carsData = [];
  selectedCar = {};
  carOfWeek = {};
  page = 1;
  resPerPage = RES_PER_PAGE;
  sortQuery = "All";
  query = "";
  // savedCars = [];

  constructor() {
    makeAutoObservable(this);
    this.getAllCars();
    this.getCarOfWeek();
    // this.getSavedCar();
  }

  setCars(cars) {
    this.carsData = cars;
  }

  setSortQuery(query) {
    return (this.sortQuery = query);
  }

  async getCarOfWeek() {
    try {
      const data = await fetchCarOFWeek();

      return this.setCarOfWeek(data[0]);
    } catch (err) {
      console.error(err);
    }
  }

  setCarOfWeek(car) {
    return (this.carOfWeek = {
      make: car.make,
      model: car.model,
      price: car.price,
      year: car.year,
      description: car.description,
      img: car.img,
      id: car.id,
    });
  }

  async getAllCars() {
    try {
      const data = await fetchAllCars();
      // this.carsData = data;
      this.setCars(data);
    } catch (err) {
      console.error(err);
    }
  }

  setPage(page) {
    return (this.page = page);
  }

  renderCars(page = this.page) {
    this.setPage(page);

    let start = (page - 1) * RES_PER_PAGE;
    let end = page * RES_PER_PAGE;

    if (this.sortQuery === "Year") {
      return this.carsData
        .slice()
        .sort((a, b) => b.year - a.year)
        .slice(start, end);
    }

    if (this.sortQuery === "Price") {
      return this.carsData
        .slice()
        .sort((a, b) => b.price - a.price)
        .slice(start, end);
    }

    return this.carsData.slice(start, end);
  }

  setSearchQuery(query) {
    return (this.query = query);
  }

  setSelectedCar(car) {
    return (this.selectedCar = {
      make: car.make,
      model: car.model,
      price: car.price,
      year: car.year,
      description: car.description,
      img: car.img,
      id: car.id,
      saved: car.saved,
    });
  }

  async searchOnQuery(query) {
    try {
      // this.page = 1;
      this.setPage(1);
      const data = await fetchSearchResults(query);
      this.setCars(data);
    } catch (err) {
      console.error(err);
    }
  }
}
