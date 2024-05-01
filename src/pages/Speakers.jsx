import "../components/Speakers/Speakers.css";
import "../components/Speakers/SpeakersResponsive.css";

// components
import HeaderSpeakers from "../components//HeaderHero/HeaderSpeakers";
import ProductsCard from "../components/MenuCard/ProductsCard";
import Z7XProduct from "../components/Speakers/SpeakersProduct/Z7XProduct";
import ZX9Product from "../components/Speakers/SpeakersProduct/ZX9Product";

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
