import React from "react";
import Workpage from "./Workpage";
import Protocolpage from "./Protocolpage";
import Networkpage from "./Networkpage";
import Leaders from "./Leaders";
import Tech from "../assets/Tech.jpg";
import Whiteback from "../assets/Whiteback.jpg";
import Black from "../assets/black.jpg";
import Bold from "../assets/Bold.jpeg"
import { useNavigate } from "react-router-dom";

const Mainpage = () => {
  const Background1 = {
    backgroundImage: `url(${Tech})`,
    padding: "228px",
  };

  const Background2 = {
    backgroundImage: `url(${Whiteback})`,
    padding: "34px",
  };

  const Background3 = {
    backgroundImage: `url(${Bold})`,
    padding: "34px",
  };

  const Background4 = {
    backgroundImage: `url(${Black})`,
    padding: "67px",
    margin: "0px",
  };

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/Getaccess");
  };

  return (
    <>
      {/* First part of the front page */}
      <div className="container-1" style={Background1}>
        <div className="text-center">
          <div
            className="heading1"
            style={{ fontSize: "54px", color: "white" }}
          >
            The Open Index Protocol
          </div>
          <p style={{ margin: "16px 80px", fontSize: "24px", color: "white" }}>
            By collecting and customising data in minutes, Superchain serves as
            the layer on top of which builders create applications, faster
          </p>
          <button
            type="button"
            class="btn btn-dark"
            style={{
              borderWidth: "2px",
              borderColor: "goldenrod",
              marginTop: "10px",
              fontSize: "30px",
              padding: "6px 33px",
              borderRadius: "0px",
            }}
          >
            Access
          </button>
        </div>
      </div>

      {/* 2nd part of the front page */}
      <div className="container-2" style={Background2}>
        <div
          style={{
            marginLeft: "64px",
            marginRight: "794px",
            marginTop: "49px",
          }}
        >
          <h1>The Open Index Protocol</h1>
          <p style={{ fontSize: "21px" }}>
            Most indexes today are closed, siloed, or centralised, which leads
            to an unacceptable developer experience and users suffer.
            Specifically, we face:
          </p>
        </div>
        <div
          style={{
            marginLeft: "794px",
            marginRight: "75px",
            marginTop: "85px",
          }}
        >
          <h1 className="d-flex justify-content-end">High Latency </h1>
          <p
            className="d-flex justify-content-end"
            style={{ fontSize: "21px" }}
          >
            Latency for queries today is unacceptable. Some offer data in
            seconds, whereas others in hundreds of milliseconds. When it takes
            this long to load a dApp users switch off.
          </p>
        </div>
        <div
          style={{
            marginLeft: "64px",
            marginRight: "794px",
            marginTop: "85px",
          }}
        >
          <h1>Aggregated Data</h1>
          <p style={{ fontSize: "21px" }}>
            Indexes usually aggregate data to improve performance and
            operational experience. But this is far from ideal for many use
            cases because users miss valuable data.
          </p>
        </div>
        <div
          style={{
            marginLeft: "794px",
            marginRight: "75px",
            marginTop: "85px",
          }}
        >
          <h1 className="d-flex justify-content-end">Barriers to Entry</h1>
          <p
            className="d-flex justify-content-end"
            style={{ fontSize: "21px" }}
          >
            Barriers to Entry Presently developers integrate with a fixed API or
            query interface which they find quickly limiting. They have to waste
            time building their own indexer. This is a major barrier to entry
            for the next wave of blockchain innovation.
          </p>
        </div>
        <div
          className="d-flex justify-content-end"
          style={{ marginRight: "131px", marginTop: "62px" }}
        >
          <button
            style={{
              marginTop: "10px",
              fontSize: "30px",
              padding: "6px 33px",
              borderRadius: "0px",
            }}
            onClick={handleRedirect}
            type="button"
            className="btn btn-dark"
          >
            Access
          </button>
        </div>
      </div>
      <div className="container-3" style={Background3}>
        <Workpage />
      </div>
      <div className="container-4" style={{ padding: "36px" }}>
        <Protocolpage />
      </div>
      <div className="container-5" style={Background4}>
        <Networkpage />
      </div>
      <div className="container-6" style={{ margin: "0" }}>
        <Leaders />
      </div>
    </>
  );
};

export default Mainpage;
