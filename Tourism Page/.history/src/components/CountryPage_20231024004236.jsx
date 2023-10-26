import NavBar from "./NavBar";
import { useContext } from "react";
import { languageContext } from "../context/languageContext";
import ActivityCard from "./ActivityCard";
import english from "../data/english.json";
import spanish from "../data/spanish.json";

function CountryPage({ location }) {
  const [language] = useContext(languageContext);
  let locationRouteEN = english.pages[location];
  let locationRouteES = spanish.pages[location];
  return (
    <>
      <NavBar />
      <header>
        <img src="" alt={`${location} landscape`} />
        <h1>
          {language === "en" ? locationRouteEN.name : locationRouteES.name}
        </h1>
        <div>
          <p>
            {language === "en" ? locationRouteEN.brief : locationRouteES.brief}
          </p>
        </div>
      </header>
      <main>
        <h2>
          {language === "en"
            ? locationRouteEN.subtitle
            : locationRouteES.subtitle}
        </h2>
        <p>
          {language === "en"
            ? locationRouteEN.description
            : locationRouteES.description}
        </p>
      </main>
      {/* Carrousel */}
      <section>
        <p>
          {language === "en" ? locationRouteEN.name : locationRouteES.name}
          {language === "en" ? " is divided into " : " está dividido en "}
          {language === "en"
            ? locationRouteEN.divisions.number
            : locationRouteES.divisions.number}
          {language === "en" ? " different zones:" : " zonas diferentes:"}
        </p>
        <ul>
          {language === "en"
            ? locationRouteEN.divisions.divisions.map((d) => (
                <li key={d}>{d}</li>
              ))
            : locationRouteES.divisions.divisions.map((d) => (
                <li key={d}>{d}</li>
              ))}
        </ul>
      </section>
      <section>
        {language === "en"
          ? locationRouteEN.activities.map((a) => (
              <ActivityCard
                key={a.title}
                title={a.title}
                description={a.description}
                price={a.price}
                img={a.img ?? ""}
              />
            ))
          : locationRouteES.activities.map((a) => (
              <ActivityCard
                key={a.title}
                title={a.title}
                description={a.description}
                price={a.price}
                img={a.img ?? ""}
              />
            ))}
      </section>
      {/* footer */}
    </>
  );
}

export default CountryPage;
