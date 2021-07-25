import Post1 from "../post/Post1";
import Post2 from "../post/Post2";
import Post3 from "../post/Post3";
import Post4 from "../post/Post4";
import Post5 from '../post/Post5'
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
      <Post5 img="https://www-01.cruiseamerica.com/getattachment/96905f65-0704-4588-9fde-023da89f79d9/attachment.aspx"/>
    </div>
  );
}
