function FeaturesSectionZX7({ productCardInfo }) {
  return (
    <>
      {productCardInfo.map((cardInfo) => {
        return (
          <>
            <div className="features-section" key={cardInfo.name}>
              <div className="features-text">
                <h2>FEATURES</h2>
                <p>{cardInfo.features}</p>
              </div>
              <div className="includes-section">
                <h2>In The Box</h2>
                <ul>
                  <li>
                    <h5>2X</h5>
                    <p>{cardInfo.includes[1]}</p>
                  </li>
                  <li>
                    <h5>2X</h5>
                    <p>{cardInfo.includes[2]}</p>
                  </li>
                  <li>
                    <h5>1X</h5>
                    <p>{cardInfo.includes[3]}</p>
                  </li>
                  <li>
                    <h5>1X</h5>
                    <p>{cardInfo.includes[4]}</p>
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

export default FeaturesSectionZX7;
