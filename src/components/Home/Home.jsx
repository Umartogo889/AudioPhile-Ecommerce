// components
import ProductsCard from "./MenuCard/ProductsCard";
import Zx9Speaker from "./HeadphonesCards/Zx9Speaker";
import ZX7Speaker from "./HeadphonesCards/ZX7Speaker";
import YX1Earphones from "./HeadphonesCards/YX1Earphones";

function Home() {
  return (
    <div className="Home">
      <ProductsCard />
      <Zx9Speaker />
      <ZX7Speaker />
      <YX1Earphones />
    </div>
  );
}

export default Home;
