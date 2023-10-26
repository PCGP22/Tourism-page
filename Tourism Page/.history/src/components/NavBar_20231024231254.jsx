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
    <nav className="navBar">
      <div className="navBar__container">
        <a href="/">
          <figure className="navBar__logo">
            <img src={logo} alt="logo" />
          </figure>
        </a>
        <p>{language === "en" ? english.navBar.title : spanish.navBar.title}</p>
        <button
          onClick={() => setDeployed(!deployed)}
          className="navBar__burguerButton">
          <GiHamburgerMenu />
        </button>
      </div>
      <div
        className={`${
          deployed ? "navBar--deployed" : " navBar--deployed navBar--hidden"
        }`}>
        <button onClick={handleLanguage}>
          {language === "en" ? "EN" : "ES"}
        </button>
        {language === "en"
          ? english.navBar.links.map((l) => (
              <a key={l.link} href={l.link}>
                {l.text}
              </a>
            ))
          : spanish.navBar.links.map((l) => (
              <a key={l.link} href={l.link}>
                {l.text}
              </a>
            ))}
      </div>
    </nav>
  );
}

export default NavBar;
