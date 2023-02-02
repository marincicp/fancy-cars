import "../src/scss/App.scss";
import React from "react";

import { observer } from "mobx-react";

import SearchResults from "./components/SearchResults";
import SearchBar from "../src/components/SearchBar";
import CarDetail from "../src/components/CarDetail";
import Pagination from "../src/components/Pagination";

const App = () => {
  return (
    <div className="grid">
      <div className="top">
        <div className="logo-box">
          <img src={require("../src/img/logo.png")} alt="logo" />
          <h1>Fancy Cars</h1>
        </div>
        <div className="bookmarks-box">
          <button className="bookmarks-btn">
            <ion-icon name="bookmarks"></ion-icon> Saved
          </button>

          <div className="notification">{1}</div>
        </div>
      </div>
      <div className="left-side">
        <SearchBar />
        <SearchResults />
        <Pagination />
      </div>
      <div className="right-side">
        <CarDetail />
      </div>
    </div>
  );
};

export default observer(App);
