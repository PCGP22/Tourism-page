import logo from "../img/logo.png";
import { useContext } from "react";
import { languageContext } from "../App.jsx";

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
      <figure>
        <img src={logo} alt="logo" />
      </figure>
      <p>Tour by México</p>
      <figure>{/*Ícono de hamburgesa*/}</figure>
      <button onClick={handleLanguage}>
        {language === "en" ? "EN" : "ES"}
      </button>
    </nav>
  );
}

export default NavBar;
