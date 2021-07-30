import "./singlePost.css";
import Tree from '../../images/tree1.jpg';
import Tree1 from '../../images/tree2.jpg';
import Fish from '../../images/fish1.jpg';
import View from '../../images/v.jpg';

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={View}
          alt=""
        />
        <h1 className="singlePostTitle">
          The General Sherman.
        </h1>
        <div className="singlePostInfo">
          <span>July 29, 2021</span>
        </div>
        <p className="singlePostDesc">             
            The Sequoia tree is considered the largest tree in the world. It occurs naturally only in groves
            on the western slopes of the Sierra Nevada Mountains of California. They grow at an average height of
            164-279 feet (50-85 m) with a trunk diameter ranging from 20-26 feet (6-8 m). 
            <br/>
            The particular one we were mostly interested in was the General Sherman Tree. It is a Sequoia tree. 
            It is not the tallest or widest but its overall volume of its trunk makes it the biggest tree on Earth.
             <br/>
            <br/>
            <img className="singleImg" src={Tree} alt="Samuel in front of the general sherman"/>
            <br/>
            It stands 275 feet high, base diameter of 36.5 feet and an overall volume of 52,500 cu feet (1,487 cu m) and 
            weighs 1,385 tons. This particular one is considered to be 2,200 years old. It survived the Great
            Apostacy and the Great Depression. What a tree.
             <br/>
            <br/>
            <img className="singleImg" src={Tree1} alt="Brian in front of the general sherman"/>
            <br/>
            With the temperature almost at the 90 degrees F () we finished the night with the most amazing meal - Tilapia. 
            For Samuel and Brian it brought back the memories of home, so they were happy to have it.
             <br/>
            <br/>
            <img className="singleImg" src={Fish} alt="Brian and Samuel enjoying Tilapia"/>
            <br/>
        </p>
      </div>
    </div>
  );
}
