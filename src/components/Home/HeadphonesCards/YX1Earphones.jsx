// style
import { Link } from "react-router-dom";
import "../Home.css";
import "../HomeResponsive.css";
import MainImg from "../homeImg/featured-product-yx1-desktop.jpg";
function YX1Earphones() {
  return (
    <div className="Container">
      <div className="YX1Earphones-container">
        <img src={MainImg} alt="" />
        <div className="YX1EarphonesInf">
          <h2>YX1 EARPHONES</h2>
          <Link to={"/cardInfo-yx1-speaker"}>
            <button>SEE PRODUCT</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default YX1Earphones;
