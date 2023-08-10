import React from "react";
import Blockchain from "../assets/Blockchain.png";
import KR1 from "../assets/KR1.png";
import Maven from "../assets/Maven.png";
import Tokonomy from "../assets/Tokonomy.png";
import John from "../assets/john.jpg";

const Backers = () => {
  return (
    <>
      <div className="container">
        <div
          className="text-center"
          style={{ padding: "160px", fontSize: "67px" }}
        >
          Backers
        </div>
        <div className="row">
          <div className="col text-center">
            <img src={Blockchain} alt="..." style={{ width: "52%" }} />
          </div>
          <div className="col">
            <h2 style={{fontSize: "39px", color: "red"}}>__</h2>
            <p>
              “Superchain’s technology and focus on toolboxes positions it as
              the premier Open Index Protocol. Both James and Max have a
              steadfast vision of how an open, fast, and decentralized index
              protocol will win - which we are deeply aligned with."
            </p>
          </div>
        </div>
        <div className="row" style={{padding: "23px"}}>
          <div className="col text-center">
            <img src={John} alt="..." style={{ width: "19%" }} />
          </div>
          <div className="col">
            <h2 style={{fontSize: "39px", color: "red"}}>__</h2>
            <p>
              “Superchain’s technology and focus on toolboxes positions it as
              the premier Open Index Protocol. Both James and Max have a
              steadfast vision of how an open, fast, and decentralized index
              protocol will win - which we are deeply aligned with."
            </p>
          </div>
        </div>
        <div className="row" style={{padding: "23px"}}>
          <div className="col text-center">
            <img src={Maven} alt="..." style={{ width: "32%" }} />
          </div>
          <div className="col">
            <h2 style={{fontSize: "39px", color: "red"}}>__</h2>
            <p>
              “Superchain’s technology and focus on toolboxes positions it as
              the premier Open Index Protocol. Both James and Max have a
              steadfast vision of how an open, fast, and decentralized index
              protocol will win - which we are deeply aligned with."
            </p>
          </div>
        </div>
        <div className="row"  style={{padding: "23px"}}>
          <div className="col text-center">
            <img src={KR1} alt="..." style={{ width: "30%" }} />
          </div>
          <div className="col">
            <h2 style={{fontSize: "39px", color: "red"}}>__</h2>
            <p>
              “Superchain’s technology and focus on toolboxes positions it as
              the premier Open Index Protocol. Both James and Max have a
              steadfast vision of how an open, fast, and decentralized index
              protocol will win - which we are deeply aligned with."
            </p>
          </div>
        </div>
        <div className="row" style={{padding: "23px"}}>
          <div className="col text-center">
            <img src={Tokonomy} alt="..." style={{ width: "38%" }} />
          </div>
          <div className="col">
            <h2 style={{fontSize: "39px", color: "red"}}>__</h2>
            <p>
              “Superchain’s technology and focus on toolboxes positions it as
              the premier Open Index Protocol. Both James and Max have a
              steadfast vision of how an open, fast, and decentralized index
              protocol will win - which we are deeply aligned with."
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Backers;
