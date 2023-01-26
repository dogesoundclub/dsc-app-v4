import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./style.css";

export default function App() {
  return (
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
            <div className="NavLineBranchText2">CURRENCY</div>
          </div>
          <div className="NavLineBranch3">
            <div className="NavLineBranchText3">AYIAS</div>
          </div>
          <div className="NavLineBranch4">
            <div className="NavLineBranchText4">BOT</div>
          </div>
          <div className="NavLineBranch5">
            <div className="NavLineBranchText5">PARTNERSHIPS</div>
          </div>
        </div>
        <Link to="/">
          <div className="logoDsc"></div>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
