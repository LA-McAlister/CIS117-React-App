import React, { useState } from "react";
import styles from "./HelloNameSelection.module.css";

export const HelloNameSelection = () => {
  const [name, setName] = useState("");
  const [numOfTimes, setNumOfTimes] = useState(0);
  const [helloNameMessage, setHelloNameMessage] = useState("");
  const [isEven, setIsEven] = useState(true);

  const displayHelloMessage = () => {
    setIsEven(numOfTimes % 2 === 0);
    setHelloNameMessage(
      `You will display "Hello ${name}" a total of ${numOfTimes} times.`
    );
  };

  const clearName = () => {
    setName("");
    setNumOfTimes(0);
    setHelloNameMessage("");
  };

  return (
    <>
      <div className="mb-3">
        <lable htmlFor="helloNameInput" className="form-lable">
          Name:
        </lable>
        <input
          type="text"
          className="form-control"
          id="helloNameInput"
          placeholder="Enter a name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <lable htmlFor="numOfTimesInput" className="form-lable">
          Number of Times:
        </lable>
        <input
          type="number"
          className="form-control"
          id="ageInput"
          placeholder="Enter your age"
          value={numOfTimes}
          onChange={(e) => setNumOfTimes(e.target.value)}
        />
      </div>
      <h2 className={isEven ? styles.evenColor : styles.oddColor}>
        {helloNameMessage}
      </h2>
      <div>
        <button className="btn btn-primary" onClick={displayHelloMessage}>
          Display Hello
        </button>{" "}
        <button className="btn btn-danger" onClick={clearName}>
          Clear
        </button>
      </div>
    </>
  );
};
