import "../components/Speakers/Speakers.css";
import "../components/Speakers/SpeakersResponsive.css";

// components
import HeaderSpeakers from "../components//HeaderHero/HeaderSpeakers";
import ProductsCard from "../components/MenuCard/ProductsCard";
import ZX7Product from "../components/Speakers/speakersProduct/Z7XProduct";
import ZX9Product from "../components/Speakers/speakersProduct/ZX9Product";
import ShopAbout from "../components/audioSpicersAbout/ShopAbout";

function Speakers() {
  return (
    <div className="Container">
      <HeaderSpeakers />
      <div className="speakers">
        <ZX7Product />
        <ZX9Product />
        <ProductsCard />
        <ShopAbout />
      </div>
    </div>
  );
}

export default Speakers;
