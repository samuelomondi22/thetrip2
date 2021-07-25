import "./singlePost.css";
import OldF from '../../images/oldf.jpg';
import BabaSB from '../../images/babastevebrian.jpg';
import Brian from '../../images/brian.jpg';
import MudP from '../../images/mudpot.jpg';
import Brian1 from '../../images/brian2.jpg';
import BBS from '../../images/BBS.jpg';
import Sam from '../../images/sam.jpg';
import SmallG from '../../images/smallgeyser.jpg';
import Brian3 from '../../images/brian3.jpg';
import Familia3 from '../../images/familia3.jpg';
import Brian4 from '../../images/brian4.jpg';
import Teton from '../../images/teton.jpg';
import Buffalo from '../../images/buffalos.jpg';
import Fish from '../../images/fish.jpg';
import Sam1 from '../../images/sam1.jpg';


export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={OldF}
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
            <img className="singleImg" src={BabaSB} alt="Baba Steve and Brian"/>
            <br/>
            <br/>
            <img className="singleImg" src={Brian} alt="Brian"/>
            <br/>
            <br/>
            <img className="singleImg" src={MudP} alt="Mud Pot"/>
            <br/>
            <br/>
            <img className="singleImg" src={Brian3} alt="Brian"/>
            <br/>
            <br/>
            <img className="singleImg" src={Brian4} alt="Brian"/>
            <br/>
            <br/>
            At Old Faithful, we were able to see about a 130 feet geyser. A geyser is a hot spring in which water boils,sending a tall water and steam into the air. They tend to be about 105-184 feet in height.
            Normally there is a crack on the surface of the earth and as water goes through the cracks, it makes its way down till it contacts hot rocks. 
            As the water boils up more water goes through the crack and now the boiling water can't escape so it builds pressure. When the pressure of the boiling water
            gets higher it pushes push the water on top of it out of its way. When this happens the water underneath shoots up making a good site to view.
            The water that was pushed out trickle into the cracks repeating the process again.
            <br/>
             <br/>
            <img className="singleImg" src={Brian1} alt="Brian"/>
            <br/>
            <br/>
            <img className="singleImg" src={BBS} alt="Baba Steve"/>
            <br/>
            <br/>
            <img className="singleImg" src={Sam} alt="Samuel"/>
            <br/>
            <br/>
            <img className="singleImg" src={SmallG} alt="Brian"/>
            <br/>
            <br/>
            <img className="singleImg" src={Familia3} alt="Familia"/>
            <br/>
            <br/>
            <img className="singleImg" src={Sam1} alt="Samuel"/>
            <br/>
            <br/>
            At the evening we toured a fish hatchery. A fish hatchery is a place for artificial breeding, hatching and rearing of fish. We saw eye eggs - fertilized egg with the eye 
            of the fish starting to show, and some fish that were 13 months old.
            <br/>
            <br/>
            <img className="singleImg" src={Fish} alt="Fish Hatchery"/>
            <br/>
            Fish Hatchery Spots
            <br/>
            <img className="singleImg" src={Buffalo} alt="Buffalos"/>
            <br/>
            <br/>
            <img className="singleImg" src={Teton} alt="Grand Tetons"/>
            <br/>
            That is the Grand Tetons
        </p>
      </div>
    </div>
  );
}
