import "./About.css";

import Home from "./Home";
import "./Home.css";

export default function About() {
  return (
    <div>
      <Home></Home>
      <div className="aboutBoxBackground"></div>
      <div className="aboutBox">
        <div className="aboutTextHeader">
          About
          <div className="aboutTextContent">
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
        <div className="faqTextHeader">
          FAQ. Why DSC holding this strange contest?
          <div className="faqTextContent">
            &nbsp;We believe that the world we live in is a simulation, so we
            are gathering clues and evidence to prove it.
            <br />
            <br />
            &nbsp;Inconsistent or unpredictable words and actions often cause
            bugs, and these bugs are used as clues that the world is a
            simulation.
            <br />
            <br />
            &nbsp;To promote the collection of these clues, we have been running
            the Doge Sound Contest on the Klaytn chain since 2021, and a reward
            program for deviant behavior which is also good to cause bugs, Dog
            Bounty, is also under development.
            <br />
            <br />
            &nbsp;If you would like to observe or participate in the contest,
            please visit in Doge Sound Club Discord.
          </div>
          <div className="aboutImg"></div>
        </div>
      </div>
    </div>
  );
}
