import { Routes, Route, createContext, useState } from "react-router-dom";
import LandingPage from "./components/LandingPage";

export const languageContext = createContext();

function App() {
  const [language, setLanguage] = useState("en");
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/as" element={<></>} />
        <Route path="/*" element={<></>} /> {/*404*/}
      </Routes>
    </>
  );
}

export default App;
