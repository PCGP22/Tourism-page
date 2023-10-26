import logo from "../img/logo.png";
import { useContext, useState } from "react";
import { languageContext } from "../context/languageContext";
import { GiHamburgerMenu } from "react-icons/gi";
import english from "../data/english.json";
import spanish from "../data/spanish.json";
import "../styles/navBar.modules.css";

function NavBar() {
  const [language, setLanguage] = useContext(languageContext);
  const [deployed, setDeployed] = useState(true);
  function handleLanguage() {
    if (language === "en") {
      setLanguage("es");
    } else {
      setLanguage("en");
    }
  }
  return (
    <nav className="navBar__container">
      <a href="/">
        <figure>
          <img src={logo} alt="logo" />
        </figure>
      </a>
      <p>{language === "en" ? english.navBar.title : spanish.navBar.title}</p>
      <button onClick={() => setDeployed(!deployed)}>
        <figure>
          <GiHamburgerMenu />
        </figure>
      </button>
      <div>
        {deployed && (
          <button onClick={handleLanguage}>
            {language === "en" ? "EN" : "ES"}
          </button>
        )}
        {deployed && language === "en"
          ? english.navBar.links.map((l) => (
              <a key={l.link} href={l.link}>
                {l.text}
              </a>
            ))
          : deployed &&
            spanish.navBar.links.map((l) => (
              <a key={l.link} href={l.link}>
                {l.text}
              </a>
            ))}
      </div>
    </nav>
  );
}

export default NavBar;
