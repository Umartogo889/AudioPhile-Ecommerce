// style
import "../Headphone.css";

// main img
import MainImg from "../HeadPhoneImg/image-category-page-preview-xx99.jpg";


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
        <a href={"/cardInfo-xx99-headphones"}>SEE PRODUCT</a>
      </div>
      <div className="CategoryProduct_img">
        <img src={MainImg} alt="" />
      </div>
    </div>
  );
}

export default XX99Headphones;
