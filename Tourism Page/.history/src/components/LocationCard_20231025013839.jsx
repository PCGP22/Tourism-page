import { useContext } from "react";
import { languageContext } from "../context/languageContext";
import english from "../data/english.json";
import spanish from "../data/spanish.json";

function LocationCard({ img, location }) {
  const [language] = useContext(languageContext);
  return (
    <figure className="locationCard">
      <img src={img} alt={`${location} image`} className="locationCard__img" />
      <div className="locationCard__description">
        <div className="locationCard__description__title">
          <h3>
            {language === "en"
              ? english.pages[location].name
              : spanish.pages[location].name}
          </h3>
          <span>
            {language === "en"
              ? "Click here to know more"
              : "Haz click para saber más"}
          </span>
        </div>
        <p>
          {language === "en"
            ? english.pages[location].brief
            : spanish.pages[location].brief}
        </p>
      </div>
    </figure>
  );
}

export default LocationCard;
