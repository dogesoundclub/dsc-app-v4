import "../styles.css";
import RootSource from "./RootSource";

import { NotionRenderer } from "react-notion";

import React, { useState, useEffect } from "react";

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
