import "./singlePost.css";
import Y from '../../images/y.jpg';
import Mtc from '../../images/mtc.jpg';
import Mtc1 from '../../images/mtc1.jpg';   
import Mt from '../../images/mt.jpg';
import Mt1 from '../../images/mt1.jpg';

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={Y}
          alt=""
        />
        <h1 className="singlePostTitle">
          HOLY SMOKES!
        </h1>
        <div className="singlePostInfo">
          <span>July 23, 2021</span>
        </div>
        <p className="singlePostDesc">
            We started the day at the best hotel we’ve stayed in. Brian especially liked the rustic, aged wood motif. 
            And it was just a stone’s throw from the temple in Afton, WY. 
            (Didn’t even know such a small town had a temple!)
            <br/>
            The drive through Wyoming was nice. It’s all 5 or 6 or 7 thousand feet up! 
            Everything was green and growing. Must be full of snow in the winter!  
            <br/>
            <br/>
            <img className="singleImg" src={Mt} alt="Mountain"/>
            <br/>
            <span className="imgPar">Beautiful mountain layed with different colors of formation</span>
            <br/>
            <br/>
            We stopped by the East Canyon Reservoir  where Steve has some investment property. 
            But we forgot exactly where it is. 🤪.   
            But we eventually found it. It looked like the nicest property around there. 
            <br/>
            <br/>
            <img className="singleImg" src={Mt1} alt="Mountain 2"/>
            <br/>
            <span className="imgPar">Beautiful mountain with a cave in it</span>
            <br/>
            <br/>
            We met Jeff Munk for lunch. We wanted to go to Marie Calendar’s for a late pie lunch, 
            but she didn’t survive the unfortunate restrictions the government had recently imposed. 
            Then we thought of the Taste of India. But it was closed too. So we bounced to Holy Smokes, a BBQ place.
            Samuel tried the fried okra, but he didn’t finish it. 😳   But the brisket was nice. 
            <br/>
            Jeff told us of his 6.5 acres he has recently bought near Logan. 
            Just bare ground now, but he has plans!  House building and terracing and septic system and
             all that stuff that young people have the energy for. We were all excited for him. Good luck to him! 
            <br/>
            We thought about jumping in the Great Salt Lake, but we ran out of time. 
            <br/>
            We stopped by Provo to see the BYU campus. 
            Everything was closed because the 23rd is close to the 24th, and that’s a big holiday in Utah. 
            So we drove around and noticed how many flowers they have planted. It's really pretty!  
            And then we drove by the MTC for a look. The nice lady told us to go away. 😊
            <br/>
            <br/>
            <img className="singleImg" src={Mtc} alt="MTC"/>
            <br/>
            <span className="imgPar">Provo MTC</span>
            <br/>
            <br/>
            <img className="singleImg" src={Mtc1} alt="MTC 1"/>
            <br/>
            <span className="imgPar">Provo MTC</span>
            <br/>
            <br/>
            Brian drove most of the 5 hours to Kanab. Steve gave him timely advice on how to improve his skills. 
            <br/>
            To cap the day off, Brian and Samuel spent an hour in the pool. 
            The big guy took the opportunity to start his beauty rest. 
        </p>
      </div>
    </div>
  );
}
