import "./common.css";

import "react-notion/src/styles.css";

import { NotionRenderer } from "react-notion";

import React, { useState, useEffect } from "react";

import Home from "./Home";
import "./Home.css";

export default function NFT() {
  const [response, setResponse] = useState({});

  useEffect(() => {
    // 두번째 방법
    const NOTION_PAGE_ID = "b6b76d94704f498fb7c1fb19c332a3f9";
    fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then((res) => res.json())
      .then((resJson) => {
        setResponse(resJson);
      });
  }, []);

  return (
    <div>
      <Home></Home>
      <div className="contentStyle">
        <NotionRenderer
          // blockMap={staticResponse}
          blockMap={response}
          fullPage={true}
          hideHeader={true}
        />
      </div>
    </div>
  );
}
