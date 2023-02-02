import React, { useState } from "react";

export const HelloNameInputOutput = () => {
  /**
   * JavaScript Code
   */

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [helloNameMessage, setHelloNameMessage] = useState("");

  const displayHelloMessage = () => {
    setHelloNameMessage(`Hello ${firstName} ${lastName}`);
  };

  const clearName = () => {
    setFirstName("");
    setLastName("");
    setHelloNameMessage("");
  };

  /**
   *  JSX CODE (HTML)
   */

  return (
    <>
      <div>
        <label HTMLfor="firstNameInput">First Name:</label>
        <input
          type="text"
          id="firstNameInput"
          placeholder="Enter a first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastNameInput">Last Name:</label>
        <input
          type="text"
          id="lastNameInput"
          placeholder="Enter a last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button onClick={displayHelloMessage}>Display</button>
        <button onClick={clearName}>Clear</button>
      </div>
      <p>{helloNameMessage}</p>
    </>
  );
};
