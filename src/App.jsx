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

function App() {
  return (
    <>
      <div className="Container">
        <BrowserRouter>
          <Navbar />
          <div className="all-items">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/headphones" element={<Headphone />} />
              <Route path="/speakers" element={<Speakers />} />
              <Route path="/earphones" element={<Earphones />} />
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
