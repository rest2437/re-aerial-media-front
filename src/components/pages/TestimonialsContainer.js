import React from "react";

const TestimonialsContainer = (props) => {
  return (
    <div className="testimonials-container">
      <h2>{props.name}</h2>
      <p>{props.content}</p>
    </div>
  );
};

export default TestimonialsContainer;
