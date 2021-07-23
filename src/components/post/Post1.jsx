
// import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    // <div className="post">
    //   <img
    //     className="postImg"
    //     src={img}
    //     alt=""
    //   />
    //   <div className="postInfo">
    //     <div className="postCats">
    //     </div>
    //     <span className="postTitle">
    //       <Link to="/post/day1" className="link">
    //         The Journey Begins.....
    //       </Link>
    //     </span>
    //     <hr />
    //   </div>
    //   <p className="postDesc">
    //     Experience the first day of the trip with us. Just follow the link above.....
    //   </p>
    // </div>

    <div className="w3-row-padding">
        <div className="w3-col 13 m6 w3-margin-bottom">
            <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">
                    Summer House
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