// style
import "../ProductCardInfo.css";
// hooks
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// react router dom

// components
import CardInfo from "./CardInfoXX59";
import FeaturesSection from "./FeaturesSectionXX59";
import ProductsCard from "../../Home/MenuCard/ProductsCard";

function ProductCardInfoZX9() {
  const [productCardInfo, SetProductCardInfo] = useState([
    {
      id: uuidv4(),
      mainImg: "../CardProductInfoImg/category-img-speakers@2x.png",
      name: "XX59 HEADPHONES",
      title:
        "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      Cash: 899,
      features:
        "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos. More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
      includes: {
        1: "Headphone unit",
        2: "Replacement earcups",
        3: "User manual",
        4: "3.5mm 5m audio cable",
        5: "10m optical cable",
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

export default ProductCardInfoZX9;
