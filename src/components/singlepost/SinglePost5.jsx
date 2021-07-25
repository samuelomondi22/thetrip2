import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://www-01.cruiseamerica.com/getattachment/96905f65-0704-4588-9fde-023da89f79d9/attachment.aspx"
          alt=""
        />
        <h1 className="singlePostTitle">
          The Grand Canyon!
        </h1>
        <div className="singlePostInfo">
          <span>July 24, 2021</span>
        </div>
        <p className="singlePostDesc">
            Coming Out Tomorrow :)
        </p>
      </div>
    </div>
  );
}
