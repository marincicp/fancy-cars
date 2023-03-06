import "../src/scss/App.scss";
import { observer } from "mobx-react";

import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import CarOfWeek from "./pages/CarOfWeek";
import Home from "./pages/Home";

function App() {
  return (
    <div className="grid">
      <Navbar />

      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carofweek" element={<CarOfWeek />} />
        </Routes>
      </div>
    </div>
  );
}

export default observer(App);
