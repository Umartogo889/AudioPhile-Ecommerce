// style;
import "./ShopAbout.css";
import Photo from "../Home/homeImg/image-best-gear.eec6124f.jpg";

function ShopAbout() {
  return (
    <div className="Container">
      <div className="ShopAbout">
        <div className="ShopAbout_text_Title">
          <h2>
            BRINGING YOU THE <span> BEST</span> AUDIO GEAR
          </h2>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="ShopAboutImg">
          <img src={Photo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ShopAbout;
