import React from "react";
import Build from "../assets/Build.jpg";

const Pricing = () => {
  return (
    <>
      <div className="container-1">
        <div
          className="text-center"
          style={{ marginTop: "124px", marginBottom: "34px", fontSize: "67px" }}
        >
          Pricing Data
        </div>
      </div>
      <div className="container-2" style={{ padding: "57px" }}>
        <h3>
          Superchain data is ideally positioned to provide best in class real
          time pricing data.
        </h3>
        <h4 style={{ opacity: "0.5" }}>
          Our data opens entirely new strategies and markets for quantitative
          finance traders.{" "}
        </h4>
        <img
          src={Build}
          alt="..."
          style={{ maxHeight: "auto", width: "100%", marginTop: "26px" }}
        />
        <div className="row" style={{ padding: "86px" }}>
          <div className="col" style={{ fontSize: "40px" }}>
            Specific use cases include:
          </div>
          <div className="col" style={{ fontSize: "24px" }}>
            <p>1. Boutique automation strategies</p>
            <p>2. Loss protections and self-custody solutions</p>
            <p>3. Machine Learning</p>
            <p>4. Building custom indices</p>
            <p>5. Introspecting markets cross chain with ease</p>
            <p>
              6. Deepening understanding of user behaviour with wallet watching
            </p>
            <p>7. Creating arbitrage opportunities between cross chain DEXs</p>
            <p>8. Improving alerts, notifications and insights</p>
          </div>
        </div>
        <div
          className="text-center"
          style={{ fontSize: "28px", padding: "13px" }}
        >
          You can back test like a professional trader and access historical
          data in Python and Tensorflow. No limits. No constraints. You can
          download, stream and own cross-chain data in your local data science
          environment.
        </div>
      </div>
    </>
  );
};

export default Pricing;
