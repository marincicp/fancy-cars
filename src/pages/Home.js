import "../scss/Home.scss";
import CarDetail from "../components/CarDetail";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";

function Home() {
  return (
    <div className="home">
      <div className="home-left-side">
        <SearchBar />
        <SearchResults />
        <Pagination />
      </div>
      <div className="home-right-side">
        <CarDetail />{" "}
      </div>
    </div>
  );
}

export default Home;
