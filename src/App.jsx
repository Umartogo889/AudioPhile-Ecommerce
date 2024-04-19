// style
import "./App.css";
import "../src/responsive.css";

// react router dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import HeaderHero from "./components/Home/HeaderHero/HeaderHero";
import Navbar from "./components/Home/navbar/Navbar";
import ShopAbout from "./components/audioSpicersAbout/ShopAbout";
import Footer from "./components/Home/footer/Footer";
import Home from "./components/Home/Home";
import Headphone from "./components/HeadPhones/Headphone";

function App() {
  return (
    <>
      <div className="Container">
        <HeaderHero />
        <BrowserRouter>
          <Navbar />
          <div className="all-items">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/headphones" element={<Headphone />} />
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
