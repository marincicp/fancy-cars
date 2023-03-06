import { CarsStore } from "./CarsStore";
import { CommentsStore } from "./CommentsStore";

class RootStore {
  carsStore;
  commentsStore;

  constructor() {
    this.carsStore = new CarsStore();
    this.commentsStore = new CommentsStore();
  }
}

export const rootStore = new RootStore();
