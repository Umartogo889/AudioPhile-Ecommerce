// style
import "./Earphones.css";
import "./EarphonesResponsive.css";

// components
import HeaderEarphones from "../Home/HeaderHero/HeaderEarphones";
import ProductsCard from "../Home/MenuCard/ProductsCard";
import YX1Product from "./EarphonesProduct/YX1Product";

function Earphones() {
  return (
    <div className="Container">
      <HeaderEarphones />
      <div className="Earphones">
        <YX1Product />
        <ProductsCard />
      </div>
    </div>
  );
}

export default Earphones;
