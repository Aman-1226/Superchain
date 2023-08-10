import React from "react";
import JamesCorbet from "../assets/Jamescorbet.jpeg";
import James from "../assets/James.jpg";
import Maximlegg from "../assets/Maximlegg.jpg";

const Meettheteam = () => {
  return (
    <>
      <div className="container">
        <div
          className="text-center"
          style={{ padding: "160px", fontSize: "67px" }}
        >
          Meet the team
        </div>
        <div className="row">
          <div className="col">
            <img
              src={JamesCorbet}
              alt="..."
              style={{ maxHeight: "auto", width: "100%" }}
            />
            <h1>James Corbett</h1>
            <h3 style={{ color: "red" }}>Founder & CEO</h3>
            <p>
              James is Founder and CEO of Superchain Network. He has a history
              of delivering blockchain projects to production, including trading
              platforms, merchant scale wallets, validators and other key
              blockchain infrastructure. Through that journey he has identified
              key issues in the user and developer experience for public
              blockchains. His focus is building core Web3 infrastructure.
            </p>
          </div>
          <div className="col">
            <img
              src={Maximlegg}
              alt="..."
              style={{ maxHeight: "auto", width: "100%" }}
            />
            <h1>Maxim Legg</h1>
            <h3 style={{ color: "red" }}>Founder & CTO</h3>
            <p>
              Founder and Chief Technology Officer of Superchain. Max is an
              innovative leader driving the technical vision to achieve
              Superchains mission: The Open Index Protocol. Passionate about
              creating decentralised applications having already built key
              infrastructure pieces and founding a mining pool and validator.
            </p>
          </div>
          <div className="col">
            <img
              src={James}
              alt="..."
              style={{ maxHeight: "auto", width: "100%" }}
            />
            <h1>Jamie McDonaugh</h1>
            <h3 style={{ color: "red" }}>Head of Business Developement</h3>
            <p>
              Jamie bought his first Bitcoin in 2014 and was a founder investor
              in KR1 in 2016 as well as early NFT projects in 2018. He worked as
              a digital assets analyst before joining Superchain in early 2022.
              He studied at Oxford University for his BA (2000), The Courtauld
              Institute for his MA (2003) and went on to found an award winning
              travel company building it to $4m in annual sales. He completed
              the ‘Economics of Blockchain & Digital Assets’ course at Wharton
              Business School in 2022.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Meettheteam;
