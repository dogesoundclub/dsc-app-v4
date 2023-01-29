import "./common.css";
import RootSource from "./RootSource";

//import "react-notion/src/styles.css";
import { NotionRenderer } from "react-notion";
import React, { useState, useEffect } from "react";

export default function About() {
  const [response, setResponse] = useState({});

  useEffect(() => {
    // https://dsclabel.notion.site/ABOUT-3c3fc05b21174bf48e70293ac115f96a
    const NOTION_PAGE_ID = "3c3fc05b21174bf48e70293ac115f96a";
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
