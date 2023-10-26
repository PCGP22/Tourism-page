import logo from "../img/logo.png";
import { useContext } from "react";
import { languageContext } from "../context/languageContext";
import { GiHamburgerMenu } from "react-icons/gi";
import english from "../data/english.json";
import spanish from "../data/spanish.json";

function NavBar() {
  const [language, setLanguage] = useContext(languageContext);
  function handleLanguage() {
    if (language === "en") {
      setLanguage("es");
    } else {
      setLanguage("en");
    }
  }
  return (
    <nav>
      <a>
        <figure>
          <img src={logo} alt="logo" />
        </figure>
      </a>
      <p>{language === "en" ? english.navBar.title : spanish.navBar.title}</p>
      <figure>
        <GiHamburgerMenu />
      </figure>
      <button onClick={handleLanguage}>
        {language === "en" ? "EN" : "ES"}
      </button>
    </nav>
  );
}

export default NavBar;
