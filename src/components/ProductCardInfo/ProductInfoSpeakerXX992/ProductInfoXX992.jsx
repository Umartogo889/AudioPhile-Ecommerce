// style
import "../ProductCardInfo.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// images
import productImg from "../CardProductInfoImg/image-product-xx992.jpg";
// components
import CardInfo from "./CardInfoXX992";
import FeaturesSection from "./FeaturesSectionXX992";
import ProductsCard from "../../MenuCard/ProductsCard";
import ShopAbout from "../../audioSpicersAbout/ShopAbout"

function ProductCardInfoZX7({ cardInfo }) {
  const productCardInfo = [
    {
      id: uuidv4(),
      mainImg: "../CardProductInfoImg/category-img-speakers@2x.png",
      name: "XX99 MARK II HEADPHONES",
      title:
        "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      Cash: 2999,
      newProduct: "new product",
      features:
        "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat. The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
      includes: {
        1: "Headphone unit",
        2: "Replacement earcups",
        3: "User manual",
        4: "3.5mm 5m audio cable",
        5: "Travel bag",
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
        name: "XX99 MARK II ",
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

export default ProductCardInfoZX7;
