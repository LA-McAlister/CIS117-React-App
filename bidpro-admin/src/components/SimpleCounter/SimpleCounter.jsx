import React, { useState } from "react";

export const SimpleCounter = () => {
  const [count, setCount] = useState(0);

  /**
   * JavaScript Code
   */
  const addNum = () => {
    setCount(count + 1);
  };

  const subtractNum = () => {
    setCount(count - 1);
  };

  /**
   *  JSX CODE (HTML)
   */

  return (
    <>
      <div className="row">
        <div className="col display-6">Counter: {count}</div>
        <div className="col-1">
          <button className="btn btn-primary" onClick={addNum}>
            +
          </button>
        </div>
        <div className="col-1">
          <button className="btn btn-primary" onClick={subtractNum}>
            -
          </button>
        </div>
      </div>
    </>
  );
};
