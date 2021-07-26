import "./singlePost.css";
import K from '../../images/k.jpg';
import Dam from '../../images/dam.jpg';
import Dam1 from '../../images/dam1.jpg';
import Dam2 from '../../images/dam2.jpg';
import Rain from '../../images/rain.jpg';
import Vegas from '../../images/vegas.jpg';
import Vegas1 from '../../images/vegas1.jpg';
import Flood from '../../images/flood.jpg';

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={K}
          alt=""
        />
        <h1 className="singlePostTitle">
          Kartchner Meets Kartchner!
        </h1>
        <div className="singlePostInfo">
          <span>July 25, 2021</span>
        </div>
        <p className="singlePostDesc">
            For a drought season it does seem to rain a lot. We woke up to the blessing of rain that seem to dry off pretty quick when the rain stops,
            though some places still feel the effect of the rain.
            <br/>
            <br/>   
            <img className="singleImg" src={Flood} alt="Flooding"/>
            <br/>      
            <span className="imgPar">Water flood on the road</span>
            <br/>
            <br/>
            We were on a chase to make the Kartchner Cavern. With breakfast on the go we set forth to the Cavern.
            Rain gushing down on us, it took us less than 30 min drive and long behold we were staring at the Kartchner Cavern entrance sign. 
            <br/>
            Due to a lot of regulations we were not allowed to bring our mobile phones as we went through the caves. Despite not taking pictures we learnt a lot about 
            the beginning of Kartchner Cavern. A shallow inland sea covered the area 330 million years ago, depositing layers of sediment and fossils that eventually hardened into limestone.
            The limit with time uplifted to form mountains. However, a block of the limestone and other associated rocks was dropped down via a fault thousands of feet below
            the peaks of the mountain above. Kartchner Carvens eventually formed in this down dropped block of limestone. Rainwater, made slightly acidic by absorbing carbon dioxide 
            from the air and soil, penetrated cracks in the down dropped limestone block, mixed with ground water, and slowly dissolved rooms and passages. 
            <br/>
            <br/>   
            <img className="singleImg" src="https://bloximages.newyork1.vip.townnews.com/azfamily.com/content/tncms/assets/v3/editorial/6/44/644a6940-cd7c-11e8-b820-4b60ab8d7878/5bbf8a853354d.image.png?resize=1200%2C677" alt="Kartchner Cavern"/>
            <br/>      
            <span className="imgPar">Kartchner Cavern picture from the internet</span>
            <br/>
            <br/>
            After the drive we set on a journey to Las Vegas. Along the way we saw dozens of Joshua trees. Basically a giant type cactus tree.
            <br/>
            <br/>   
            <img className="singleImg" src="https://www.gannett-cdn.com/presto/2019/10/31/USAT/d61635df-7439-4bfd-a286-aa8d9e3e9e77-JoshuaTree_LG_03_-_CREDIT_Lance_Gerber_www.nuvueinteractive.com_website_necessary_Instagram_Credit__lncnuvue.jpg?crop=5332,3000,x0,y271&width=3200&height=1801&format=pjpg&auto=webp" alt="Joshua tree"/>
            <br/>      
            <span className="imgPar">Joshua Tree</span>
            <br/>
            <br/>
            Before reaching our destination we took a tour through the Hoover Dam. Formed between 1931-1936 and it was wonderful site to see.
            A concrete gravity arch with a volume of 3,250,000 cu yd (2,480,000 cubic m). Holds a massive amount of water.
            <br/>
            <br/>   
            <img className="singleImg" src={Dam} alt="Hoover Dam"/>
            <br/>   
            <br/>   
            <img className="singleImg" src={Dam1} alt="Hoover Dam"/>
            <br/>  
            <br/>   
            <img className="singleImg" src={Dam2} alt="Hoover Dam"/>
            <br/> 
            <span className="imgPar">Hoover Dam</span>
            <br/>
            <br/>
            Our journey got interesting as what followed us for the next hour or so was a rain storm with lighting strike so close you could reach out and grab it.
            It was an adventure that was exciting for all of us.
            <br/>
            <br/>   
            <img className="singleImg" src={Rain} alt="Rain Storm"/>
            <br/>      
            <span className="imgPar">Rain Storm</span>
            <br/>
            <br/>
            In Las Vegas we realized there was no specific way to get in or out of any building. But after driving around we found a spot and our hotel.
            After dinner we all got tired but had enough strength to walk around and see what Las Vegas is all about. The lights on the street were a sight to behold.
            <br/>
            <br/>   
            <img className="singleImg" src={Vegas} alt="LV"/>
            <br/>   
            <br/>   
            <img className="singleImg" src={Vegas1} alt="LV"/>
            <br/>      
            <span className="imgPar">Baba Steve and Brian in Las Vegas</span>
        </p>
      </div>
    </div>
  );
}
