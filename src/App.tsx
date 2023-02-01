import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Fiction from "./pages/Fiction";
import Partners from "./pages/Partners";
import Term from "./pages/Term";
import RootSource from "./pages/RootSource";

import "./styles.css";

export default function App() {
  return (
      <BrowserRouter>
              <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Fiction" element={<Fiction />}></Route>
          <Route path="/Partners" element={<Partners />}></Route>
          <Route path="/Term" element={<Term />}></Route>
        </Routes> 
        <nav className='NavBox'>
              <div className="NavlineMain">
                <div className="NavLineBranch1">
                  <div className="NavLineBranchText1">
                    <Link
                      to="/"
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
              <div className="footerLineMain">
                  <div className="footerLineBranch1">
                <div className="footerLineBranchAttached1"><Link
                      to="/Term"
                      style={{ textDecoration: "none", color: "#ffffff;" }}
                    >
                      TERM
                    </Link>
                </div>
                  </div>
              </div>
              
        </nav>
       
        </BrowserRouter>       
  );
}
