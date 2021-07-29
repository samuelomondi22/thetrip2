import "./singlePost.css";
import Beach from '../../images/beach1.jpg';
import B from '../../images/b1.jpg';
import S from '../../images/b.jpg';

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
          Welcome To California: Part 1!
        </h1>
        <div className="singlePostInfo">
          <span>July 27, 2021</span>
        </div>
        <p className="singlePostDesc">             
            No better way to start the day than with a double double burger at In-N-Out.  
            After maneuvering the roads trying not to get in an accident cause the locals be driving recklessly,
             we made it to huntington beach. 
            We had fun body boarding. Brian got a good wave that pushed him about 30 feet to the shore. 
            Steve took this opportunity to get a nap on the beach :D
            The waves were about 5 feet. 
            We got to play soccer afterwards with some friends we met at the beach. Just having fun. 
            We then walked around the beach seeing what’s nice and buying some things along the way. 
            <br/>
            <br/>
            <img className="singleImg" src={B} alt="Brian picking a shoe"/>
            <br/>
            <span className="imgPar">Brian picking a shoe</span>
            <br/>
            <br/>
            <img className="singleImg" src={S} alt="Samuel happy with his shoe"/>
            <br/>
            <span className="imgPar">samuel trying on a hat</span>
            <br/>

        </p>
      </div>
    </div>
  );
}
