// style
import "./ProductsCard.css";

import { Link } from "react-router-dom";

// photo
import rightIcon from "./menuImg/icon-arrow-right.08d4cd77.svg";
import img1 from "./menuImg/1.png";
import img2 from "./menuImg/2.png";
import img3 from "./menuImg/3.png";

function ProductsCard({ SetShowMenu }) {
  return (
    <div className="ProductsCard-Container">
      <div className="ProductsCard">
        <div className="menu-card">
          <div className="menu_card_Image">
            <img
              className="menu-card-img"
              src={img2}
              style={{ width: "95px" }}
            />
          </div>
          <div className="menu_card_text-Title">
            <Link to="/headphones" onClick={() => SetShowMenu(false)}>
              <h3>HEADPHONES</h3>
              <p>
                SHOP
                <img src={rightIcon} alt="" />
              </p>
            </Link>
          </div>
        </div>
        <div className="menu-card">
          <div className="menu_card_Image">
            <img
              className="menu-card-img"
              src={img3}
              style={{ width: "95px" }}
            />
          </div>
          <div className="menu_card_text-Title">
            <Link to="/speakers" onClick={() => SetShowMenu(false)}>
              <h3>SPEAKERS</h3>
              <p>
                SHOP
                <img src={rightIcon} alt="" />
              </p>
            </Link>
          </div>
        </div>
        <div className="menu-card">
          <div className="menu_card_Image">
            <img
              className="menu-card-img"
              src={img1}
              style={{ width: "95px" }}
            />
          </div>
          <div className="menu_card_text-Title">
            <Link to="/earphones" onClick={() => SetShowMenu(false)}>
              <h3>EARPHONES</h3>
              <p>
                SHOP
                <img src={rightIcon} alt="" />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsCard;
