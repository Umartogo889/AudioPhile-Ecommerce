import "./Checkout.css";

// photo
import cashImg from "../checkout/img/icon-cash-payment.svg";
// hooks
import { useState } from "react";

function Checkout() {
  const [cashOpen, SetOpenash] = useState(true);
  const getLocalOrder = JSON.parse(localStorage.getItem("card"));
  return (
    <div className="main-container-wrapper">
      <div className="main-container">
        <div className="checkout-wrapper">
          <h3 className="Checkout__text">CHECKOUT</h3>
          {/* billing__details */}
          <section className="billing__details">
            <h4>BILLING DETAILS</h4>

            <form action="" className="billing__details__form">
              <label>
                <span>Name</span>
                <input type="text" placeholder="Alexei Ward" required />
              </label>
              <label>
                <span>Email Adress</span>
                <input type="email" placeholder="alexei@mail.com" required />
              </label>
              <label>
                <span>Number </span>
                <input type="text" placeholder="+1 202-555-0136" required />
              </label>
            </form>
          </section>
          {/* shipping__info  */}
          <section className="shipping__info">
            <h4>SHIPPING INFO</h4>
            <form action="" className="shipping__info__form">
              <label>
                <span>Address</span>
                <input
                  type="text"
                  placeholder="1137 Williams Avenue"
                  required
                  className="adress_input"
                />
              </label>
              <label>
                <span>ZIP Code</span>
                <input type="text" placeholder="10001" required />
              </label>
              <label>
                <span>City</span>
                <input type="text" placeholder="NEW York" required />
              </label>
              <label>
                <span>City</span>
                <input type="text" placeholder="United States" required />
              </label>
            </form>
          </section>
          {/* payment details  */}
          <section className="payment__details">
            <h2 className="form-details-title">Payment Details</h2>
            <div className="form-details-inputs">
              <h4 className="form-input-label">Payment Method</h4>
              <form className="form__radio_input">
                <label tabIndex="0" className="radio-input-container">
                  <input
                    name="pay"
                    type="radio"
                    id="pay"
                    value="cash"
                    checked=""
                    onClick={() => SetOpenash(true)}
                  />
                  Cash on Delivery
                </label>
                <label tabIndex="0" className="radio-input-container">
                  <input
                    name="pay"
                    type="radio"
                    id="pay"
                    value="e-money"
                    onClick={() => SetOpenash(false)}
                  />
                  e-Money
                </label>
              </form>
            </div>
            <div className="cash-section">
              {cashOpen && (
                <div className="cash-delivary">
                  <img src={cashImg} alt="cashImg" />
                  <p>
                    The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </p>
                </div>
              )}
              {!cashOpen && (
                <div className="e-money">
                  <input
                    name="eMoneyPin"
                    className="form-input-element"
                    id="eMoneyPin"
                    placeholder="6891"
                    required
                  />
                  <input
                    name="eMoneyNumber"
                    className="form-input-element"
                    id="eMoneyNumber"
                    placeholder="238521993"
                    required
                  />
                </div>
              )}
            </div>
          </section>
        </div>
        <div className="checkout-product">
          <h2 className="checkout-product-title">Summary</h2>
          <div className="checkout-product-container">
            <p className="text-default card-order-title ">
              <ul>
              
                {getLocalOrder.length === 0 ? (
                  <h1 className="No-product">your card is empty :(</h1>
                ) : (
                  getLocalOrder.map((card) => {
                    console.log(card.id);
                    return (
                      <>
                        <li className="cardlist">
                          <div className="product-list-info">
                            <div className="card-list-img-box">
                              <img
                                src={card.img}
                                alt=""
                                className="cardlist__img"
                              />
                            </div>
                            <div className="list-text-block">
                              <div className="product-name">
                                <h4>{card.name}</h4>
                              </div>
                              <div className="text-default  product-price">
                                ${card.price}
                              </div>
                            </div>
                          </div>

                          <div className="text-default product-list-quantity">
                            x{card.total}
                          </div>
                        </li>
                      </>
                    );
                  })
                )}
              </ul>
            </p>
          </div>
          <div className="checkout-product-prices">
            <p className="text-default  checkout-product-prices-item">
              Total<span className="checkout-product-prices-item-span">$0</span>
            </p>
            <p className="text-default  checkout-product-prices-item">
              Shipping
              <span className="checkout-product-prices-item-span">$50</span>
            </p>
            <p className="text-default  checkout-product-prices-item">
              Vat (Included)
              <span className="checkout-product-prices-item-span">$0</span>
            </p>
            <p className="text-default  checkout-product-prices-item">
              Grand Total
              <span className="checkout-product-prices-item-span">$0</span>
            </p>
          </div>
          <button
            type="submit"
            className="btn-styles btn-default checkout-button"
            disabled=""
          >
            Continue and Pay
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
