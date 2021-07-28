import "./singlePost.css";
import Beach from '../../images/beach1.jpg';


export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={Beach}
          alt=""
        />
        <h1 className="singlePostTitle">
          Welcome To California!
        </h1>
        <div className="singlePostInfo">
          <span>July 27, 2021</span>
        </div>
        <p className="singlePostDesc">        
           Coming Out Today!
        </p>
      </div>
    </div>
  );
}
