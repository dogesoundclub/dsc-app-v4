import React from 'react';
import { ExternalLink } from 'react-external-link';

import "./common.css";

export default function rootSource() {
  return (
    <div>
      <div className="brandingSection">
        <div className="hiMaskMan" />
        <div className="sloganBox" />
        <div className="sloganText">
          CHILL
          <br />
          IN
          <br />
          RETRO
          <br />
          <br />
          RECOVER
          <br />
          YOUR
          <br />
          INNOCENCE
          <br />
          <br />
          WITH
          <br />
          DSC
          <br />
          DSC
          <br />
        </div>
        <div className="dummy1">a</div>
        <div className="logoDsc"></div>
        <div className="gameboyDsc"></div>
        <div className="portalEngine"></div>
        <div className="portalEngineBox"></div>
        <div className="portalEngineText">!! DO NOT TOUCH !!</div>
      </div>
      <div className="bestDogeSoundBox"></div>
      <div className="bestDogeSoundText">형은 너희가... by 0xed57...</div>

      <div className="footerLineMain">
        <div className="footerLineBranch1">
          <div className="footerLineBranchAttached1">TERM</div>
        </div>
        <div className="footerLineBranch3">
          <ExternalLink href="https://discord.gg/dogesoundclub"><div className ="footerLineBranchAttached3"></div></ExternalLink>
        </div>
        <div className="footerLineBranch4">
          <ExternalLink href="https://github.com/dogesoundclub"><div className="footerLineBranchAttached4"></div></ExternalLink>
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
              href='https://v3.dogesound.club'>--{'>'} GO TO OLD VERSION</a>
        </div>
      </div>
    </div>
  );
}
