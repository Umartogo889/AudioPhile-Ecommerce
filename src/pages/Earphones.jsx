// style
import "../components/Earphones/Earphones.css";
import "../components/Earphones/EarphonesResponsive.css";

// components
import HeaderEarphones from "../components/HeaderHero/HeaderEarphones";
import ProductsCard from "../components/MenuCard/ProductsCard";
import YX1Product from "../components/Earphones/EarphonesProduct/YX1Product";
import ShopAbout from "../components/AudioSpicersAbout/ShopAbout";

function Earphones() {
  return (
    <div className="Container">
      <HeaderEarphones />
      <div className="Earphones">
        <YX1Product />
        <ProductsCard />
        <ShopAbout />
      </div>
    </div>
  );
}

export default Earphones;
