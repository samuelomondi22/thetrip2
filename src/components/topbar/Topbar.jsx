import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  return (
    <div className="top">
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
        </ul>
      </div>
    </div>
  );
}
