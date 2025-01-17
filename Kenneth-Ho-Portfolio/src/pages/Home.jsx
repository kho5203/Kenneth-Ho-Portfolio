import "./Home.css";
import MePicture from "./Me_Picture.png";

function Home() {
  return (
    <div className="mainContainer">
      <div className="leftSection">
        <h1> Welcome! I'm Kenneth!</h1>
        <h4>
          I'm currently a student at the University of Maryland studying
          Information Science. I'm a beginner in web development and am
          passionate about learning and growing in this field.
        </h4>
        <p>Click through the tabs to learn more about me.</p>
      </div>
      <div className="rightSection">
        <img src={MePicture} alt="Kenneth Picture" />
      </div>
    </div>
  );
}

export default Home;
