import "../scss/SearchBar.scss";
import { observer } from "mobx-react";

import store from "../store";

function SearchBar() {
  return (
    <div className="search-bar">
      <input
        value={store.query}
        placeholder="Search for car..."
        onChange={(e) => {
          store.setSearchQuery(e.target.value);
          store.searchOnQuery(e.target.value);
        }}
      />
    </div>
  );
}

export default observer(SearchBar);
