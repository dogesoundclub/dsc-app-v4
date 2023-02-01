import "../styles.css";
import RootSource from "./RootSource";

// import "react-notion/src/styles.css";

import { NotionRenderer } from "react-notion";

import React, { useState, useEffect } from "react";

export default function Partners() {
  const [response, setResponse] = useState({});

  useEffect(() => {
    // https://dsclabel.notion.site/PARTNERS-827038f9d3954e2c850655f5d143d9bb
    const NOTION_PAGE_ID = "827038f9d3954e2c850655f5d143d9bb";
    fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then((res) => res.json())
      .then((resJson) => {
        setResponse(resJson);
      });
  }, []);

  return (
    <div className="cali">
      <RootSource></RootSource>
      <div className="notionBackground">
      <div className="notionPosition">
        <NotionRenderer
          // blockMap={staticResponse}
          blockMap={response}
          fullPage={true}
          hideHeader={true}
        />
      </div>
      </div>
    </div>
  );
}
