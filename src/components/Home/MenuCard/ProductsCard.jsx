// style
import "./ProductsCard.css";

import { Link } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

function ProductsCard({ SetShowMenu }) {
  const ProductsCard = [
    {
      Img: "./menuImg/category-img-headphones.png",
      name: "HEADPHONES",
      id: uuidv4(),
      adress: "/headphones",
    },
    {
      Img: "./img/category-img-speakers.png",
      name: "SPEAKERS",
      id: uuidv4(),
      adress: "/speakers",
    },
    {
      Img: "./img/category-img-earphones.png",
      name: "EARPHONES",
      id: uuidv4(),
      adress: "/earphones",
    },
  ];

  return (
    <div className="ProductsCard-Container">
      <div className="ProductsCard">
        {ProductsCard.map((card) => {
          return (
            <>
              <div className="menu-card" key={card.id}>
                <div className="menu_card_Image">
                  <img
                    className="menu-card-img"
                    src={`"${card.Img}"`}
                    alt={card.name}
                    style={{ width: "95px" }}
                    key={card.id}
                  />
                </div>
                <div className="menu_card_text-Title">
                  <Link to={card.adress} onClick={() => SetShowMenu(false)}>
                    <h3>{card.name}</h3>
                    <p>
                      SHOP{" "}
                      <img src="./menuImg/icon-arrow-right.08d4cd77.svg" alt="" />
                    </p>
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default ProductsCard;
