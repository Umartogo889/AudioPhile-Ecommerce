// style
import "./App.css";
import "../src/responsive.css";
// hooks
import { useState } from "react";

// Components
import HeaderHero from "./components/Home/HeaderHero/HeaderHero";
import Navbar from "./components/Home/navbar/Navbar";
import ProductsCard from "./components/Home/MenuCard/ProductsCard";
import ShopAbout from "./components/audioSpicersAbout/ShopAbout";
import Zx9Speaker from "./components/Home/HeadphonesCards/Zx9Speaker";
import ZX7Speaker from "./components/Home/HeadphonesCards/ZX7Speaker";
import Footer from "./components/Home/footer/Footer";
import YX1Earphones from "./components/Home/HeadphonesCards/YX1Earphones";

function App() {
  const [ShowHome, SetHomeShow] = useState(true);
  const [ShowHeadphones, SetShowHeadphones] = useState(true);
  const [ShowSpeakers, SetShowSpeakers] = useState(true);
  const [ShowEarphones, SetShowEarphones] = useState(true);

  function ShowHomeCom() {
    SetHomeShow(true);
    SetShowHeadphones(false);
    SetShowSpeakers(false);
    SetShowEarphones(false);
  }

  function ShowHeadphonesCom() {
    SetHomeShow(false);
    SetShowHeadphones(true);
    SetShowSpeakers(false);
    SetShowEarphones(false);
  }

  function ShowSpeakersCom() {
    SetHomeShow(false);
    SetShowHeadphones(false);
    SetShowSpeakers(true);
    SetShowEarphones(false);
  }

  function ShowEarphonesCom() {
    SetHomeShow(false);
    SetShowHeadphones(false);
    SetShowSpeakers(false);
    SetShowEarphones(true);
  }
  return (
    <>
      <div className="Container">
        <Navbar
          ShowHomeCom={ShowHomeCom}
          ShowHeadphonesCom={ShowHeadphonesCom}
          ShowSpeakersCom={ShowSpeakersCom}
          ShowEarphonesCom={ShowEarphonesCom}
        />
        <HeaderHero>
          <h1>Hello world</h1>
        </HeaderHero>
        <div className="all-items">
          {ShowHome && (
            <div className="Home">
              <ProductsCard />
              <Zx9Speaker />
              <ZX7Speaker />
              <YX1Earphones />
            </div>
          )}
          {ShowHeadphones && <div className="Headphones"></div>}
          {ShowSpeakers && <div className="Speakers"></div>}
          {ShowEarphones && <div className="Earphones"></div>}
          <ShopAbout />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
