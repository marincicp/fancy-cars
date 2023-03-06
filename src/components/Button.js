import "../scss/Button.scss";
import { observer } from "mobx-react";

function Button({ text, float, nextPage, prevPage }) {
  const onHandleClick = () => {
    if (float === "right") {
      return nextPage();
    } else {
      return prevPage();
    }
  };

  return (
    <button onClick={onHandleClick} className={`button ${float}`}>
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
