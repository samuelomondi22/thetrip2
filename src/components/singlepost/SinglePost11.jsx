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
          We didn’t notice the room we were staying at had two air conditioners, so only one was turned on. 
          But in the middle of the night we figured it out. A cooler night after that!
          <br/>
          We ate leftover Mexican food for breakfast. But Brian was feeling poorly since the previous night. 
          So we discussed whether we wanted to see the homeless people (aka “bums”) in San Francisco, 
          and see some more trees, or just go home. It was unanimous so we turned north and started driving. 
          <br/>
          It looked like it would be about 1,000 miles, and luckily we had started early. 
          Brian was able to lay down across the bench seat in the back and get some rest. 
          Samuel kept Steve awake. It was 106 degrees in Redding when we said goodbye to In-N-Out burgers and immediately we 
          crossed the border to Oregon the temperature dropped to about 76 degrees followed by rain. We seem to take the rain with us as we travel. 
          Not sorry to leave the heat, though. 
          <br/>
          Pretty good traffic and a nice sunset. 
          Steve was driving a bit crazy (he was pretty tired) but we didn’t do any damage to the truck. 
          And 15 hours after we started we pulled into our driveway. A long day! 
        </p>
      </div>
    </div>
  );
}
