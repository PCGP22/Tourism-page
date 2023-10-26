import NavBar from "./NavBar";
import { useContext } from "react";
import { languageContext } from "../App.jsx";
import headerImg from "../img/Header.jpg";
import english from "../data/english.json";
import spanish from "../data/spanish.json";

function LandingPage() {
  const [language, setLanguage] = useContext(languageContext);
  console.log();
  return (
    <>
      <NavBar />
      <header>
        <img src={headerImg} alt="tourism in mexico" />
        <div>
          <h1>
            {language === "en"
              ? english.landing_page.title
              : spanish.landing_page.title}
          </h1>
          <p>
            {language === "en"
              ? english.landing_page.header["first-line"]
              : spanish.landing_page.header["first-line"]}
          </p>
          <p>
            {language === "en"
              ? english.landing_page.header["second-line"]
              : spanish.landing_page.header["second-line"]}
          </p>
          <p>
            {language === "en"
              ? english.landing_page.header["third-line"]
              : spanish.landing_page.header["third-line"]}
          </p>
        </div>
      </header>
      <main>
        <h2>
          {language === "en"
            ? english.landing_page.main.welcome.title
            : spanish.landing_page.main.welcome.title}
        </h2>
        <p>
          {language === "en"
            ? english.landing_page.main.welcome.text
            : spanish.landing_page.main.welcome.text}
        </p>
        <p>
          {language === "en"
            ? english.landing_page.main.welcome.indication
            : spanish.landing_page.main.welcome.indication}
        </p>
        {/* componente carrusel avanzado*/}
      </main>
      <section>
        <h2>
          {language === "en"
            ? english.landing_page.main.Travel.title
            : spanish.landing_page.main.Travel.title}
        </h2>
      </section>
    </>
  );
}

export default LandingPage;
