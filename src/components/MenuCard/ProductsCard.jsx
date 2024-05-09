// style
import "./ProductsCard.css";

import { Link } from "react-router-dom";

// photo
import rightIcon from "./menuImg/icon-arrow-right.08d4cd77.svg";
import earphones from "./menuImg/earphones-category.png";
import headphones from "./menuImg/headphones.png";
import speakers from "./menuImg/speakers.png";

const cardInfo = [
  { name: "HEADPHONES", img: headphones, link: "/headphones" },
  { name: "SPEAKERS", img: speakers, link: "/speakers" },
  { name: "EARPHONES", img: earphones, link: "/earphones" },
];
function ProductsCard({ SetShowMenu }) {
  return (
    <div className="ProductsCard-Container">
      <div className="ProductsCard">
        {cardInfo.map((info) => {
          return (
            <>
              <div className="menu-card">
                <div className="menu_card_Image">
                  <img
                    className="menu-card-img"
                    src={info.img}
                    style={{ width: "95px" }}
                  />
                </div>
                <div className="menu_card_text-Title">
                  <Link to={info.link}>
                    <h3>{info.name}</h3>
                    <p>
                      SHOP
                      <img src={rightIcon} alt="" />
                    </p>
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default ProductsCard;
