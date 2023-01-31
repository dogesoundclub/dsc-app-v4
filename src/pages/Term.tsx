import "./common.css";
import RootSource from "./RootSource";

import "react-notion/src/styles.css";

import { NotionRenderer } from "react-notion";

import React, { useState, useEffect } from "react";

export default function Term() {
  const [response, setResponse] = useState({});

  useEffect(() => {
    // https://dsclabel.notion.site/TERMS-89b9c6408d854f3c9d347003e6a63bf8
    const NOTION_PAGE_ID = "89b9c6408d854f3c9d347003e6a63bf8";
    fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then((res) => res.json())
      .then((resJson) => {
        setResponse(resJson);
      });
  }, []);

  return (
    <div>
      <RootSource></RootSource>
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
