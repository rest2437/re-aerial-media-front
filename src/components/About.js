import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text-container">
        <div className="about-title">
          <h1>RE Aerial Media</h1>
        </div>
        <div className="about-sub-title">
          <h2>What we do... </h2>
        </div>
        <div className="about-content">
          <p>
            RE Aerial Media started out doing only Realstate photo shoots. We
            only offered Aerial view photos of the homes and property. Since
            then we have expanded our hardware and are capable of doing 360 view
            walkthroughs, photo editing, videography, high resolution photos and
            videos, and much much more.
          </p>
          <p>
            RE Aerial Media has also expanded into the Automotive market. With
            our 100MPH capable drones, we are able to follow you through your
            most epic journeys without skipping a beat. We also provide interior
            and exterior car cameras to capture those skills up close and
            personal.
          </p>
        </div>
        <div className="parent">
          <div className="realstate-services">
            <div className="realstate-about-sub-title">
              <p>
                <h2>Realstate Services </h2>
              </p>
            </div>
            <div className="realstate-about-content">
              <p>
                <ul>
                  <li>
                    <h2 className="realstate-title-services">Basic Package</h2>
                  </li>
                  <ul>
                    <li>Aerial Photo Portfolio</li>
                    <li>Photo Editing</li>
                  </ul>
                  <li>
                    <h2 className="realstate-title-services">
                      Intermediate Package
                    </h2>
                  </li>
                  <ul>
                    <li>Aerial photo Portfolio</li>
                    <li>Interior Photos</li>
                    <li>Photo Editing</li>
                  </ul>
                  <li>
                    <h2 className="realstate-title-services">
                      Advanced Package
                    </h2>
                  </li>
                  <ul>
                    <li>Aerial photo Portfolio</li>
                    <li>Interior Photos</li>
                    <li>Photo Editing</li>
                    <li>360 Interior Walkthrough With Your Own Link</li>
                  </ul>
                  <li>
                    <h2 className="realstate-title-services">Elite package</h2>
                  </li>
                  <ul>
                    <li>Aerial photo Portfolio</li>
                    <li>Interior Photos</li>
                    <li>Photo Editing</li>
                    <li>360 Interior Walkthrough With Your Own Link</li>
                    <li>High Definition Video Of The Exterior Of The Home</li>
                  </ul>
                </ul>
              </p>
            </div>
          </div>

          <div className="automotive-services">
            <div className="automotive-sub-title">
              <p>
                <h2>Automotive Services </h2>
              </p>
            </div>
            <div className="automotive-about-content">
              <p>
                <ul>
                  <li>
                    <h2>Basic Package (photos only)</h2>
                  </li>
                  <ul>
                    <li>Aerial Photo Portfolio</li>
                    <li>Photo Editing</li>
                  </ul>
                  <li>
                    <h2>Intermediate Package(photos/videos)</h2>
                  </li>
                  <ul>
                    <li>Aerial Photo Portfolio</li>
                    <li>In Car Video</li>
                    <li>Photo/Video Clip Editing</li>
                  </ul>
                  <li>
                    <h2>Advanced Package</h2>
                  </li>
                  <ul>
                    <li>Aerial Photo Portfolio</li>
                    <li>In Car Video</li>
                    <li>Photo Editing</li>
                    <li>High Resolution Video Clips</li>
                  </ul>
                  <li>
                    <h2>Elite package</h2>
                  </li>
                  <ul>
                    <li>Aerial Photo Portfolio</li>
                    <li>In Car Video 4k resolution</li>
                    <li>Photo Editing</li>
                    <li>High Resolution Video Clips</li>
                    <li>High Resolution Full Video</li>
                  </ul>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
