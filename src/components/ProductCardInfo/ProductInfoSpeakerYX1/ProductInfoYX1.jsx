// style
import "../ProductCardInfo.css";
// hooks
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// react router dom

// components
import CardInfo from "./CardInfoYX1";
import FeaturesSection from "./FeaturesSectionYX1";
import ProductsCard from "../../Home/MenuCard/ProductsCard";

function ProductCardInfoZX7() {
  const [productCardInfo, SetProductCardInfo] = useState([
    {
      id: uuidv4(),
      mainImg: "../CardProductInfoImg/category-img-speakers@2x.png",
      name: "YX1 WIRELESS EARPHONES",
      newProduct: "new product",
      title:
        "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
      Cash: 599,
      features:
        "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound. The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
      includes: {
        1: "Earphone unit",
        2: "Multi-size earplugs",
        3: "User manual",
        4: "USB-C charging cable",
        5: "Travel pouch",
      },
      galeryImg: {
        1: "./CardProductInfoImg/image-gallery-yx9-1.jpg",
        2: "./CardProductInfoImg/image-gallery-yx9-2.jpg",
        3: "./CardProductInfoImg/image-gallery-yx9-3.jpg",
      },
    },
  ]);

  return (
    <div className="ProductCardInfo">
      <div className="ProductCardInfo-container">
        <CardInfo productCardInfo={productCardInfo} />
        <FeaturesSection productCardInfo={productCardInfo} />
        <ProductsCard />
      </div>
    </div>
  );
}

export default ProductCardInfoZX7;