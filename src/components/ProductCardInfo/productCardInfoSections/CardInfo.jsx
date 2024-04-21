import mainImg from "../CardProductInfoImg/category-img-speakers@2x.png";
function CardInfo({ productCardInfo }) {
  return (
    <>
      {productCardInfo.map((cardInfo) => {
        {
          console.log(cardInfo.mainImg);
        }
        return (
          <>
            <div className="Product-info" key={cardInfo.id}>
              <div className="product-img">
                <img width={200} src={cardInfo.mainImg} alt="" />
              </div>
              <div className="product-info-text">
                <h2>{cardInfo.name}</h2>
                <p>{cardInfo.title}</p>
                <span>${cardInfo.Cash}</span>
                <div className="product-buttons">
                  <div className="quantity-section">
                    <button className="quantity-button">+</button>
                    <h3>1</h3>
                    <button className="quantity-button">-</button>
                  </div>
                  <button type="button" className="product-card-info-main-btn">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default CardInfo;
