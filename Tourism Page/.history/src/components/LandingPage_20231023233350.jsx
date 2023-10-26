import NavBar from "./NavBar";
import { useContext } from "react";
import { languageContext } from "../App.jsx";
import english from "../data/english.json";
import spanish from "../data/spanish.json";

function LandingPage() {
  const [language, setLanguage] = useContext(languageContext);
  console.log();
  return (
    <>
      <NavBar />
      <header>
        <img src="" alt="tourism in mexico" />
        <div>
          <h1>
            {language === "en"
              ? english.landing_page.title
              : spanish.landing_page.title}
          </h1>
          <p>Dare to explore something new,</p>
          <p>something breathtaking,</p>
          <p>something like México.</p>
        </div>
      </header>
      <main></main>
    </>
  );
}

export default LandingPage;
