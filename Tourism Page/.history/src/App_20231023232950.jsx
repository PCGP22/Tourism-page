import { Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import LandingPage from "./components/LandingPage";

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
        <Route path="/as" element={<></>} />
        <Route path="/*" element={<></>} /> {/*404*/}
      </Routes>
    </>
  );
}

export default App;
