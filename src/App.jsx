// style
import "./App.css";
import "./responsive.css";
// Components
import HeaderHero from "./components/Home/HeaderHero/HeaderHero";
import Navbar from "./components/Home/navbar/Navbar";
import ProductsCard from "./components/productsCard/ProductsCard";
import AudioSpeaker from "./components/Home/audioSpicersAbout/AudioSpeaker";
import Footer from "./components/Home/footer/Footer";

function App() {
  return (
    <>
      <div className="Container">
        <Navbar />
        <HeaderHero />
        <div className="all-items">
          <div className="Home">
            <ProductsCard />
            {/* <AudioSpeaker /> */}
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
}

export default App;
