import { useState } from "react";
function Cell({ value, ClickHandler, HighlightSquare }) {
  //   const [val, setVal] = useState(null);

  //   const handleClick = () => (setVal('O'))
  return (
    <button
      className={HighlightSquare ? "WinnerSquare" : "NormalSquare"}
      onClick={ClickHandler}
    >
      {value}
    </button>
  );
}

export default Cell;
