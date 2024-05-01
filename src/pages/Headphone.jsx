import "../components/HeadPhones/Headphone.css";
import "../components/HeadPhones/HeadphoneResponsive.css";

// components

import XX59Headphones from "../components/HeadPhones/CategoryProduct/XX59Headphones";
import ProductsCard from "../components/MenuCard/ProductsCard";
import XX99Headphones from "../components/HeadPhones/CategoryProduct/XX99Headphones";
import XX992Headphone from "../components/HeadPhones/CategoryProduct/XX992Headphone";
import HeaderHeadphones from "../components/HeaderHero/HeaderHeadphones";

function Headphone({ SetopenLoader }) {
  setTimeout(() => {
    SetopenLoader(false);
  }, 2500);

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
