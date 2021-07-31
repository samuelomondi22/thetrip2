import "./singlePost.css";
import End from '../../images/end1.jpg';

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={End}
          alt=""
        />
        <h1 className="singlePostTitle">
          Home Sweet Home.
        </h1>
        <div className="singlePostInfo">
          <span>July 30, 2021</span>
        </div>
        <p className="singlePostDesc">             
           Coming Out Today!
        </p>
      </div>
    </div>
  );
}
