import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./SimpleMathCalculator.module.css";

export const SimpleMathCalculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [total, setTotal] = useState("");

  const [operator, setOperator] = useState("+");
  const [description, setDescription] = useState("");

  /**
   * JavaScript Code
   */

  const calculate = () => {
    let numberOne = Number(num1);
    let numberTwo = Number(num2);

    if (operator === "+") {
      setTotal(numberOne + numberTwo);
    }
    if (operator === "-") {
      setTotal(numberOne - numberTwo);
    }
    if (operator === "*") {
      setTotal(numberOne * numberTwo);
    }
    if (operator === "/") {
      setTotal(numberOne / numberTwo);
    }
    if (operator === "%") {
      setTotal(numberOne % numberTwo);
    }
    setDescription(
      "The answer to " + numberOne + " " + operator + " " + numberTwo
    );
  };

  const clear = () => {
    setNum1("");
    setNum2("");
    setTotal("");
    setOperator("+");
    setDescription("");
  };

  /**
   *  JSX CODE (HTML)
   */

  return (
    <>
      <div className="d-flex flex-wrap">
        <div className="row">
          <div className="col-4">
            <input
              type="text"
              className="form-control"
              placeholder="First Number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
            />
          </div>

          <div className="col-4">
            <select
              className="form-select"
              value={operator}
              onChange={(e) => setOperator(e.target.value)}
            >
              <option value="+">Addition (+)</option>
              <option value="-">Subtraction (-)</option>
              <option value="*">Multiplication (*)</option>
              <option value="/">Division (/)</option>
              <option value="%">Remainder (%)</option>
            </select>
          </div>

          <div className="col-4">
            <input
              type="text"
              className="form-control"
              placeholder="Second Number"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="px-5">
        <div className="px-5">
          <div className="px-5">
            <div className="d-flex flex-wrap px-4">
              <div className="d-flex justify-content-center px-5 pt-3 mr-2">
                <button className="btn btn-primary px-4" onClick={calculate}>
                  Calculate
                </button>{" "}
                <button className="btn btn-danger px-4" onClick={clear}>
                  Clear{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-center">
        <div className="display-2 pt-5 pr-5">
          <p>{total}</p>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        <div className="display-2 pt-5 pr-5">
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};
