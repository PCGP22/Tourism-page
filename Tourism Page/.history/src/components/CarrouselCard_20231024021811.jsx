import { useContext } from "react";
import { languageContext } from "../context/languageContext";
import english from "../data/english.json";
import spanish from "../data/spanish.json";

function CarrouselCard({ activity, img }) {
  const [language] = useContext(languageContext);
  return (
    <figure>
      <button>{close}</button>
      <img src={img} alt={`${english.carrousel[activity].title} example`} />
      <div>
        <h3>
          {language === "en"
            ? english.carrousel[activity].title
            : spanish.carrousel[activity].title}
        </h3>
        <p>
          {language === "en"
            ? english.carrousel[activity].text
            : spanish.carrousel[activity].text}
        </p>
      </div>
    </figure>
  );
}

export default CarrouselCard;
