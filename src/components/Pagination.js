import { observer } from "mobx-react";
import store from "../store";
import Button from "./Button";
import "../scss/Pagination.scss";

function Pagination() {
  let curPage = store.page;
  let maxPage = Math.ceil(store.carsData.length / store.resPerPage);

  function renderPagination() {
    const nextPage = () => {
      store.renderCars(curPage + 1);
      curPage++;
      store.setPage(curPage);
    };

    const prevPage = () => {
      store.renderCars(curPage - 1);
      curPage--;
      store.setPage(curPage);
    };

    if (curPage === 1 && maxPage > 1) {
      return (
        <Button float="right" onChangePage={nextPage} text={store.page + 1} />
      );
    }

    if (curPage === maxPage && maxPage > 1) {
      return (
        <Button
          onChangePage={prevPage}
          float="left"
          text={`${store.page - 1}`}
        />
      );
    }

    if (curPage < maxPage) {
      return (
        <>
          <Button onChangePage={prevPage} float="left" text={store.page - 1} />
          <Button onChangePage={nextPage} float="right" text={store.page + 1} />
        </>
      );
    }

    if (curPage === 1 && maxPage === 1) {
      return "";
    }
  }

  return <div className="pagination">{renderPagination()}</div>;
}

export default observer(Pagination);
