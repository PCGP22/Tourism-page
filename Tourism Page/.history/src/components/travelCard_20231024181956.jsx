import { useContext } from "react";
import { languageContext } from "../context/languageContext";
import english from "../data/english.json";
import spanish from "../data/spanish.json";

function TravelCard({ card }) {
  const [language] = useContext(languageContext);
  return (
    <div>
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
