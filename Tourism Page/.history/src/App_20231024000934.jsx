import { Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import LandingPage from "./components/LandingPage";
import CountryPage from "./components/CountryPage";

export const languageContext = createContext();

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
              <CountryPage country="vallarta" />
            </languageContext.Provider>
          }
        />
        <Route path="/*" element={<></>} /> {/*404*/}
      </Routes>
    </>
  );
}

export default App;
