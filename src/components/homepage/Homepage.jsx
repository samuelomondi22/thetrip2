// import { useLocation } from "react-router";
import Header from "../header/Header";
// import Posts from "../../components/posts/Posts";
import "./homepage.css";

export default function Homepage() {
  // const location = useLocation();
  // console.log(location);
  return (
    <>
      <Header />
      <div className="home">
        {/* <Posts /> */}
      </div>
    </>
  );
}
