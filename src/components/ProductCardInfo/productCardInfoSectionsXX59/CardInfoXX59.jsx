import mainImg from "../CardProductInfoImg/image-category-page-preview.jpg";

function CardInfoXX59({
  productCardInfo,
  SetPurchaseAmount,
  PurchaseAmount,
  productPrice,
}) {
  const sendOrder = (quality) => {
    productPrice();
  };

  return (
    <>
      {productCardInfo.map((cardInfo) => {
        return (
          <>
            <div className="Product-info" key={cardInfo.id}>
              <div className="product-img">
                <img className="XX59-img" width={200} src={mainImg} alt="" />
              </div>
              <div className="product-info-text">
                <p
                  style={{ color: "var(--color-brown)" }}
                  className="new-product"
                >
                  {cardInfo.newProduct}
                </p>
                <h2>{cardInfo.name}</h2>
                <p>{cardInfo.title}</p>
                <span className="product-price">$ {cardInfo.Cash}</span>
                <div className="product-buttons">
                  <div className="quantity-section">
                    <button
                      className="quantity-button"
                      onClick={() =>
                        SetPurchaseAmount(
                          PurchaseAmount <= 0 ? 0 : PurchaseAmount - 1
                        )
                      }
                    >
                      -
                    </button>
                    <h3
                      onChange={(e) => {
                        e.target.value;
                      }}
                    >
                      {PurchaseAmount}
                    </h3>
                    <button
                      className="quantity-button"
                      onClick={() => SetPurchaseAmount(PurchaseAmount + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={sendOrder}
                    className="product-card-info-main-btn"
                  >
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

export default CardInfoXX59;
