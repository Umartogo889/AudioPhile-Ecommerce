// components
import ProductsCard from "../components/MenuCard/ProductsCard";
import Zx9Speaker from "../components/HeadphonesCards/Zx9Speaker";
import ZX7Speaker from "../components/HeadphonesCards/ZX7Speaker";
import YX1Earphones from "../components/HeadphonesCards/YX1Earphones";
import HeaderHome from "../components/HeaderHero/HeaderHome";
import ShopAbout from "../components/AudioSpicersAbout/ShopAbout";
function Home() {
  return (
    <div className="Home">
      <HeaderHome />
      <ProductsCard />
      <Zx9Speaker />
      <ZX7Speaker />
      <YX1Earphones />
      <ShopAbout />
    </div>
  );
}

export default Home;
