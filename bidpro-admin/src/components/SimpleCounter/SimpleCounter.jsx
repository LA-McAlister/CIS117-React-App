import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectCount, increment, decrement } from "../../redux/counterSlice";

export const SimpleCounter = () => {
  //added from slice
  const initialCount = useSelector(selectCount);
  //added from slice
  const dispatch = useDispatch();
  const [count, setCount] = useState(initialCount);

  /**
   * JavaScript Code
   */
  const addNum = () => {
    dispatch(increment());
    setCount(count + 1);
  };

  const subtractNum = () => {
    dispatch(decrement());
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
