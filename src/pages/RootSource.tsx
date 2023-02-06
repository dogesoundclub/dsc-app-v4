import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { ExternalLink } from 'react-external-link';

import "../styles.css";

export default function rootSource() {

  //const [loading, setLoading] = useState(true);
  const [dogeSound, setDogeSound] = useState([]);
  const [round, setcontestRound] = useState([]);
  const [winner, setContestWinner] = useState([]);

  const getContestResult = async () => {
    const json = await (await fetch(`https://api.dogesound.club/dogesoundwinner`)).json();
    setDogeSound(json.dogesound);
    setcontestRound(json.round+1);
    setContestWinner(json.winner);

  //setLoading(false);
  };

  useEffect(() => {
    getContestResult();
  }, []);

  const congratulation = "개소리경연 제" + round + "회 우승작 : " + dogeSound + " BY " + winner;
  const TEXT_DO_NOT_TOUCH = "!! DO NOT TOUCH !!";
  //console.log(dogeSound);

  return (    
    <div className='hi'>
        <div className="hiMaskMan" />
        <div className="sloganBox">
        </div>
        
        <div className="logoDsc"></div>
        <div className="gameboyDsc"></div>
        <div className="portalEngine">
          <div className="portalEngineBox">
            <div className="portalEngineText">{TEXT_DO_NOT_TOUCH}</div>
            </div>
            </div>
        
            <div className="bestDogeSoundBox">
              <div className="bestDogeSoundText"><div className="wrapperDogeSound"><p className="targetDogeSound">{congratulation}</p></div></div>
      </div>
    </div>
    
  );
}
