import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
        </div>
        <span className="postTitle">
          <Link to="/post/day1" className="link">
            The Journey Begins.....
          </Link>
        </span>
        <hr />
      </div>
      <p className="postDesc">
        Experience the first day of the trip with us. Just follow the link above.....
      </p>
    </div>
  );
}
