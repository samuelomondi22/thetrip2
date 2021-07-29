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
          Welcome To California: Part 2!
        </h1>
        <div className="singlePostInfo">
          <span>July 28, 2021</span>
        </div>
        <p className="singlePostDesc">             
      Today’s breakfast was one of champions. It managed to fill us for the better part of the day. 
      <br/>
      We then drove to Down Town Disney but we could not get in because we had knives in our pockets and 
      Steve was not willing to part with his pocket knife. 
      So, we decided to move on to our next adventure - The
      In-N-Out close to the LAX Airport.
      We had milkshakes as we enjoyed the view of planes taking off and landing really close to where we were.
      <br/> 
      It was really nice to see the planes and talk about the mechanics behind the way they fly and land. 
      More specifically we talked a lot about the flaps on the plane and their role in making the planes land and take off. 
      <br/>
      Our next experience was at The Getty Villa Museum. 
      It is a great place to learn about and experience Greek and Roman art. 
      One can envision themselves in the great civilization of the Romans and let their imagination wander into the daily lives of the ancients 
      of civilization. 
      <br/>
      Our next stop was at Santa Monica. We visited the Pier. Steve took a nap at the beach while Sam and Brian played soccer at the beach 
      and swam in the ocean. 
      At the ocean, we met a preacher who was sharing the gospel in a crowded recreational place. 
      That was good to see and it was nice listening to him and getting his perspective of the gospel of Jesus Christ. 
      By the time we were done at the Pier, we were tired and ready to go back to the hotel room and call it a night.
        </p>
      </div>
    </div>
  );
}
