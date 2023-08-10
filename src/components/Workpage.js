import React from "react";
import Superchain from "./Superchain";

const Workpage = () => {
  return (
    <div>
      <div className="row" style={{ padding: "86px" }}>
        <div className="col" style={{ fontSize: "40px", color: "white" }}>
          Specific use cases include:
        </div>
        <div className="col">
          <div>
            <h4 style={{color: "yellow"}}>Shift in mindset</h4>
            <p style={{ fontSize: "15pxpx", color: "white" }}>
              Superchain's solution offers a shift in mindset from "Web2"
              centralised architectures to "Web3" decentralised architecture.
              Data indexes from Superchain are pushed out to users benefitting
              from low latency performance by processing locally.
            </p>
          </div>
          <div style={{marginTop:"31px"}}>
            <h4 style={{color: "yellow"}}>Consistent and granular model</h4>
            <p style={{ fontSize: "15pxpx", color: "white" }}>
              Superchain unifies data into a consistent and granular model,
              rather than simply aggregating it due to the limitations of
              centralised architecture. This allows data to be fast,
              customisable and decentralised
            </p>
          </div>
          <div style={{marginTop:"31px"}}>
            <h4 style={{color: "yellow"}}>Storage and Streaming</h4>
            <p style={{ fontSize: "15pxpx", color: "white" }}>
              Superchain has its own customised data storage platform and
              streaming capabilities. Developers interact with the indices via
              an SDK for on-the-wire speeds that avoid the use of slow
              presentation layers.
            </p>
          </div>
          <div style={{marginTop:"31px"}}>
            <h4 style={{color: "yellow"}}>Designed around users</h4>
            <p style={{ fontSize: "15pxpx", color: "white" }}>
              Superchain’s aim is to realise a fully decentralized data protocol
              designed around users, rather than computer limitations.
            </p>
          </div>
        </div>
      </div>
      <Superchain />
    </div>
  );
};

export default Workpage;
