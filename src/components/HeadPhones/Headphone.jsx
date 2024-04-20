import "./Headphone.css";
import "./HeadphoneResponsive.css";

// components

import XX59Headphones from "./CategoryProduct/XX59Headphones";
import ProductsCard from "../Home/MenuCard/ProductsCard";
import XX99Headphones from "./CategoryProduct/XX99Headphones";
import XX992Headphone from "./CategoryProduct/XX992Headphone";
import HeaderHeadphones from "../Home/HeaderHero/HeaderHeadphones";

function Headphone() {
  return (
    <div className="Container">
      <HeaderHeadphones />
      <div className="headphone">
        <XX59Headphones />
        <XX99Headphones />
        <XX992Headphone />
        <ProductsCard />
      </div>
    </div>
  );
}

export default Headphone;
