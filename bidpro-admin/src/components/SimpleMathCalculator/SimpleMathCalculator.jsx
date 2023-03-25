import React, { useEffect, useState } from "react";
import styles from "./SimpleMathCalculator.module.css";
import { SimpleMathResults } from "../SimpleMathResults/SimpleMathResults";
import { useSelector, useDispatch } from "react-redux";
import { selectMathResults } from "../../redux/mathSlice";
import { addResult } from "../../redux/mathSlice";

export const SimpleMathCalculator = () => {
  const dispatch = useDispatch();
  ///onAddResult: (math) => dispatch(addResult(math));
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [total, setTotal] = useState("");
  const [operator, setOperator] = useState("+");
  const [emptyNum1, setEmptyNum1] = useState(true);
  const [emptyNum2, setEmptyNum2] = useState(true);
  const [jumbotron, setJumbotron] = useState("");
  const [description, setDescription] = useState("");
  const [toggleCheck, setToggleCheck] = useState(false);

  useEffect(() => {
    if (toggleCheck === true) {
      dispatch(
        addResult({
          numberOne: num1,
          operator: operator,
          numberTwo: num2,
          answer: total,
        })
      );
    }
  }, [total]);

  /**
   * JavaScript Code
   */

  const calculate = () => {
    let numberOne = Number(num1);
    let numberTwo = Number(num2);

    if (isNaN(numberOne) && isNaN(numberTwo)) {
      //if input is not a number then here
      alert("Please enter numbers in fields");
    } else {
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
      setJumbotron(calculate === true);

      setDescription(
        "The answer to " + numberOne + " " + operator + " " + numberTwo
      );

      setToggleCheck(true);
    }
  };

  const clear = () => {
    setNum1("");
    setNum2("");
    setTotal("");
    setOperator("+");
    setDescription("");
    setEmptyNum1("");
    setEmptyNum2("");
  };

  /**
   *  JSX CODE (HTML)
   */

  return (
    <>
      <div className="table-responsive">
        <div className="mathTable flex-table">
          <div className="mathRow flex-row">
            <div className="mathColumn flex-column">
              <div className={emptyNum1 ? styles.noWarning : styles.yesWarning}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Number"
                  value={num1}
                  onChange={(e) => setNum1(e.target.value)}
                />
              </div>
            </div>

            <div className="mathColumn flex-column">
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

            <div className="mathColumn flex-column">
              <input
                type="text"
                className="form-control"
                {...(emptyNum2 ? styles.redOutline : "")}
                placeholder="Second Number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex-row">
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

      <div className="flex-row px-5">
        <div className={jumbotron ? styles.noOutline : styles.yesOutline}>
          <div className=" jumboColumn flex-column">
            <div className="px-5">
              <div className="px-5">
                <div className="display-3 px-5 justify-content-center">
                  <p className="px-5">{total}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="jumboColumn flex-column">
            <div className="display-4 justify-content-center px-2">
              <p className="px-5">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
