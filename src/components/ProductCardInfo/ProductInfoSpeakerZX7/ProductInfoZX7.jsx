// style
import "../ProductCardInfo.css";
// hooks
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// react router dom

// components
import CardInfo from "./CardInfoZX7";
import FeaturesSection from "./FeaturesSectionZX7";
import ProductsCard from "../../Home/MenuCard/ProductsCard";

function ProductCardInfoZX7({ cardInfo }) {
  const [productCardInfo, SetProductCardInfo] = useState([
    {
      id: uuidv4(),
      mainImg: "../CardProductInfoImg/category-img-speakers@2x.png",
      name: "ZX7 SPEAKER",
      title:
        "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
      Cash: 3500,
      features:
        "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage. The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
      includes: {
        1: "Speaker unit",
        2: "Speaker cloth panel",
        3: "User manual",
        4: "3.5mm 10m audio cable",
        5: "7.5m optical cable",
      },
      galeryImg: {
        1: "./CardProductInfoImg/image-gallery-yx9-1.jpg",
        2: "./CardProductInfoImg/image-gallery-yx9-2.jpg",
        3: "./CardProductInfoImg/image-gallery-yx9-3.jpg",
      },
    },
  ]);

  const [PurchaseAmount, SetPurchaseAmount] = useState(1);

  function productPrice() {
    productCardInfo.map((productInfo) => {
      let obj = {
        id: 1,
        1: {
          img: productInfo.mainImg,
          name: productInfo.name,
          total: PurchaseAmount,
        },
        price: productInfo.Cash * PurchaseAmount,
      };
      cardInfo(obj);
    });
  }

  return (
    <div className="ProductCardInfo">
      <div className="ProductCardInfo-container">
        <CardInfo
          productPrice={productPrice}
          productCardInfo={productCardInfo}
          SetPurchaseAmount={SetPurchaseAmount}
          PurchaseAmount={PurchaseAmount}
        />
        <FeaturesSection productCardInfo={productCardInfo} />
        <ProductsCard />
      </div>
    </div>
  );
}

export default ProductCardInfoZX7;
