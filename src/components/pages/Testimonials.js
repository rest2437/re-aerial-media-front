import React, { useState, useEffect } from "react";
import Axios from "axios";
import TestimonialsContainer from "./TestimonialsContainer";
import "./Testimonials.css";

const { REACT_APP_SERVER_URL } = process.env;

const Testimonials = () => {
  const [testimonials, setTestmonials] = useState([]);

  useEffect(() => {
    const testimonialsData = async () => {
      const res = await Axios.get(`${REACT_APP_SERVER_URL}/testimonials`);
      console.log("ALL POSTS DATA", res.data.testimonials);
      setTestmonials(res.data.testimonials);
    };
    testimonialsData();
  }, []);

  const allTestimonials = () => {
    return testimonials.map((e, i) => {
      return (
        <div className="test-data-container">
          <div>
            <TestimonialsContainer
              key={i}
              _id={e._id}
              name={e.name}
              content={e.content}
            />
          </div>
        </div>
      );
    });
  };
  let displayTestimonialsList = testimonials ? (
    allTestimonials()
  ) : (
    <h2> Loading posts.... </h2>
  );

  return (
    <div>
      <div className="testimonials-container">
        <div id="stuff">Testimonials</div>
        <div className="testimonials-div">{displayTestimonialsList}</div>
      </div>
    </div>
  );
};

export default Testimonials;
