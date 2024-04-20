import "../Home.css";
import "../HomeResponsive.css";

// main img
import MainImg from "../homeImg/hero-img.png";

function HeaderHome() {
  return (
    <>
      <div className="hero" id="home-hero">
        <div className="hero-container">
          <div className="hero-text-title">
            <p className="new-product">NEW PRODUCT</p>
            <h1>XX99 MARK II HEADPHONES</h1>
            <p>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button>SEE PRODUCT</button>
          </div>

          <div className="hero_main_img__box">
            <img className="hero-main-img" src={MainImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderHome;