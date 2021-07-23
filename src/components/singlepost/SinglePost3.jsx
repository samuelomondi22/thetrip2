import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://img0.etsystatic.com/041/0/5862273/il_fullxfull.543790400_dbff.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
          Three States in one day.
        </h1>
        <div className="singlePostInfo">
          <span>July 22, 2021</span>
        </div>
        <p className="singlePostDesc">
            Yes, today we did go through three states in a day. We started off at Idaho before passing through Montana and ending at Wyoming.
            At Wyoming we got to spend most of our day in Yellowstone. #explain Yellowstone

            #image

            We got to see the continental river #explain what it is

            #image

            On our way to old faithful we passed through #images and explain

            At old faithful, were everyone comes to see the gyser, we were able to see a give or take 20feet gyser. Oh i am sorry :D so this a gyser.

            #image

            #explain a gyser
        </p>
      </div>
    </div>
  );
}
