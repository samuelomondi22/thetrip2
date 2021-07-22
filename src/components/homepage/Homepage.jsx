import Header from "../header/Header";
import Posts from "../../components/posts/Posts";
import "./homepage.css";

export default function Homepage() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
      </div>
    </>
  );
}
