import "./Nftft.css";

import "react-notion/src/styles.css";
import { NotionRenderer } from "react-notion";

// 첫번째 방법 JSON을 직접 import
import staticResponse from "../data/b6b76d94704f498fb7c1fb19c332a3f9.json";

import Home from "./Home";
import "./Home.css";

export default function Nftft() {
  return (
    <div>
      <Home></Home>
      <div className="partnershipsBoxBackground">
        <NotionRenderer
          className="partnershipsBox" // 웹페이지에 노션을 렌더링
          blockMap={staticResponse} // 페이지정보 넣기
          fullPage={true}
        />
      </div>
    </div>
  );
}
