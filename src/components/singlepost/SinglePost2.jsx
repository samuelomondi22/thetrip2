import "./singlePost.css";
import Panda from '../../images/panda.jpg';
import Lava from '../../images/lava.jpg';
import Lava2 from '../../images/lava2.jpg';
import Familia from '../../images/familia2.jpg';
import Kiddo from '../../images/kiddo.jpg';

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={Familia}
          alt=""
        />
        <h1 className="singlePostTitle">
          Welcome To Rexburg.
        </h1>
        <div className="singlePostInfo">
          <span>July 21, 2021</span>
        </div>
        <p className="singlePostDesc">
            What a way to start the morning- waking up to joyous kids.
            We got to talk about being righteous and how the world tries to tell us otherwise.
            As the world moves away from the gospel it becomes a hard task for us but we can do it :) 
            We got to play a battlefield game with the kids before saying out goodbyes to Liz and Brian. 
            <br/>
            <br/>
            <img className="singleImg" src={Kiddo} alt="Saying goodbye to the kids"/>
            <br/>
            <br/>

            On our way to Rexburg we passed through the 'Craters of the Moon'. 
            Craters of the Moon formed during eight major eruptive periods between 15,000 and 2000 years ago.
            Lava erupted from the Great Rift, a series of deep cracks that start near the visitor center and stretch 52 miles (84 km.) to the southeast.
            Yes, it covers a wide area. 
            It was just like looking at a rock. 

            <br/>
            <br/>
            <img className="singleImg" src={Lava} alt="Lava rocks"/>
            <br/>
            <br/>
            <img className="singleImg" src={Lava2} alt="Lava rocks"/>
            <br/>
            <br/>

            Finally we were able to pick up Brian. 
            After a long hard work at school he is now able to have a rest and have some fun with us. 
            He does bring a joyous spirit. 
            It was awesome seeing him doing well and healthy.
            <br/>
            <br/>

            Afterwards, we got together with Tyler, Garrett and Ryan. Tyler and Ryan study Mechanical Engineering while Garrett studies Computer Engineering.
            We got to talk about school and life. They enjoy the majors they are doing and it was great spending time with them. Ryan is a part time national guard 
            and he loves it. You could see from how he talked about that it was something he loves.
            <br/>
            <br/>
            <img className="singleImg" src={Panda} alt="Tyler, Ryan, Garrett"/>
            <br/>
            <br/>
            That concluded the end of Day Two for us and it has been fun so far :)
        </p>
      </div>
    </div>
  );
}
