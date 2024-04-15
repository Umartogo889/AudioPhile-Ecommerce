import "./ProductsCard.css";

function ProductsCard() {
  const ProductsCard = [
    { Img: "./img/category-img-headphones.png", name: "HEADPHONES" },
    { Img: "./img/category-img-speakers.png", name: "SPEAKERS" },
    { Img: "./img/category-img-earphones.png", name: "EARPHONES" },
  ];

  return (
    <div className="Container">
      <div className="ProductsCard">
        {ProductsCard.map((card) => {
          return (
            <>
              <div className="menu-card">
                <div className="menu_card_Image">
                  <img
                    className="menu-card-img"
                    src={card.Img}
                    alt={card.name}
                  />
                </div>
                <div className="menu_card_text-Title">
                  <h3>{card.name}</h3>
                  <p>
                    SHOP <img src="./img/arrow-right-primary.svg" alt="" />
                  </p>
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
