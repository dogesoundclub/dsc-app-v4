import "./Partnerships.css";

import Home from "./Home";
import "./Home.css";

export default function Partnerships() {
  return (
    <div>
      <Home></Home>
      <div className="partnershipsBoxBackground"></div>
      <div className="partnershipsBox">
        <div className="partnershipsTitle">
          About
          <div className="partnershipsContent">
            &nbsp;Doge Sound Club (DSC) is a web3 community that operates and
            hosts the Doge Sound Contest using blockchain.
            <br />
            <br />
            &nbsp;The Doge Sound Contest is a blockchain-based contest in which
            candidates submit *Doge Sound candidates every month (Every
            2,592,000 blocks to be exact), and holders vote for the best Doge
            Sound that is the most unlogical and difficult to predict as the
            winner.
            <br />
            <br />
            &nbsp;*Doge Sound is a direct translation of the Korean word
            'Gaesori' which means nonsensical bullshit joke.
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
