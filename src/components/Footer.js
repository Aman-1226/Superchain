import React from "react";
import Superlogo from "../assets/Superlogo.png";
import Linkdin from "../assets/linkdin.png";
import Twitter from "../assets/Twitter.png";
import Github from "../assets/Github.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div style={{ padding: "51px", backgroundColor: "burlywood" }}>
        <div className="row" style={{ fontSize: "20px" }}>
          <div className="col">
            <Link to="/">
              <img
                src={Superlogo}
                alt="..."
                style={{ maxHeight: "auto", maxWidth: "48%" }}
              />
            </Link>
            <div className="row" style={{ margin: "25px" }}>
              <div className="col" style={{ maxWidth: "82px" }}>
                <Link to="https://twitter.com/OpenSuperchain">
                  <img
                    src={Twitter}
                    alt="..."
                    style={{ maxHeight: "auto", maxWidth: "70%" }}
                  />
                </Link>
              </div>
              <div
                className="col"
                style={{ maxWidth: "84px", marginTop: "5px" }}
              >
                <Link to="https://www.linkedin.com/company/superchain-network/about/">
                  <img
                    src={Linkdin}
                    alt="..."
                    style={{ maxHeight: "auto", maxWidth: "46%" }}
                  />
                </Link>
              </div>
              <div
                className="col"
                style={{ maxWidth: "102px", marginTop: "5px" }}
              >
                <Link to="https://github.com/SuperChainNetwork">
                  <img
                    src={Github}
                    alt="..."
                    style={{ maxHeight: "auto", maxWidth: "42%" }}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
                ABOUT
                <div>
                  <Link
                    to="/Meettheteam"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Meet the Team
                  </Link>
                </div>
                <div>
                  <Link
                    to="/Backers"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Backers
                  </Link>
                </div>
                <div>
                  <Link
                    to="/Terms"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Terms
                  </Link>
                </div>
              </div>
              <div className="col">
                BUILD
                <div>
                  <Link
                    to="/Pricing"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Princing Data
                  </Link>
                </div>
                <div>
                  <Link
                    to="/Token"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Superchain Token
                  </Link>
                </div>
              </div>
              <div className="col">
                COMMUNITY
                <div>
                  <Link
                    to="https://blog.superchain.network/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Blog
                  </Link>
                </div>
                <div>
                  <Link
                    to="https://twitter.com/OpenSuperchain"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Twitter
                  </Link>
                </div>
                <div>
                  <Link
                    to="https://www.linkedin.com/company/superchain-network/about/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Linkedin
                  </Link>
                </div>
                <div>
                  <Link
                    to="https://github.com/SuperChainNetwork"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
