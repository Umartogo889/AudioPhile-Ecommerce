import { useState } from "react";
import mainImg from "../CardProductInfoImg/image-product-zx7.jpg";

function CardInfoZX7({
  productCardInfo,
  SetPurchaseAmount,
  PurchaseAmount,
  productPrice,
}) {
  const sendOrder = (quality) => {
    productPrice();
    SetPurchaseAmount(quality);
  };
  return (
    <>
      {productCardInfo.map((cardInfo) => {
        return (
          <>
            <div className="Product-info" key={cardInfo.id}>
              <div className="product-img">
                <img className="img-Zx9" width={200} src={mainImg} alt="" />
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
                      onChange={(e) => {
                        e.target.value;
                      }}
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
                      onChange={(e) => {
                        e.target.value;
                      }}
                      className="quantity-button"
                      onClick={() => SetPurchaseAmount(PurchaseAmount + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => sendOrder(1)}
                    onChange={(e) => {
                      e.target.value;
                    }}
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

export default CardInfoZX7;
