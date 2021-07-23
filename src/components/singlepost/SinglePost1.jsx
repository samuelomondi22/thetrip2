import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://img0.etsystatic.com/041/0/5862273/il_fullxfull.543790400_dbff.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
         The Journey Begins Here.....
        </h1>
        <div className="singlePostInfo">
          <span>July 20, 2021</span>
        </div>
        <p className="singlePostDesc">
          This is the start of an amazing trip. Our first adventure is a 400mile drive to Idaho. 
          On our journey within Washington State we were to pass some amazing places.
          On a long drive we not only got to see some cool stuff but also be able to learn some amazing stuff also. How about I share some with you :)
          <br/>
          One of the places was the Colombia and Snake rivers. 
          We were able to see how these rivers has provided life to some of the driest places. 
          What they've done is take water from the rivers and used it to irrigate the lands. 
          Due to this most of the places appear green as ever in a hot area giving meaning to rose in the desert.
          A lot of the farm lands are filled with barns, which are plants used mostly for making beer.
          <br/>
          The  next interesting place we passed by was the Hanford Site. 
          Hanford Site was established in 1943 and the plutonium manufactured in this place was used for the building of the first nuclear 
          bomb that was detonated at Nagasaki, Japan. 
        </p>
      </div>
    </div>
  );
}
