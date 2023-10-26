import { Router, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <>
      <Router>
        <Route path="/" Component={<LandingPage></LandingPage>} />
        <Route path="/" Component={<></>} />
        <Route path="/*" Component={<></>} /> {/*404*/}
      </Router>
    </>
  );
}

export default App;
