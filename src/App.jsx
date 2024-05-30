// hooks
import { useState } from "react";

// react router dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Headphone from "./pages/Headphone";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import ProductCardInfoZX9 from "./components/ProductCardInfo/productCardInfoSectionsZX9/ProductCardInfoZX9";
import ProductCardInfoZX7 from "./components/ProductCardInfo/ProductInfoSpeakerZX7/ProductInfoZX7";
import ProductCardInfoYX1 from "./components/ProductCardInfo/ProductInfoSpeakerYX1/ProductInfoYX1";
import ProductCardInfoXX59 from "./components/ProductCardInfo/productCardInfoSectionsXX59/ProductCardInfoXX59";
import ProductCardInfoXX99 from "./components/ProductCardInfo/ProductInfoSpeakerXX99/ProductInfoXX99";
import ProductCardInfoXX992 from "./components/ProductCardInfo/ProductInfoSpeakerXX992/ProductInfoXX992";
import Checkout from "./components/checkout/Checkout";
import ProductCardInfo from "./components/ProductCardInfo";
import ScrollToTop from "./Layout/Scrooltop/ScrollTop";

function App() {
  const [OrdersBasket, SetOrdersBasket] = useState(
    JSON.parse(localStorage.getItem("card")) || []
  );

  // set cardinfo to localstorage
  localStorage.setItem("card", JSON.stringify(OrdersBasket));

  // loader
  const [openLoader, SetopenLoader] = useState(true);

  function cardInfo(card, id, quality) {
    // change order
    const filterOrder = OrdersBasket.map((order) => {
      if (order.id === id) {
        return { ...order, total: quality };
      }
      return order;
    });

    let orderid = 0;
    OrdersBasket.forEach((order) => {
      if (order.id === id) {
        SetOrdersBasket(filterOrder);
        orderid = order.id;
      }
    });

    if (OrdersBasket.length >= 0 && orderid !== id) {
      SetOrdersBasket((prev) => {
        return [...prev, card];
      });
    }
  }

  setTimeout(() => {
    SetopenLoader(false);
  }, 2000);

  // main section
  return (
    <>
      {openLoader && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}

      <div className="Container">
        <BrowserRouter>
          <Navbar />
          <ScrollToTop />
          <div className="all-items">
            <Routes>
              <Route index exact element={<Home />} />
              <Route path="/headphones" element={<Headphone />} />
              <Route path="/speakers" element={<Speakers />} />
              <Route path="/earphones" element={<Earphones />} />
              <Route
                path="/cardInfo-zx9-speaker"
                element={<ProductCardInfoZX9 cardInfo={cardInfo} />}
              />
              <Route
                path="/cardInfo-zx7-speaker"
                element={<ProductCardInfoZX7 cardInfo={cardInfo} />}
              />
              <Route
                path="/cardInfo-zx1-earphones"
                element={<ProductCardInfoYX1 cardInfo={cardInfo} />}
              />
              <Route
                path="/cardInfo-xx59-headphones"
                element={<ProductCardInfoXX59 cardInfo={cardInfo} />}
              />
              <Route
                path="/cardInfo-xx99-headphones"
                element={<ProductCardInfoXX99 cardInfo={cardInfo} />}
              />
              <Route
                path="/cardInfo-xx992-headphones"
                element={<ProductCardInfoXX992 cardInfo={cardInfo} />}
              />
              <Route path="/checkout-section" element={<Checkout />} />
            </Routes>
          </div>
          <Footer />
          <ProductCardInfo />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
