import NavBar from "./NavBar";
import { useContext } from "react";
import { languageContext } from "../App.jsx";

function LandingPage() {
  const [language] = useContext(languageContext);
  return (
    <>
      <NavBar />
      <header>
        <img src="" alt="tourism in mexico" />
        <div>
          <h1>{language === "en" ? "Tour by México" : "Tour por México"}</h1>
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
