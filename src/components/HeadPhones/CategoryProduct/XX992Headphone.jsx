// style
import { Link } from "react-router-dom";
import "../Headphone.css";

// main img
import MainImg from "../HeadPhoneImg/image-category-page-preview-xx992.jpg";

function XX992Headphone() {
  return (
    <div className="Category_Product false_b">
      <div className="CategoryProduct_img">
        <img src={MainImg} alt="" />
      </div>
      <div className="CategoryProduct_text_block">
        <p
          style={{ color: "var(--color-brown)", marginBottom: "0px" }}
          className="new-product"
        >
          NEW PRODUCT
        </p>
        <h3>XX99 MARK II HEADPHONES</h3>
        <p>
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound
        </p>
        <Link to={"/cardInfo-xx992-headphones"}>SEE PRODUCT</Link>
      </div>
    </div>
  );
}

export default XX992Headphone;
