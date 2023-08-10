import React from "react";
import line from "../assets/line.png";
import Nickgadner from "../assets/Nickgadner.jpeg";
import Blockchain from "../assets/Blockchain.png";
import Kinjalshah from "../assets/Kinjalshah.jpeg";
import Johnlilic from "../assets/Johnlilic.png";
import john from "../assets/john.jpg";
import { Link } from "react-router-dom";

const Protocolpage = () => {
  return (
    <>
      <div className="text-center">
        <h4>
          <Link
            to="https://medium.com/@nickgardner0651/indexing-on-chain-data-the-superchain-thesis-51f26beb0bb6"
            style={{ textDecoration: "none", color: "black" }}
          >
            The protocol is purpose-built and enables four key features:
          </Link>
        </h4>
        <div className="upper-heading row" style={{ opacity: "0.5" }}>
          <div className="col">
            <img
              src={line}
              alt="..."
              style={{ maxWidth: "23%", height: "99%", margin: "-12px 459px" }}
            />
          </div>
          <div className="col" style={{ fontSize: "20px", marginTop: "27px" }}>
            <p style={{ marginLeft: "-598px" }}>
              1. The ability for users to become network operators
            </p>
            <p style={{ marginLeft: "-595px" }}>
              2. Access to historical and real-time low-latency data
            </p>
            <p style={{ marginLeft: "-672px" }}>
              3. Advanced añalytics to improve utilization
            </p>
            <p style={{ marginLeft: "-581px" }}>
              4. Customizable toolboxes for application-specific use
            </p>
          </div>
        </div>
        <div>
          <p style={{ margin: "25px 184px", fontSize: "23px" }}>
            "Instead of packaging all of these components into a Web2 API
            service, Superchain has built a Web3 business model for Web3 data.
            It is a crypto-native solution for on-chain analytics."
          </p>
          <div style={{ margin: "55px" }}>
            <img
              src={Nickgadner}
              alt="..."
              style={{ maxHeight: "auto", maxWidth: "6%", borderRadius: "50%" }}
            />
            <h3>Nick Gardner</h3>
            <h5 style={{ opacity: "0.5" }}>Whisper</h5>
          </div>

          <hr />

          <div style={{ margin: "45px" }}>
            <img
              src={Blockchain}
              alt="..."
              style={{ maxHeight: "auto", maxWidth: "19%" }}
            />
            <p style={{ margin: "16px 104px", fontSize: "23px" }}>
              "Superchain’s technology and focus on toolboxes positions it as
              the premier Open Index Protocol. Both James and Max have a
              steadfast vision of how an open, fast, and decentralized index
              protocol will win - which we are deeply aligned with."
            </p>
            <img
              src={Kinjalshah}
              alt="..."
              style={{
                maxHeight: "auto",
                maxWidth: "6%",
                borderRadius: "50%",
                margin: "13px",
              }}
            />
            <h3>Kinjal Shah</h3>
            <h5 style={{ opacity: "0.5" }}>
              General Partner at Blockchain Capital.
            </h5>
          </div>

          <hr />

          <div style={{ margin: "45px" }}>
            <img
              src={Johnlilic}
              alt="..."
              style={{ maxHeight: "auto", maxWidth: "11%" }}
            />
            <p style={{ margin: "16px 104px", fontSize: "23px" }}>
              "Superchain is the most based chain of them all"
            </p>
            <img
              src={john}
              alt="..."
              style={{
                maxHeight: "auto",
                maxWidth: "4%",
                borderRadius: "50%",
                margin: "16px",
              }}
            />
            <h3>John Lilic</h3>
            <h5 style={{ opacity: "0.5" }}>
              Product development advisor and seed investor
            </h5>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Protocolpage;
