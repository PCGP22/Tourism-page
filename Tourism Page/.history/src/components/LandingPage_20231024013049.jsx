import NavBar from "./NavBar";
import { useContext } from "react";
import { languageContext } from "../context/languageContext";
import TravelCard from "./travelCard";
import Form from "./Form";
import Footer from "./Footer";
import headerImg from "../img/Header.jpg";
import english from "../data/english.json";
import spanish from "../data/spanish.json";

function LandingPage() {
  const [language] = useContext(languageContext);
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
        <div>
          <TravelCard
            title={
              language === "en"
                ? english.landing_page.main.Travel["card-one"].title
                : spanish.landing_page.main.Travel["card-one"].title
            }
            text={
              language === "en"
                ? english.landing_page.main.Travel["card-one"].text
                : spanish.landing_page.main.Travel["card-one"].text
            }
          />
          <TravelCard
            title={
              language === "en"
                ? english.landing_page.main.Travel["card-two"].title
                : spanish.landing_page.main.Travel["card-two"].title
            }
            text={
              language === "en"
                ? english.landing_page.main.Travel["card-two"].text
                : spanish.landing_page.main.Travel["card-two"].text
            }
          />
          <TravelCard
            title={
              language === "en"
                ? english.landing_page.main.Travel["card-three"].title
                : spanish.landing_page.main.Travel["card-three"].title
            }
            text={
              language === "en"
                ? english.landing_page.main.Travel["card-three"].text
                : spanish.landing_page.main.Travel["card-three"].text
            }
          />
        </div>
      </section>
      <section>
        <h2>
          {language === "en"
            ? english.landing_page.main.favorites.title
            : spanish.landing_page.main.favorites.title}
        </h2>
        <p>
          {language === "en"
            ? english.landing_page.main.favorites.text
            : spanish.landing_page.main.favorites.text}
        </p>
        {/* Expandable image component*/}
        <p>
          {language === "en"
            ? english.landing_page.main.favorites.notice
            : spanish.landing_page.main.favorites.notice}
        </p>
      </section>
      <Form />
      <Footer />
    </>
  );
}

export default LandingPage;
