import "./singlePost.css";
import View from '../../images/view.jpg';
import View1 from '../../images/view1.jpg';
import BS from '../../images/BS.jpg';
import Brian from '../../images/brianrock.jpg';
import BabaSteve from '../../images/BabaS.jpg';
import Colorado from '../../images/coloradoriver.jpg';
import Nap from '../../images/napB.jpg';
import Canyon from '../../images/canyon.jpg';
import Canyon1 from '../../images/canyon1.jpg';
import Canyon2 from '../../images/canyon2.jpg';

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
            The morning started with a warm shower and a hearty breakfast that left everyone feeling stuffed and with a smile on their faces. 
            Brian had a nice memory of Kenya from the taste of the sausage. 
            We then started the drive to the Grand Canyon.
            <br/>
            We stopped at the “Lefevre Overlook” to see “The Grand Staircase" on our way to the Grand Canyon”. 
            It was an impressive view of plateaus and cliffs that span a vast land. 
            The cliffs and plateaus could be seen as far as your eye could see. 
            <br/>
            <br/>
            <img className="singleImg" src={View} alt="Grand Staircase"/>
            <br/>
            <span className="imgPar">Lefevre Overlook</span>
            <br/>
            <br/>
            <img className="singleImg" src={View1} alt="Lefevre overlook"/>
            <br/>
            <span className="imgPar">The Grand Staircase explained</span>
            <br/>
            We then continued with the drive for about three hours and stopped to take pictures at the side of the road because the rocks looked pretty.
            <br/>
            <br/>
            <img className="singleImg" src={BabaSteve} alt="Baba steve on a rock"/>
            <br/>
            <span className="imgPar">Baba Steve on one of the rocks</span>
            <br/>
            <br/>
            <img className="singleImg" src={Brian} alt="brian on a rock"/>
            <br/>
            <span className="imgPar">Brian on one of the rocks</span>
            <br/>
            <br/>
            <img className="singleImg" src={BS} alt="Baba steve and brian on a rock"/>
            <br/>
            <span className="imgPar">Brian and Baba Steve on one of the rocks</span>
            <br/>
            We drove on a bridge across the Colorado River and we were amazed by the depth of it. 
            The Colorado River is 1,450-mile-long(2,330km). It encompasses parts of seven US states and two Mexican states.
            It is a long river.
            We saw signs that said don’t jump from the bridge and we made a joke out of it. 
            <br/>
            <br/>
            <img className="singleImg" src={Colorado} alt="Colorado river"/>
            <br/>
            <span className="imgPar">Colorado river</span>
            <br/>
            The next three hours of the ride, Brian took a nap in the truck's back seat. So we took a picture when he wasn't looking.
            <br/>
            <br/>
            <img className="singleImg" src={Nap} alt="brian napping"/>
            <br/>
            <span className="imgPar">Brian napping away.</span>
            <br/>
            When we got to The Grand Canyon, it was like nothing we imagined. 
            It was far down that a person standing at the bottom would look like an insect from the top. 
            It was vast and colorful. We spent a good amount of time looking and discussing how this wonder of the world was formed.
            We thought of a few possibilities like a big flood and water eroding the rocks as the water level dropped through 
            the years. It is still open for discussion. It was an amazing experience. 
            <br/>
            <br/>
            <img className="singleImg" src={Canyon} alt="Grand Canyon"/>  
            <br/>
            <br/>
            <img className="singleImg" src={Canyon1} alt="Elk"/>      
            <br/>
            <br/>
            <img className="singleImg" src={Canyon2} alt="animal on the road"/> 
            <br/>
            <br/>
            We left the Grand Canyon and drove to Benson in Arizona where we spent the night. 
            On our way there we had a heavy downpour and Brian was glad he was not driving at the time it started raining. 
            Because of the rain, we talked about hydroplaning. Hydroplaning is when a vehicle starts sliding uncontrollably due to the tires encountering
            more water than the treads can displace. As you can guess it is common when it rains a lot hence extra careful when driving. 
            By the time we got to Benson, we had covered 2200 miles of the trip. 55% of the trip done.
        </p>
      </div>
    </div>
  );
}
