import MainImg from "../speakersImg/image-category-page-preview-Z7X.jpg";

function Z7XProduct() {
  return (
    <div className="Category_Product">
      <div className="CategoryProduct_img">
        <img src={MainImg} alt="" />
      </div>
      <div className="CategoryProduct_text_block">
        <h3>ZX7 SPEAKER</h3>
        <p>
          Stream high quality sound wirelessly with minimal to no loss. The ZX7
          speaker uses high-end audiophile components that represents the top of
          the line powered speakers for home or studio use.
        </p>
        <a href={"/cardInfo-zx7-speaker"}>SEE PRODUCT</a>
      </div>
    </div>
  );
}

export default Z7XProduct;
