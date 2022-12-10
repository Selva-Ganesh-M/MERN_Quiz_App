import React, { useState } from "react";
import Questions from "./Questions";

const Quiz = () => {
  const [checked, setChecked] = useState(undefined);
  function onChecked(check) {
    setChecked(check);
  }

  const onPrev = () => {};
  const onNext = () => {};

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      {/* display questions */}
      <Questions onChecked={onChecked} />

      <div className="grid">
        <button className="btn prev" onClick={onPrev}>
          Prev
        </button>
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
