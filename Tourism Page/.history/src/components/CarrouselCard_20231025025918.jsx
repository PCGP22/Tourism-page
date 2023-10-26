import { useContext } from "react";
import { languageContext, visibleContext } from "../context/languageContext";
import english from "../data/english.json";
import spanish from "../data/spanish.json";

function CarrouselCard({ activity, img }) {
  const [language] = useContext(languageContext);
  const [setVisible] = useContext(visibleContext);
  return (
    <figure className="carrouselCard">
      <button
        onClick={() => setVisible(false)}
        className="carrouselCard__button">
        {language === "en" ? "Close" : "Cerrar"}
      </button>
      <img
        src={img}
        alt={`${english.carrousel[activity].title} example`}
        className="carrouselCard__img"
      />
      <div className="description__card carrouselCard__description">
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
