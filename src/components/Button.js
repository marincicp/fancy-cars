import "../scss/Button.scss";
import { observer } from "mobx-react";

function Button({ text, onChangePage, float }) {
  const onHandleClick = () => {
    onChangePage();
  };

  return (
    <button
      style={{ float: `${float}` }}
      onClick={onHandleClick}
      className="button"
    >
      {float === "left" ? (
        <>
          {" "}
          <span className="arrow">
            <ion-icon className="arrow" name="arrow-back-outline"></ion-icon>{" "}
          </span>
          {text}
        </>
      ) : (
        <>
          {text}
          <span className="arrow">
            <ion-icon className="arrow" name="arrow-forward-outline"></ion-icon>
          </span>
        </>
      )}
    </button>
  );
}

export default observer(Button);
