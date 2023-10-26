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
        <div>
          <h1>
            {language === "en" ? locationRouteEN.name : locationRouteES.name}
          </h1>
        </div>
      </header>
    </>
  );
}

export default CountryPage;
