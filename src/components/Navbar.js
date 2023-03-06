import "../scss/Navbar.scss";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link className="link" to="/">
        <div className="logo-box">
          {" "}
          <img src={Logo} alt="logo" />
          <h1>Fancy Cars</h1>
        </div>
      </Link>

      <div className="links">
        <Link className="link" to="/">
          <button className="link-btn">
            {" "}
            <ion-icon name="search-sharp"></ion-icon> Explore
          </button>
        </Link>

        <Link className="link" to="/carofweek">
          <button className="link-btn">
            <ion-icon name="star-sharp"></ion-icon>
            Car Star
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
