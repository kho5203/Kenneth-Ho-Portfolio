import "./Hobbies.css";
import basketball from "./HobbiesBasketball.gif";
import drawing from "./HobbiesDrawing.gif";
import cooking from "./HobbiesCooking.gif";
import muayThai from "./HobbiesMuayThai.gif";

function Hobbies() {
  return (
    <div>
      <h1 id="enjoy"> I enjoy</h1>
      <div className="down-arrow"></div>
      <div className="main">
        <div className="boxOne">
          <div className="boxOneLeft">
            <button
              className="cookingButton"
              onClick={() =>
                window.open(
                  "https://www.recipetineats.com/vietnamese-pho-recipe/",
                  "_blank"
                )
              }
            >
              Cooking
            </button>
            <img src={cooking} alt="cooking" />
          </div>
          <div className="boxOneRight">
            <button
              className="basketballButton"
              onClick={() =>
                window.open(
                  "https://www.breakthroughbasketball.com/basics/basics.html",
                  "_blank"
                )
              }
            >
              Basketball
            </button>
            <img src={basketball} alt="basketball" />
          </div>
        </div>
        <div className="boxTwo">
          <div className="boxTwoLeft">
            <button
              className="drawingButton"
              onClick={() =>
                window.open("https://easydrawingguides.com/", "_blank")
              }
            >
              <svg
                width="180px"
                height="60px"
                viewBox="0 0 180 60"
                className="border"
              >
                <polyline
                  points="179,1 179,59 1,59 1,1 179,1"
                  className="bg-line"
                />
                <polyline
                  points="179,1 179,59 1,59 1,1 179,1"
                  className="hl-line"
                />
              </svg>
              <span>Drawing</span>
            </button>
            <img src={drawing} alt="drawing" />
          </div>
          <div className="boxTwoRight">
            <button
              className="muayThaiButton"
              onClick={() =>
                window.open(
                  "https://evolve-mma.com/blog/the-complete-muay-thai-beginners-guide/",
                  "_blank"
                )
              }
            >
              Muay Thai
            </button>
            <img src={muayThai} alt="muayThai" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
