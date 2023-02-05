import "../styles.css";
import RootSource from "./RootSource";
import superagent from "superagent";

export default function Home() {
  return (
    <div className="cali">
      <RootSource></RootSource>
      <div className="notionDummy"></div>
    </div>
  ); 
  
  const result = superagent.get("https://api.dogesound.club/dogesoundwinner");
  console.log(result);
}
