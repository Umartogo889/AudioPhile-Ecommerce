// style
import "../Headphone.css";

// main img
import MainImg from "../HeadPhoneImg/image-category-page-preview-xx99.jpg";

// create react dom
import { Link } from "react-router-dom";

function XX99Headphones() {
  return (
    <div className="Category_Product_revorse ">
      <div className="CategoryProduct_text_block false_p">
        <h3>XX99 MARK I HEADPHONES</h3>
        <p>
          As the gold standard for headphones, the classic XX99 Mark I offers
          detailed and accurate audio reproduction for audiophiles, mixing
          engineers, and music aficionados alike in studios and on the go.
        </p>
        <Link to={"/cardInfo-xx99-headphones"}>SEE PRODUCT</Link>
      </div>
      <div className="CategoryProduct_img">
        <img src={MainImg} alt="" />
      </div>
    </div>
  );
}

export default XX99Headphones;
