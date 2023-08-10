import React from "react";
import Ethereum from "../assets/Ethereum.png";
import { Link } from "react-router-dom";

const Networkpage = () => {
  return (
    <>
      <div>
        <div className="text-center">
          <div style={{ fontSize: "60px", color: "white" }}>
            Networks Supported
          </div>
          <p style={{ fontSize: "25px", margin: "28px", color: "white" }}>
            Superchain currently supports common{" "}
            <Link
              to="https://ethereum.org/en/"
              style={{ textDecoration: "none"}}
            >
              <strong style={{ color: "goldenrod" }}>Ethereum</strong>
            </Link>{" "}
            (EVM) based chains and L2s
          </p>
          <img
            src={Ethereum}
            alt="..."
            style={{ maxHeight: "auto", maxWidth: "6%" }}
          />
        </div>
      </div>
    </>
  );
};

export default Networkpage;
