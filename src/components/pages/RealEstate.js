import React from "react";
import "./RealEstate.css";
import Real1 from "../images/realEstate/real1.jpg";
import Real2 from "../images/realEstate/real2.jpg";
import Real3 from "../images/realEstate/real3.jpg";
import Real4 from "../images/realEstate/real4.jpg";
import Real5 from "../images/realEstate/real5.jpg";
import Real6 from "../images/realEstate/real6.jpg";
import Real7 from "../images/realEstate/real7.jpg";
import Real8 from "../images/realEstate/real8.jpg";
import Real9 from "../images/realEstate/real9.jpg";
import Real10 from "../images/realEstate/real10.jpg";

function RealEstate() {
  return (
    <div className="realstate-container">
      <div id="realstate-header">
        <h1>Real Estate Photography</h1>
      </div>
      <div id="realstate-disc">
        <h2>
          The main advantage of hiring an aerial photographer for Real Estate is
          that you can show property size and unique angles of the home and lot
          that you wouldnt normally be able to see or explain to the customer.
          And lets not forget... its pretty cool to see photos of anything from
          a birds eye view. While your competition only has ground photos, you
          can stand out by having unique photos of the entire property, or that
          nice view of the front of the house from 20-30ft above the street. We
          know during this pandemic selling homes can be a struggle. Not many
          clients want to view a home in person or buy a home sight unseen which
          makes it difficult to show all the goodies inside of the home... WE
          have a fix for that! RE Aerial Media is now offering complete 360
          walkthough's!
        </h2>
      </div>
      <div>
        <img src={Real9} alt="" id="Real9" />
      </div>

      <div className="realstate-photo-container">
        <div>
          <img src={Real2} alt="" id="Real2" />
        </div>
        <div>
          <img src={Real3} alt="" id="Real3" />
        </div>
        <div>
          <img src={Real4} alt="" id="Real4" />
        </div>
        <div>
          <img src={Real5} alt="" id="Real5" />
        </div>
        <div>
          <img src={Real6} alt="" id="Real6" />
        </div>
        <div>
          <img src={Real7} alt="" id="Real7" />
        </div>
        <div>
          <img src={Real8} alt="" id="Real8" />
        </div>
        <div>
          <img src={Real1} alt="" id="Real1" />
        </div>
        <div>
          <img src={Real10} alt="" id="Real10" />
        </div>
      </div>
    </div>
  );
}

export default RealEstate;
