import "./singlePost.css";
import BabaSteve from '../../images/rsz_babasteve.jpg';
import Kid from '../../images/kids.jpg';
import Kid2 from '../../images/kids2.jpg';
import Kid3 from '../../images/kids3.jpg';
import Game from '../../images/game.jpg';

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
         The Journey Begins Here.....
        </h1>
        <div className="singlePostInfo">
          <span>July 20, 2021</span>
        </div>
        <p className="singlePostDesc">
          This is the start of an amazing trip. Our first adventure is a 400mile drive thtough Idaho. 
          On our journey within Washington State, we were able to pass some amazing places. How about I share some with you! :)
          <br/>
          <br/>
          <img className="singleImg" src={BabaSteve} alt="Baba Steve ready for a trip"/>
          <br/>
          <span className="imgPar">Filling up to start the journey</span>
          <br/>
          <br/>
          One of the places that we passed by was the Colombia and Snake rivers. 
          We were able to see how these rivers have been providing life to some of the driest places around Oregon. 
          What they've done is take water from the rivers and used it to irrigate the lands. 
          Due to this most of the places appear green as ever in a hot area giving meaning to a rose in the desert.
          The area has turned green due to the farming that has been going around. The plantation that we saw the most was maize and hops.
          Hops is actually used in the making of beer. They tend to grow in a V shape as they grow along a string.
          <br/>
          The  next interesting place we passed by was the Hanford Site. 
          Hanford Site was established in 1943 and the plutonium manufactured in this place was used for the building of the first nuclear 
          bomb that was detonated at Nagasaki, Japan. It was interesting site to see.
          <br/>
          <br/>
          <img className="singleImg" src="https://media.spokesman.com/photos/2018/10/26/Nuclear_Workers_Demolition.JPG.jpg" alt="Hanford Site"/>
          <br/>
          <span className="imgPar">Hanford Site</span>
          <br/>
          <br/>
          Meeting the most amazing people in Brian and Liz was a good way to end the day. Brian and Liz have an friendly family and spending the night with them felt like home.
          We got an opportunity to play some games and read the scriptures with them. Being righteous is their goal as a family, and they show that you can still have fun and have righteousness be your number one goal.
          We really enjoyed the evening with them.
          <br/>
          <br/>
          <img className="singleImg" src={Kid} alt="Teaching the kids"/>
          <br/>
           <span className="imgPar">Baba Steve reading stories with the kids</span>
          <br/>
          <br/>
          <img className="singleImg" src={Kid2} alt="Teaching the kids"/>
          <br/>
          <span className="imgPar">Samuel reading to the kids</span>
          <br/>
          <br/>
          <img className="singleImg" src={Kid3} alt="Teaching the kids"/>
          <br/>
          <span className="imgPar">Baba Steve having a selfie moment</span>
          <br/>
          <br/>
          <img className="singleImg" src={Game} alt="Playing games"/>
          <br/>
          <span className="imgPar">Playing games with the kids before bed</span>
          <br/>
        </p>
      </div>
    </div>
  );
}
