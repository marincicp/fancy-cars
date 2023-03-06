import "../scss/SearchBar.scss";
import { observer } from "mobx-react";
import { useStores } from "../context/RootStoreContext";

function SearchBar() {
  const { carsStore } = useStores();

  return (
    <div className="search-bar">
      <input
        value={carsStore.query}
        placeholder="Search for car..."
        onChange={(e) => {
          carsStore.setSearchQuery(e.target.value);
          carsStore.searchOnQuery(e.target.value);
        }}
      />
    </div>
  );
}

export default observer(SearchBar);
