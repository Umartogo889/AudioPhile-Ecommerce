// hooks
import { useState } from "react";

// react router dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";
import ShopAbout from "./components/AudioSpicersAbout/ShopAbout";
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

function App() {
  const [OrdersBasket, SetOrdersBasket] = useState([]);

  // register order cilient
  const getItem = JSON.parse(localStorage.getItem("card"));

  function cardInfo(card, id) {
    SetOrdersBasket((prev) => {
      return [...prev, card];
    });

    const filterCard = getItem.filter((element) => {
      return element.id !== id;
    });

    console.log(filterCard);

    localStorage.setItem("card", JSON.stringify(OrdersBasket));
  }

  // loader
  const [openLoader, SetopenLoader] = useState(true);

  setTimeout(() => {
    SetopenLoader(false);
  }, 1700);

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
          <div className="all-items">
            <Routes>
              <Route index element={<Home />} />
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
                element={<ProductCardInfoYX1 />}
              />
              <Route
                path="/cardInfo-xx59-headphones"
                element={<ProductCardInfoXX59 />}
              />
              <Route
                path="/cardInfo-xx99-headphones"
                element={<ProductCardInfoXX99 />}
              />
              <Route
                path="/cardInfo-xx992-headphones"
                element={<ProductCardInfoXX992 />}
              />
              <Route path="/checkout-section" element={<Checkout />} />
            </Routes>
            <ShopAbout />
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
