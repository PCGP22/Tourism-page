import NavBar from "./NavBar";
import { useContext } from "react";
import { languageContext } from "../context/languageContext";
import english from "../data/english.json";
import spanish from "../data/spanish.json";

function CountryPage({ location }) {
  const [language, setLanguage] = useContext(languageContext);
  let locationRouteEN = english.pages[location];
  let locationRouteES = spanish.pages[location];
  return (
    <>
      <NavBar />
      <header>
        <img src="" alt={`${location} landscape`} />
        <h1>
          {language === "en" ? locationRouteEN.name : locationRouteES.name}
        </h1>
        <div>
          <p>
            {language === "en" ? locationRouteEN.brief : locationRouteES.brief}
          </p>
        </div>
      </header>
      <main>
        <h2>
          {language === "en"
            ? locationRouteEN.subtitle
            : locationRouteES.subtitle}
        </h2>
        <p>
          {language === "en"
            ? locationRouteEN.description
            : locationRouteES.description}
        </p>
      </main>
      {/* Carrousel */}
      <section>
        <p>
          {language === "en" ? locationRouteEN.name : locationRouteES.name}
          {language === "en" ? " is divided into " : " está dividido en "}
          {language === "en"
            ? locationRouteEN.divisions.number
            : locationRouteES.divisions.number}
        </p>
      </section>
    </>
  );
}

export default CountryPage;
