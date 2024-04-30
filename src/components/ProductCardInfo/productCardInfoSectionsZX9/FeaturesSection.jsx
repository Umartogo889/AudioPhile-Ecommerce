function FeaturesSection({ productCardInfo }) {
  return (
    <>
      {productCardInfo.map((cardInfoFeature) => {
        return (
          <>
            <div className="features-section" key={cardInfoFeature.name}>
              <div className="features-text">
                <h2>FEATURES</h2>
                <p>{cardInfoFeature.features}</p>
              </div>
              <div className="includes-section">
                <h2>In The Box</h2>
                <ul>
                  <li>
                    <h5>2X</h5>
                    <p>{cardInfoFeature.includes[1]}</p>
                  </li>
                  <li>
                    <h5>2X</h5>
                    <p>{cardInfoFeature.includes[2]}</p>
                  </li>
                  <li>
                    <h5>1X</h5>
                    <p>{cardInfoFeature.includes[3]}</p>
                  </li>
                  <li>
                    <h5>1X</h5>
                    <p>{cardInfoFeature.includes[4]}</p>
                  </li>
                  <li>
                    <h5>1X</h5>
                    <p>{cardInfoFeature.includes[5]}</p>
                  </li>
                </ul>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default FeaturesSection;
