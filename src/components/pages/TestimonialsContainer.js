import React from "react";

const TestimonialsContainer = (props) => {
  return (
    <div className="each-post">
      <h2 id="name-of-test">{props.name}</h2>
      <p>{props.content}</p>
    </div>
  );
};

export default TestimonialsContainer;
