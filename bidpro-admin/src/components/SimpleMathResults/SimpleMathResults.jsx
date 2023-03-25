import React from "react";
import { useSelector } from "react-redux";
import { selectMathResults } from "../../redux/mathSlice";

export const SimpleMathResults = () => {
  const allMathResults = useSelector(selectMathResults);
  if (allMathResults && allMathResults.length > 0) {
    return (
      <div>
        <ul className="list-group">
          {allMathResults.map((math, index) => {
            return (
              <li className="list-group-item" key={index}>
                The answer to {math.numberOne} {math.operator} {math.numberTwo}{" "}
                is {math.answer}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};
