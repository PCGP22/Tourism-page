import { useContext } from "react";
import { languageContext } from "../context/languageContext";
import english from "../data/english.json";
import spanish from "../data/spanish.json";
import { revealLeft } from "../utils/revealOnScroll";
import "../styles/misc.modules.css";

function TravelCard({ card }) {
  const [language] = useContext(languageContext);
  window.addEventListener("scroll", revealLeft);
  return (
    <div className="description__card travelCard revealFromLeft">
      <h3>
        {language === "en"
          ? english.landing_page.main.Travel[card].title
          : spanish.landing_page.main.Travel[card].title}
      </h3>
      <p>
        {language === "en"
          ? english.landing_page.main.Travel[card].text
          : spanish.landing_page.main.Travel[card].text}
      </p>
    </div>
  );
}

export default TravelCard;
