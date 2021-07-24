import "./singlePost.css";
import Flower from '../../images/flower.jpg';

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={Flower}
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
            And it was just a stone’s throw from the temple I’m Afton, WY. 
            (Didn’t even know such a small town had a temple!)
            <br/>
            The drive through Wyoming was nice. It’s all 5 or 6 or 7 thousand feet up! 
            Everything was green and growing. Must be full of snow in the winter!  
            <br/>
            We stopped by the East Canyon Reservoir  where Steve has some investment property. 
            But we forgot exactly where it is. 🤪.   
            But we eventually found it. It looked like the nicest property around there. 
            <br/>
            We met Jeff Munk for lunch. We wanted to go to Marie Calendar’s for a late pie lunch, 
            but she didn’t survive the unfortunate restrictions the government had recently imposed. 
            Then we thought of the Taste of India. But it was closed too. So we bounced to Holy Smokes, a BBQ place.
             Samuel tried the fried okra, but he didn’t finish it. 😳   But the brisket was nice. 
            <br/>
            Jeff told us if his 6.5 acres he has recently bought near Logan. 
            Just bare ground now, but he plans!  House building and terracing and septic system and
             all that stuff that young people have the energy for. Good luck to him!
            <br/>
            We thought about jumping in the Great Salt Lake, but we ran out of time. 

<br/>

We stopped by Provo to see the BYU campus. Everything was closed because the 23rd is close to the 24th, and that’s a big holiday in Utah. So we drive around and noticed how many flowers they have planted. It really pretty!  And then we drove by the MTC for a look. The nice lady told us to go away. 😊

<br/>

Brian drove most of the 5 hours to Kanab. Steve gave him timely advice on how to improve his skills. 


<br/>
To cap the day off, Brian and Samuel spent an hour in the pool. The big guy took the opportunity to start his beauty rest. 




        </p>
      </div>
    </div>
  );
}
