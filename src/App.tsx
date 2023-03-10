import { HashRouter, Routes, Route, Link } from "react-router-dom";
import { ExternalLink } from 'react-external-link';

import Home from "./pages/Home";
import About from "./pages/Greeting";
import Fiction from "./pages/Fiction";
import Partners from "./pages/Partners";
import Term from "./pages/Term";
import RootSource from "./pages/RootSource";

import "./styles.css";



export default function App() {

  const TEXT_HOME = "HOME";
  const TEXT_GREETING = "GREETING";
  const TEXT_FICTION = "FICTION";
  const TEXT_TERM = "TERM";
  const TEXT_OLD_VERSION = "--> GO TO OLD VERSION";

  return (
    <HashRouter basename='/'>
      <div></div>
              <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Greeting" element={<About />}></Route>
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
                      {TEXT_HOME}
                    </Link>
                  </div>
                </div>
                <div className="NavLineBranch2">
                  <div className="NavLineBranchText2">
                    <Link
                      to="/Greeting"
                      style={{ textDecoration: "none", color: "#ffffff" }}
                    >
                      {TEXT_GREETING}
                    </Link>
                  </div>
                </div>
                <div className="NavLineBranch3">
                  <div className="NavLineBranchText3">
                    <Link
                      to="/Fiction"
                      style={{ textDecoration: "none", color: "#ffffff" }}
                    >
                      {TEXT_FICTION}
                    </Link>
                  </div>
                </div>
                {/* <div className="NavLineBranch4">
                  <div className="NavLineBranchText4">
                    <Link
                      to="/Partners"
                      style={{ textDecoration: "none", color: "#ffffff" }}
                    >
                      PARTNERS
                    </Link>
                  </div>
                </div> */}
              </div>

              
        </nav>

        <div className="footerLineMain">
          <div className="footerLineBranch1">
                <div className="footerLineBranchAttached1">
                  <Link
                      to="/Term"
                      style={{ textDecoration: "none", color: "#636363" }}
                    >
                      {TEXT_TERM}
                    </Link>
                </div>
                  </div>
          <div className="footerLineBranch2">
            <ExternalLink href="https://opensea.io/collection/dogesoundclub-mates"><div className ="footerLineBranchAttached2"></div></ExternalLink>
          </div>
          <div className="footerLineBranch3">
            <ExternalLink href="https://discord.gg/dogesoundclub"><div className ="footerLineBranchAttached3"></div></ExternalLink>
          </div>
          <div className="footerLineBranch4">
            <ExternalLink href="https://github.com/dogesoundclub/fiction-dogesoundclub"><div className="footerLineBranchAttached4"></div></ExternalLink>
          </div>
          <div className="footerLineBranch5">
            <ExternalLink href="https://twitter.com/dogesoundclub"><div className="footerLineBranchAttached5"></div></ExternalLink>
          </div>
          <div className="footerLineBranch6">
            <ExternalLink href="https://www.youtube.com/@dogesoundclub_kr"><div className="footerLineBranchAttached6"></div></ExternalLink>
          </div>
          <div className="footerLineBranch7">
            <ExternalLink href="https://t.me/dogesoundclub"><div className="footerLineBranchAttached7"></div></ExternalLink>
          </div>
          <div className="footerLineBranch8">
            <ExternalLink href="https://www.instagram.com/dogesoundclub/"><div className="footerLineBranchAttached8"></div></ExternalLink>
          </div>
        <div className="footerLineBranch9">@2023 DSC LABEL inc.</div>
        <div className="footerLineBranch10">
          <a  style={{ textDecoration: "none", color: "#ffffff" }} 
              href='https://v3.dogesound.club'>{TEXT_OLD_VERSION}</a>
        </div>
      </div>



        {/* <div className="footerLineMain"> */}

              {/* </div> */}
        </HashRouter>       
  );
}
