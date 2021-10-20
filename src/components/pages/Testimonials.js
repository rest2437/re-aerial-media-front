import React, { useState, useEffect } from "react";
import Axios from "axios";
import NewTestimonial from "./NewTestimonial";
import TestimonialsContainer from "./TestimonialsContainer";
import "./Testimonials.css";
// import DogsContainer from "./DogsContainer";
// import "./Dog.css";
// import video from "../../videos/dogpage.mp4";

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
        <div>
          <div className="each-post">
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
    <div className="testimonials-container">
      <NewTestimonial />
      {/* <div>
        <video src={video} className="dog-page-video" autoPlay loop muted />
      </div>
      <div className="dogs-page-header">
        <h2 id="dog-page-title">All Shelter Dogs Ready To Go!</h2>
      </div> */}
      <div className="testimonials-div">{displayTestimonialsList}</div>
    </div>
  );
};

export default Testimonials;
