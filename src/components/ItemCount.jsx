import React, { useState } from "react";

const ItemCount = (props) => {
  const [count, setCount] = useState(props.initial);

  const decrement = () => {
    if (count > props.initial) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    if (count < props.stock) {
      setCount(count + 1);
    }
  };

  return (
    <>
      <div>
        <button className="btn btn-secondary btn-sm mx-3" onClick={decrement}>
          -
        </button>
        <span>{count}</span>
        <button className="btn btn-secondary btn-sm mx-3" onClick={increment}>
          +
        </button>
      </div>
      <br />
      <div>
        <button
          className="btn btn-primary btn mx-3
        "
        >
          Confirmar
        </button>
      </div>
    </>
  );
};

export default ItemCount;
