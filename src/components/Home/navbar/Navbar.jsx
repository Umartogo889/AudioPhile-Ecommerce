// style
import "../Home.css";
import "../HomeResponsive.css";
// hooks
import { useState } from "react";

// react router dom
import { NavLink } from "react-router-dom";

// Component
import ProductsCard from "../MenuCard/ProductsCard";

// img hamburger
import Logo from "../homeImg/logo.svg";
import HamburgerIcon from "../homeImg/icon-hamburger-menu.svg";

function Navbar() {
  const [ShowMenu, SetShowMenu] = useState(false);
  const [ShowChecOut, SetShowChecOut] = useState(false);

  if (ShowChecOut || ShowMenu) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }

  function CloseMenu(e) {
    if (e.target.className === "backdrop-bg") {
      SetShowMenu(false);
      SetShowChecOut(false);
    }
  }

  return (
    <>
      <div className="Navbar">
        <div className="nav-container">
          <div
            onClick={CloseMenu}
            className={!ShowMenu ? "Rembg" : "backdrop-bg"}
          >
            <div className={ShowMenu ? "showMenu" : "topMenu"}>
              <div className="Product-card_scrool">
                <ProductsCard SetShowMenu={SetShowMenu} />
              </div>
            </div>
          </div>

          <div
            onClick={CloseMenu}
            className={
              !ShowChecOut ? "Rembg" : "backdrop-bg , Container ,showOut"
            }
          >
            <div className="ShowChecOut-container">
              {ShowChecOut && (
                <div className="ShowChecOut">
                  <div className="ShowChecOut-textBlock">
                    <div className="card-header">
                      <h3>CART (0)</h3>
                      <a href="#">Remove all</a>
                    </div>
                    <div className="card-list">
                      <h1>no Rells</h1>
                    </div>
                    <div className="card-footer">
                      <h3 style={{ color: "#10101080" }}>TOTAL</h3>
                      <h3>$0</h3>
                    </div>
                    <button> CHEKOUT</button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div
            className="nav-menu"
            onClick={() => SetShowMenu(ShowMenu ? false : true)}
          >
            <img src={HamburgerIcon} alt="" />
          </div>
          <div className="nav-logo">
            <img src={Logo} alt="" />
          </div>
          <ul className="nav-list">
            <li className="list-item">
              <NavLink className="nav-link" to="/">
                HOME
              </NavLink>
            </li>
            <li className="list-item">
              <NavLink className="nav-link" to="/headphones">
                HEADPHONES
              </NavLink>
            </li>
            <li className="list-item">
              <NavLink className="nav-link" to="/speakers">
                SPEAKERS
              </NavLink>
            </li>
            <li className="list-item">
              <NavLink className="nav-link" to="/earphones">
                EARPHONES
              </NavLink>
            </li>
          </ul>

          <svg
            onClick={() => SetShowChecOut(ShowChecOut ? false : true)}
            className="nav-icon"
            width="23px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3H3.21922L6.78345 17.2569C5.73276 17.7236 5 18.7762 5 20C5 21.6569 6.34315 23 8 23C9.65685 23 11 21.6569 11 20C11 19.6494 10.9398 19.3128 10.8293 19H15.1707C15.0602 19.3128 15 19.6494 15 20C15 21.6569 16.3431 23 18 23C19.6569 23 21 21.6569 21 20C21 18.3431 19.6569 17 18 17H8.78078L8.28078 15H18C20.0642 15 21.3019 13.6959 21.9887 12.2559C22.6599 10.8487 22.8935 9.16692 22.975 7.94368C23.0884 6.24014 21.6803 5 20.1211 5H5.78078L5.15951 2.51493C4.93692 1.62459 4.13696 1 3.21922 1H2ZM18 13H7.78078L6.28078 7H20.1211C20.6742 7 21.0063 7.40675 20.9794 7.81078C20.9034 8.9522 20.6906 10.3318 20.1836 11.3949C19.6922 12.4251 19.0201 13 18 13ZM18 20.9938C17.4511 20.9938 17.0062 20.5489 17.0062 20C17.0062 19.4511 17.4511 19.0062 18 19.0062C18.5489 19.0062 18.9938 19.4511 18.9938 20C18.9938 20.5489 18.5489 20.9938 18 20.9938ZM7.00617 20C7.00617 20.5489 7.45112 20.9938 8 20.9938C8.54888 20.9938 8.99383 20.5489 8.99383 20C8.99383 19.4511 8.54888 19.0062 8 19.0062C7.45112 19.0062 7.00617 19.4511 7.00617 20Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Navbar;
