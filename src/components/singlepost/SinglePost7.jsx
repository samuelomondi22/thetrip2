import "./singlePost.css";
import Cover from '../../images/cover.jpg';
import Flood from '../../images/floodroad.jpg';
import Flood1 from '../../images/floodroad1.jpg';


export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={Cover}
          alt=""
        />
        <h1 className="singlePostTitle">
          What an Adventure!
        </h1>
        <div className="singlePostInfo">
          <span>July 26, 2021</span>
        </div>
        <p className="singlePostDesc">        
            Every day for the last several days there has been gushing rain for part of the day. 
            In Utah and Arizona and Nevada. Lots and lots of rain. Flooding all over the place. 
            I feel like I’m the Rain God from Washington bringing relief to this drought area. 
            ( I did get a text saying the governor wanted to thank me. 🤣)
            <br/>
            <br/>
            <img className="singleImg" src={Flood} alt="Flooded road"/>
            <br/>
            <span className="imgPar">Flooded road</span>
            <br/>
            <br/>
            <img className="singleImg" src={Flood1} alt="Flooded road"/>
            <br/>
            <span className="imgPar">Water filled up the highway</span>
            <br/>
            We got to Brent’s house late because of the horrible traffic and the flooding. 
            But it was nice to be there and we all had a good time. I mostly talked to Kalli about college. 
            I got distracted when Hannah said she wanted to be a Mechanical Engineer!  It’s good to see another capable engineer taking shape! 
            <br/>
            We talked too long and left too late. By the time we got to the hotel it was almost 1 AM. 
            The clerk was polite enough, but he had a screw loose, I think. 
            He said he only had one room left. But, well, the beds don’t have comforters on them (but it’s a warm night, he assured!) 
            and the couch has the cushions messed up, and the toilet had been used. “What about that room?!  Shall I give you the keys?”  
            Well, we didn’t take that room and ended up in a smaller room than we expected, and so I bargained for “consideration”.  
            It was an adventure!
        </p>
      </div>
    </div>
  );
}
