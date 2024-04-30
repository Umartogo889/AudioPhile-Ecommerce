// style
import "../Earphones.css";
import "../EarphonesResponsive.css";

// main img
import MainImg from "../EarphonesImg/image-category-page-preview-YX1.jpg";

function YX1Product() {
  return (
    <div className="Category_Product">
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
        <h3>YX1 WIRELESS EARPHONES</h3>
        <p>
          Tailor your listening experience with bespoke dynamic drivers from the
          new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even
          in noisy environments with its active noise cancellation feature.
        </p>
        <a href={"/cardInfo-zx1-earphones"}>SEE PRODUCT</a>
      </div>
    </div>
  );
}

export default YX1Product;
