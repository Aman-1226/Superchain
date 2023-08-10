import "./App.css";
import Backers from "./components/Backers";
import Mainpage from "./components/Mainpage";
import Meettheteam from "./components/Meettheteam";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Getaccess from "./components/Getaccess";
import Pricing from "./components/Pricing";
import Token from "./components/Token";
import Terms from "./components/Terms";

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Mainpage />} />
            <Route exact path="/Meettheteam" element={<Meettheteam />} />
            <Route exact path="/Backers" element={<Backers />} />
            <Route exact path="/Getaccess" element={<Getaccess />} />
            <Route exact path="/Pricing" element={<Pricing/>} />
            <Route exact path="/Token" element={<Token/>} />
            <Route exact path="/Terms" element={<Terms/>} />
          </Routes>
          <div className="container-7">
            <Footer />
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
