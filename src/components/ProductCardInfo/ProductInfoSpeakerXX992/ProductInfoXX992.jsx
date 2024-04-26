// style
import "../ProductCardInfo.css";
// hooks
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// react router dom

// components
import CardInfo from "./CardInfoXX992";
import FeaturesSection from "./FeaturesSectionXX99";
import ProductsCard from "../../Home/MenuCard/ProductsCard";

function ProductCardInfoZX7() {
  const [productCardInfo, SetProductCardInfo] = useState([
    {
      id: uuidv4(),
      mainImg: "../CardProductInfoImg/category-img-speakers@2x.png",
      name: "XX99 MARK I HEADPHONES",
      title:
        "  As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      Cash: 1750,

      features:
        "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector.",
      includes: {
        1: "Headphone unit",
        2: "Replacement earcups",
        3: "User manual",
        4: "3.5mm 5m audio cable",
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
