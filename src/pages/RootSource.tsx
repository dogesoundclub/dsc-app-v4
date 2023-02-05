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
    setcontestRound(json.round);
    setContestWinner(json.winner);
  //setLoading(false);
  };

  useEffect(() => {
    getContestResult();
  }, []);

  const congratulation = "개소리 경연 제 " + round + "회 우승자 : " + dogeSound;

  //console.log(dogeSound);

  return (    
    <div className='hi'>
        <div className="hiMaskMan" />
        <div className="sloganBox"><div className="sloganText">
          2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2
          <br />
          
          <br />

          <br />
          <br />
          DETECT
          <br />
          BREAK&nbsp;
          <br />
          ESCAPE
          <br />
          <br />
          
          <br />
          
          <br />
          1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0
          <br />
        </div></div>
        
        <div className="logoDsc"></div>
        <div className="gameboyDsc"></div>
        <div className="portalEngine">
          <div className="portalEngineBox">
            <div className="portalEngineText">!! DO NOT TOUCH !!</div>
            </div>
            </div>
        
            <div className="bestDogeSoundBox">
              <div className="bestDogeSoundText">{congratulation}</div>
      </div>
    </div>
    
  );
}
