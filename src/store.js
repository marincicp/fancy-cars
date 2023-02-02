import { makeAutoObservable } from "mobx";
import { RES_PER_PAGE, API_URL, COMMENT_API } from "./config/config";

class Store {
  carsData = [];
  selectedCar = {};
  page = 1;
  resPerPage = RES_PER_PAGE;
  sortQuery = "All";

  query = "";
  savedCars = [];
  allComments = [];

  constructor() {
    makeAutoObservable(this);
    this.getAllCars();
    // this.getSavedCar();
    this.getAllComments();
  }

  setCars(cars) {
    this.carsData = cars;
  }

  setSortQuery(query) {
    return (this.sortQuery = query);
  }

  async getAllCars() {
    try {
      const res = await fetch(`${API_URL}/cars`);
      let data = await res.json();

      return store.setCars(data);
    } catch (err) {
      console.log(err);
    }
  }

  setPage(page) {
    return (this.page = page);
  }

  renderCars(page = this.page) {
    this.page = page;
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
    this.page = 1;
    const res = await fetch(`${API_URL}/cars?search=${query}`);
    const data = await res.json();
    this.setCars(data);
  }

  async setSaved(car) {
    let data = { ...car, saved: !car.saved };
    data = JSON.stringify(data);

    const res = await fetch(`${API_URL}/cars/${car.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
    let newData = await res.json();

    this.setSelectedCar(newData);

    return newData;
  }

  // COMMENTS
  async getAllComments() {
    const res = await fetch(`${COMMENT_API}/comments`);
    const data = await res.json();
    return this.setComments(data);
  }

  setComments(comments) {
    return (this.allComments = comments);
  }

  async createComment(id, autor, content) {
    let commentData = {
      car_id: id,
      author: autor,
      content: content,
    };

    commentData = JSON.stringify(commentData);

    const res = await fetch(`${COMMENT_API}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: commentData,
    });
    const data = await res.json();
    this.allComments.unshift(data);
    return data;
  }

  // async getSavedCar() {
  //   const res = await fetch(`${API_URL}/savedcars`);
  //   const data = res.json();

  //   this.savedCars = data;
  //   return data;
  // }

  async addSavedCar(car) {
    let data = {
      carid: car.id,
      make: car.make,
      model: car.model,
      img: car.img,
    };

    data = JSON.stringify(data);

    const res = await fetch(`${API_URL}/savedcars`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });

    const newData = res.json();
    return newData;
  }

  // async addBookmarks() {
  // let exist = this.savedCars.find((savedCar) => savedCar.carid == car.id);

  async deleteSavedCar(id) {
    const res = await fetch(`${API_URL}/savedcars/{id}`, {
      method: "DELETE",
    });

    const data = res.json();
    return data;
  }

  controlSavedCars(car) {
    let exist = this.savedCars.find((savedCar) => savedCar.carid === car.id);
    console.log(exist, "exist");
    console.log(!exist, "ne");

    if (!exist) {
      this.savedCars.push(car);
    }
  }
}

const store = new Store();

export default store;

/////////////////////////////////////////
