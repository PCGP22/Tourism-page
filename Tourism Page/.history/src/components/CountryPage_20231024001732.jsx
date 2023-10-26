import NavBar from "./NavBar";
import { useContext } from "react";
import { languageContext } from "../context/languageContext";
import english from "../data/english.json";
import spanish from "../data/spanish.json";

function CountryPage({ location }) {
  const [language, setLanguage] = useContext(languageContext);
  return (
    <>
      <NavBar />
      <header>
        <img src="" alt={`${location} landscape`} />
        <div>
          <h1>
            {language === "en"
              ? english.pages[location].name
              : spanish.pages[location].name}
          </h1>
        </div>
      </header>
    </>
  );
}

export default CountryPage;
