import React from "react";
import "./Automotive.css";
import auto1 from "../images/automotive/auto1.jpeg";
import auto2 from "../images/automotive/auto2.jpeg";
import auto3 from "../images/automotive/auto3.jpeg";
import auto4 from "../images/automotive/auto4.jpeg";
import auto5 from "../images/automotive/auto5.jpeg";
import auto6 from "../images/automotive/auto6.jpeg";
import auto7 from "../images/automotive/auto7.jpeg";
import auto8 from "../images/automotive/auto8.jpeg";
import auto9 from "../images/automotive/auto9.jpeg";
import auto10 from "../images/automotive/auto10.jpeg";
import auto11 from "../images/automotive/auto11.jpeg";

function Automotive() {
  return (
    <div className="automotive-container">
      <div id="automotive-header">
        <h1>Automotive Photography</h1>
      </div>
      <div id="automotive-disc">
        <h2>
          Looking for that epic shot of you going through the canyon? Maybe an
          aerial view of a car show to post on social media? What about a video
          of you drifting through the track, with shots that would be impossible
          for a human to get without physically being duct taped to your quarter
          panel? No matter the occasion, RE Aerial Media is your go-to for that
          awesome footage to allow you to stand out in the car community. RE
          Aerial Media offers video and photo package deals with resolution up
          to 8k!
        </h2>
      </div>
      <div>
        <img src={auto1} alt="" id="auto1" />
      </div>

      <div className="automotive-photo-container">
        <div>
          <img src={auto2} alt="" id="auto2" />
        </div>
        <div>
          <img src={auto3} alt="" id="auto3" />
        </div>
        <div>
          <img src={auto5} alt="" id="auto5" />
        </div>
        <div>
          <img src={auto6} alt="" id="auto6" />
        </div>
        <div>
          <img src={auto7} alt="" id="auto7" />
        </div>
        <div>
          <img src={auto8} alt="" id="auto8" />
        </div>
        <div>
          <img src={auto9} alt="" id="auto9" />
        </div>
        <div>
          <img src={auto4} alt="" id="auto4" />
        </div>
        <div>
          <img src={auto11} alt="" id="auto11" />
        </div>
        <div>
          <img src={auto10} alt="" id="auto10" />
        </div>
      </div>
    </div>
  );
}

export default Automotive;
