// style
import "../Home.css";
import MainImg from "../homeImg/category-img-speakers@2x.png";

function Zx9Speaker() {
  return (
    <div className="Container">
      <div className="Zx9Speaker">
        <div className="Zx9Speaker-img">
          <img src={MainImg} alt="category-img-speakers@2x.png" />
        </div>
        <div className="Zx9Speaker_text_block">
          <h1>ZX9 SPEAKER</h1>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <a href={"/cardInfo-zx9-speaker"}>SEE PRODUCT</a>
        </div>
      </div>
    </div>
  );
}

export default Zx9Speaker;
