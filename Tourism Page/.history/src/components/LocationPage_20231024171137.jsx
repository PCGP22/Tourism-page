import NavBar from "./NavBar";
import { useContext } from "react";
import { languageContext } from "../context/languageContext";
import ActivityCard from "./ActivityCard";
import Footer from "./Footer";
import english from "../data/english.json";
import spanish from "../data/spanish.json";

function LocationPage({ location }) {
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
        <p>
          {language === "en"
            ? "Each one of them with their own activities and uniqueness, so we invite you to visit them all."
            : "Cada una de ellas con sus propias actividades y unicidad, así que te invitamos a visitarlas todas."}
        </p>
        <p>
          {language === "en"
            ? "Besides this, there's always chance to find your own way to joy, the trick is to group with more people."
            : "Además de esto, estará siempre la posibilidad de encontrar tu propio camino a la alegría, el truco es agruparte con más personas. "}
        </p>
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
      <Footer />
    </>
  );
}

export default LocationPage;
