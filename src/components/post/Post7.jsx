
import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="w3-row-padding">
        <div className="w3-col 13 m6 w3-margin-bottom">
            <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">
                    <Link to="/post/day7" className="link">
                        Day Seven
                    </Link>
                </div>
                <img
                className="postImg"
                src={img}
                alt=""
                />
            </div>
        </div>
    </div>
  );
}