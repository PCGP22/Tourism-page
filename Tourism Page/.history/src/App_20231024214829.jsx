import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import LandingPage from "./components/LandingPage";
import LocationPage from "./components/LocationPage";
import { languageContext } from "./context/languageContext";
import "./styles/app.modules.css";

function App() {
  const [language, setLanguage] = useState("en");
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <languageContext.Provider value={[language, setLanguage]}>
              <LandingPage />
            </languageContext.Provider>
          }
        />
        <Route
          path="/puerto-vallarta"
          element={
            <languageContext.Provider value={[language, setLanguage]}>
              <LocationPage location="vallarta" />
            </languageContext.Provider>
          }
        />
        <Route
          path="/chichen-itza"
          element={
            <languageContext.Provider value={[language, setLanguage]}>
              <LocationPage location="chichen" />
            </languageContext.Provider>
          }
        />
        <Route
          path="/cancun"
          element={
            <languageContext.Provider value={[language, setLanguage]}>
              <LocationPage location="cancun" />
            </languageContext.Provider>
          }
        />
        <Route
          path="/tulum"
          element={
            <languageContext.Provider value={[language, setLanguage]}>
              <LocationPage location="tulum" />
            </languageContext.Provider>
          }
        />
        <Route
          path="/los-cabos"
          element={
            <languageContext.Provider value={[language, setLanguage]}>
              <LocationPage location="cabos" />
            </languageContext.Provider>
          }
        />
        <Route path="/*" element={<></>} /> {/*404*/}
      </Routes>
    </>
  );
}

export default App;
