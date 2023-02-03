import React, { useState } from "react";

export const SimpleAddition = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [total, setTotal] = useState("?");

  /**
   * JavaScript Code
   */

  const calculate = () => {
    let numberOne = Number(num1);
    let numberTwo = Number(num2);
    setTotal(numberOne + numberTwo);
  };

  const clear = () => {
    setNum1("");
    setNum2("");
    setTotal("?");
  };

  /**
   *  JSX CODE (HTML)
   */

  return (
    <>
      <div className="row">
        <div className="col-2">
          <input
            type="text"
            className="form-control"
            vaule={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
        </div>
        <div className="col-1 display-6">+</div>
        <div className="col-2 display-6">
          <input
            type="text"
            className="form-control"
            vaule={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </div>
        <div className="col-1 display-6">=</div>
        <div className="col-1 display-6">{total}</div>
        <div className="col-2 d-grid">
          <button className="btn btn-primary" onClick={calculate}>
            Calculate
          </button>
        </div>
        <div className="col-2 d-grid">
          <button className="btn btn-danger" onClick={clear}>
            Clear
          </button>
        </div>
      </div>
    </>
  );
};
