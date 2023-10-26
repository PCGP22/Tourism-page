import { useContext } from "react";
import { languageContext } from "../context/languageContext";
import NavBar from "./NavBar";
import TravelCard from "./travelCard";
import ComplexCarrousel from "./ComplexCarrousel";
import LocationCard from "./LocationCard";
import Accordion from "./Accordion";
import Form from "./Form";
import Footer from "./Footer";
import headerImg from "../img/Header.jpg";
import cancun from "../img/Cancun.jpg";
import vallarta from "../img/vallarta.jpg";
import chichen from "../img/Chichen itza.jpg";
import cabos from "../img/Cabo San Lucas.jpg";
import tulum from "../img/Tulum.jpg";
import english from "../data/english.json";
import spanish from "../data/spanish.json";
import "../styles/landingPage.modules.css";

function LandingPage() {
  const [language] = useContext(languageContext);
  const locationsSet = [
    <LocationCard key={"cancun"} img={cancun} location={"cancun"} />,
    <LocationCard key={"vallarta"} img={vallarta} location={"vallarta"} />,
    <LocationCard key={"chichen"} img={chichen} location={"chichen"} />,
    <LocationCard key={"cabos"} img={cabos} location={"cabos"} />,
    <LocationCard key={"tulum"} img={tulum} location={"tulum"} />,
  ];
  return (
    <>
      <NavBar />
      <header className="landing__header">
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
        <ComplexCarrousel />
      </main>
      <section>
        <h2>
          {language === "en"
            ? english.landing_page.main.Travel.title
            : spanish.landing_page.main.Travel.title}
        </h2>
        <div>
          <TravelCard card="card-one" />
          <TravelCard card="card-two" />
          <TravelCard card="card-three" />
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
        <Accordion itemsSet={locationsSet} />
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
