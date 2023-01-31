import "./common.css";
import RootSource from "./RootSource";

import "react-notion/src/styles.css";

import { NotionRenderer } from "react-notion";

import React, { useState, useEffect } from "react";

import Home from "./Home";

export default function Fiction() {
  const [response, setResponse] = useState({});

  useEffect(() => {
    // https://dsclabel.notion.site/FICTION-b2306331d42e40c8afc056b414bcb9fa
    const NOTION_PAGE_ID = "b2306331d42e40c8afc056b414bcb9fa";
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