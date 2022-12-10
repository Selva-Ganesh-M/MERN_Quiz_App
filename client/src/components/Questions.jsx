import React, { useState } from "react";

const Questions = () => {
  const [checked, setChecked] = useState(undefined);
  const onSelect = () => {
    setChecked(true);
    console.log("radio button change");
  };
  const questions = {
    id: 1,
    question: "what is your name?",
    options: ["selva", "ganesh", "sekar"],
  };
  return (
    <div className="questions">
      <h2 className="text-light">{questions?.question}</h2>

      <ul key={questions?.id}>
        {questions?.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={false}
              name="options"
              id={`q${i}-option`}
              onChange={() => onSelect(i)}
            />

            <label className="text-primary" htmlFor={`q${i}-option`}>
              {q}
            </label>
            <div
              //   className={`check ${result[trace] == i ? "checked" : ""}`}
              className="check "
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
