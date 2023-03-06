import "../scss/Pagination.scss";
import { observer } from "mobx-react";
import Button from "./Button";
import { useStores } from "../context/RootStoreContext";

function Pagination() {
  const { carsStore } = useStores();
  const { page } = carsStore;

  const nextPage = () => {
    carsStore.renderCars(page + 1);
  };

  const prevPage = () => {
    carsStore.renderCars(page - 1);
  };

  function renderPagination() {
    let maxPage = Math.ceil(carsStore.carsData.length / carsStore.resPerPage);

    if (page === 1 && maxPage > 1) {
      return <Button float="right" nextPage={nextPage} text={page + 1} />;
    }

    if (page === maxPage && maxPage > 1) {
      return <Button prevPage={prevPage} float="left" text={`${page - 1}`} />;
    }

    if (page < maxPage) {
      return (
        <>
          <Button prevPage={prevPage} float="left" text={page - 1} />
          <Button nextPage={nextPage} float="right" text={page + 1} />
        </>
      );
    }

    if (page === 1 && maxPage === 1) {
      return "";
    }
  }

  return <div className="pagination">{renderPagination()}</div>;
}

export default observer(Pagination);
