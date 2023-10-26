import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={<LandingPage />} />
        <Route path="/as" Component={<></>} />
        <Route path="/*" Component={<></>} /> {/*404*/}
      </Routes>
    </>
  );
}

export default App;
