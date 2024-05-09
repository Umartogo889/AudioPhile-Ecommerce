// style
import { Link } from "react-router-dom";
import "../Home.css";
import "../HomeResponsive.css";
function ZX7Speaker() {
  return (
    <div className="Container">
      <div className="ZX7Speaker">
        <div className="ZX7Speaker-text-block">
          <h1>ZX7 SPEAKER</h1>
          <Link to={"/cardInfo-zx7-speaker"}>
            <button> SEE PRODUCT</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ZX7Speaker;
