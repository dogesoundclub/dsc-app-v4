import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import FICTION from "./pages/FICTION";

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
                  to="/Home"
                  style={{ textDecoration: "none", color: "#ffffff" }}
                >
                  HOME
                </Link>
              </div>
            </div>
            <div className="NavLineBranch2">
              <div className="NavLineBranchText2">
                <Link
                  to="/About"
                  style={{ textDecoration: "none", color: "#ffffff" }}
                >
                  ABOUT
                </Link>
              </div>
            </div>
            <div className="NavLineBranch3">
              <div className="NavLineBranchText3">
                <Link
                  to="/Fiction"
                  style={{ textDecoration: "none", color: "#ffffff" }}
                >
                  FICTION
                </Link>
              </div>
            </div>
            <div className="NavLineBranch4">
              <div className="NavLineBranchText4">
                <Link
                  to="/Partners"
                  style={{ textDecoration: "none", color: "#ffffff" }}
                >
                  PARTNERS
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/FICTION" element={<Fiction />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
