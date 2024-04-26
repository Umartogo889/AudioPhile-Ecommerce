// style
import "./App.css";
import "../src/responsive.css";

// react router dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components

import Navbar from "./components/Home/navbar/Navbar";
import ShopAbout from "./components/audioSpicersAbout/ShopAbout";
import Footer from "./components/Home/footer/Footer";
import Home from "./components/Home/Home";
import Headphone from "./components/HeadPhones/Headphone";
import Speakers from "./components/Speakers/Speakers";
import Earphones from "./components/Earphones/Earphones";
import ProductCardInfoZX9 from "./components/ProductCardInfo/productCardInfoSections/ProductCardInfoZX9";

function App() {
  return (
    <>
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
                element={<ProductCardInfoZX9 />}
              />
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
