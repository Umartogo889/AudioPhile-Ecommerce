// style
import "../Home.css";
import "../HomeResponsive.css";
import "./HeaderHero.css";
// react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import HeaderHome from "../HeaderHero/HeaderHome";
import HeaderSpeakers from "../HeaderHero/HeaderSpeakers";
import HeaderEarphones from "./HeaderEarphones";
import HeaderHeadphones from "./HeaderHeadphones";

function HeaderHero() {
  return (
    <>
      {
        <div className="hero">
          <div className="hero-container">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<HeaderHome />} />
                <Route path="/headphones" element={<HeaderHeadphones />} />
                <Route path="/speakers" element={<HeaderSpeakers />} />
                <Route path="/earphones" element={<HeaderEarphones />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      }
    </>
  );
}

export default HeaderHero;
