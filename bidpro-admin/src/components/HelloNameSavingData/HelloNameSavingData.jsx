import React, { useState } from "react";
export const HelloNameSavingData = () => {
  const CURRENT_YEAR = 2023;
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [helloNameMessage, setHelloNameMessage] = useState("");

  const displayHelloMessage = () => {
    setHelloNameMessage(
      `Hello ${name}. Your age is ${age}. The year you were born is ${
        CURRENT_YEAR - age
      }.`
    );
  };

  const clearName = () => {
    setName("");
    setAge(0);
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
        <lable htmlFor="AgeInput" className="form-lable">
          Age:
        </lable>
        <input
          type="number"
          className="form-control"
          id="ageInput"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <h2>{helloNameMessage}</h2>
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
