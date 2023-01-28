import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Nftft from "./pages/Nftft";

import "./styles.css";

export default function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <nav>
          <div className="NavlineMain">
            <div className="NavLineBranch1">
              <div className="NavLineBranchText1">
                <Link
                  to="/About"
                  style={{ textDecoration: "none", color: "#ffffff" }}
                >
                  ABOUT
                </Link>
              </div>
            </div>
            <div className="NavLineBranch2">
              <div className="NavLineBranchText2">
                <Link
                  to="/Nftft"
                  style={{ textDecoration: "none", color: "#ffffff" }}
                >
                  Nftft
                </Link>
              </div>
            </div>
            <div className="NavLineBranch3">
              <div className="NavLineBranchText3">AYIAS</div>
            </div>
            <div className="NavLineBranch4">
              <div className="NavLineBranchText4">BOT</div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Nftft" element={<Nftft />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
