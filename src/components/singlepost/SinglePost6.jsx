import "./singlePost.css";
import K from '../../images/k.jpg';

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={K}
          alt=""
        />
        <h1 className="singlePostTitle">
          Kartchner Meets Kartchner!
        </h1>
        <div className="singlePostInfo">
          <span>July 25, 2021</span>
        </div>
        <p className="singlePostDesc">
            Coming Out Tomorrow :)
        </p>
      </div>
    </div>
  );
}
