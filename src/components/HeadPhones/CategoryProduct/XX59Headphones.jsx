import "../Headphone.css";

// main img
import MainImg from "../HeadPhoneImg/image-category-page-preview.jpg";

function XX59Headphones() {
  return (
    <div className="Category_Product">
      <div className="CategoryProduct_img">
        <img src={MainImg} alt="" />
      </div>
      <div className="CategoryProduct_text_block">
        <h3>XX59 HEADPHONES</h3>
        <p>
          Enjoy your audio almost anywhere and customize it to your specific
          tastes with the XX59 headphones. The stylish yet durable versatile
          wireless headset is a brilliant companion at home or on the move.
        </p>
        <button>SEE PRODUCT</button>
      </div>
    </div>
  );
}

export default XX59Headphones;
