import Post1 from "../post/Post1";
import Post2 from "../post/Post2";
import Post3 from "../post/Post3";
import Post4 from "../post/Post4";
import "./posts.css";
import Familia from '../../images/familia2.jpg';
import Flower from '../../images/flower.jpg';


export default function Posts() {
  return (
    <div className="posts">
      <Post1 img="https://img0.etsystatic.com/041/0/5862273/il_fullxfull.543790400_dbff.jpg" />
      <Post2 img={Familia} />
      <Post3 img="https://pubs.usgs.gov/fs/2005/3024/images/fs2005-3024_fig_04.jpg"/>
      <Post4 img={Flower}/>
      {/* <Post img="https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/> */}
    </div>
  );
}
