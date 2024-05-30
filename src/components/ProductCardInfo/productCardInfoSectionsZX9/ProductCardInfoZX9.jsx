// style
import "../ProductCardInfo.css";
// hooks
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// components
import CardInfo from "./CardInfo";
import FeaturesSection from "./FeaturesSection";
import ProductsCard from "../../MenuCard/ProductsCard";
import ShopAbout from "../../audioSpicersAbout/ShopAbout";

// images
import productImg from "../CardProductInfoImg/image-productZX9.jpg";

function ProductCardInfoZX9({ cardInfo }) {
  const productCardInfo = [
    {
      id: uuidv4(),
      mainImg: "../CardProductInfoImg/category-img-speakers@2x.png",
      name: "ZX9 SPEAKER",
      title:
        "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      Cash: 4500,
      newProduct: "new product",
      features:
        "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m). Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms",
      includes: {
        1: "Speaker unit",
        2: "Speaker cloth panel",
        3: "User manual",
        4: "3.5mm 10m audio cable",
        5: "10m optical cable",
      },
      galeryImg: {
        1: "./CardProductInfoImg/image-gallery-yx9-1.jpg",
        2: "./CardProductInfoImg/image-gallery-yx9-2.jpg",
        3: "./CardProductInfoImg/image-gallery-yx9-3.jpg",
      },
    },
  ];

  const [PurchaseAmount, SetPurchaseAmount] = useState(1);

  function productPrice() {
    productCardInfo.map((productInfo) => {
      let obj = {
        id: 1,
        img: productImg,
        name: productInfo.name,
        total: PurchaseAmount,
        price: productInfo.Cash * PurchaseAmount,
      };
      cardInfo(obj, obj.price);
    });
  }

  return (
    <div className="ProductCardInfo">
      <div className="ProductCardInfo-container">
        <CardInfo
          productCardInfo={productCardInfo}
          PurchaseAmount={PurchaseAmount}
          productPrice={productPrice}
          SetPurchaseAmount={SetPurchaseAmount}
        />
        <FeaturesSection productCardInfo={productCardInfo} />
        <ProductsCard />
        <ShopAbout />
      </div>
    </div>
  );
}

export default ProductCardInfoZX9;
