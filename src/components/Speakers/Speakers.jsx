import "./Speakers.css";
import "./SpeakersResponsive.css";
// components
import HeaderSpeakers from "../Home/HeaderHero/HeaderSpeakers";
import ProductsCard from "../Home/MenuCard/ProductsCard";
import Z7XProduct from "./speakersProduct/Z7XProduct";
import ZX9Product from "./speakersProduct/ZX9Product";

function Speakers() {
  return (
    <div className="Container">
      <HeaderSpeakers />
      <div className="speakers">
        <Z7XProduct />
        <ZX9Product />
        <ProductsCard />
      </div>
    </div>
  );
}

export default Speakers;
