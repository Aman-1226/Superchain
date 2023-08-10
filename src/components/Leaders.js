import React from "react";
import Keyrock from "../assets/Keyrock.png";
import KR1 from "../assets/KR1.png";
import Maven from "../assets/Maven.png";
import Tokonomy from "../assets/Tokonomy.png";
import Blockchain from "../assets/Blockchain.png";
import John from "../assets/john.jpg";
import Johnlilic from "../assets/Johnlilic.png";

const Leaders = () => {
  return (
    <>
      <div className="text-center" style={{ marginTop: "80px" }}>
        <div style={{ fontSize: "50px" }}>Backed by Web3 leaders</div>
        <div className="row" style={{ margin: "52px" }}>
          <div className="col" style={{ maxHeight: "auto", maxWidth: "17%" }}>
            <img src={Blockchain} alt="..." style={{ maxWidth: "195px" }} />
          </div>
          <div className="col" style={{ maxHeight: "auto", maxWidth: "17%" }}>
            <img src={Maven} alt="..." style={{ maxWidth: "106px" }} />
          </div>
          <div className="col" style={{ maxHeight: "auto", maxWidth: "17%" }}>
            <img
              src={KR1}
              alt="..."
              style={{ maxWidth: "128px", marginTop: "18px" }}
            />
          </div>
          <div className="col" style={{ maxHeight: "10%", maxWidth: "17%" }}>
            <img src={Tokonomy} alt="..." style={{ maxWidth: "156px" }} />
          </div>
          <div className="col" style={{ maxHeight: "auto", maxWidth: "17%" }}>
            <img
              src={John}
              alt="..."
              style={{ maxWidth: "61px", marginTop: "17px" }}
            />
            <div className="row">
              <div style={{ marginLeft: "0px" }}>
                <img src={Johnlilic} alt="..." style={{ maxWidth: "77px" }} />
              </div>
            </div>
          </div>
          <div className="col" style={{ maxHeight: "auto", maxWidth: "15%" }}>
            <img
              src={Keyrock}
              alt="..."
              style={{ maxWidth: "82px", marginTop: "17px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Leaders;
