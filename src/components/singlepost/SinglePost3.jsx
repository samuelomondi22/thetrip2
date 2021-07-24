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
            At Wyoming we got to spend most of our day in Yellowstone. Yellowstone is a national park with unique hydrothermal and geologic wonders.
            A lot of people from around the world come to witnesses these wonders. We met a guy from South Africa and a couple from India.
            <br/>
            At YellowStone, we got to see the Continental Divide which separates river basins that drain into the Pacific Ocean from those
            river systems that drain into the Atlantic Ocean.
            <br/>
            <br/>
            

            At old faithful, we were able to see a give or take 20 feet geyser. A geyser is a hot spring in which water boils,sending a tall water and steam into the air.
            Normally there is a crack on the surface of the earth and as water goes through the cracks, it makes its way down till it contacts hot rocks. 
            As the water boils up more water goes through the crack and now the boiling water can't escape so it builds pressure. When the pressure of the boiling water
            gets higher it pushes push the water on top of it out of its way. When this happens the water underneath shoots up making a good site to view.
            The water that was pushed out trickle into the cracks repeating the process again.

            <br/>

            At the evening we toured a fish hatchery. A fish hatchery is a place for artificial breeding, hatching and rearing of fish. We saw eye eggs - fertilized egg with the eye 
            of the fish starting to show, and some fish that were 13 months old.
        </p>
      </div>
    </div>
  );
}
