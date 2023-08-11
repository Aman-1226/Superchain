import React from "react";
import Logo from "../assets/logo.png";
import { Link,useNavigate } from "react-router-dom";


const Navbar = () => {

  const navigate = useNavigate();

  const handleRedirect = () => {
    document.title = "Get Access";
    navigate("/Getaccess");
  };
  

  return (
    <div className="navbar fixed-top" style={{ backgroundColor: "#f0f0f0", padding: "24px" }}>
      <div className="row" style={{width:"100%"}}>
        <div className="col">
          <Link to="/">
          <img
            src={Logo}
            alt="..."
            style={{ maxHeight: "auto", maxWidth: "48%", marginTop: "-9px" }}
          />
          </Link>
        </div>
        <div className="col" style={{marginTop: "10px", fontSize: "20px"}}>
          <div className="row">
            <div className="col text-start" style={{marginLeft: "-24px"}}>
              <Link to="/Meettheteam" style={{ textDecoration: 'none', color: 'black' }}>MEET THE TEAM</Link>
            </div>
            <div className="col  text-center">
              <Link to="/Backers" style={{ textDecoration: 'none', color: 'black' }}>BACKERS</Link>
            </div>
            <div className="col  text-center" >
              <Link to="https://blog.superchain.network/" style={{ textDecoration: 'none', color: 'black' }}>BLOG</Link>
            </div>
          </div>
        </div>
        <div className="col text-end" style={{marginTop: "10px"}}>
          <button
            type="button"
            class="btn btn-dark"
            onClick={handleRedirect}
            style={{
              marginTop: "2px",
              marginRight: "31px",
              fontSize: "24px",
              padding: "6px 33px",
              borderRadius: "0px",
            }}
          >
            Access
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
