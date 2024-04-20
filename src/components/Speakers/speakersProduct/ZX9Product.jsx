import "../Speakers.css";
import "../SpeakersResponsive.css";
// site img
import MainImg from "../speakersImg/image-category-page-preview-ZX9.jpg";

function ZX9Product() {
  return (
    <div className="Category_Product_revorse ">
      <div className="CategoryProduct_text_block false_p">
        <p
          style={{ color: "var(--color-brown)", marginBottom: "0px" }}
          className="new-product"
        >
          NEW PRODUCT
        </p>
        <h3>XX99 MARK I HEADPHONES</h3>
        <p>
          As the gold standard for headphones, the classic XX99 Mark I offers
          detailed and accurate audio reproduction for audiophiles, mixing
          engineers, and music aficionados alike in studios and on the go.
        </p>
        <button>SEE PRODUCT</button>
      </div>
      <div className="CategoryProduct_img">
        <img src={MainImg} alt="" />
      </div>
    </div>
  );
}

export default ZX9Product;
