import { Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Route path="/" Component={<></>} />
        <Route path="/" Component={<></>} />
        <Route path="/*" Component={<></>} /> {/*404*/}
      </Router>
    </>
  );
}

export default App;
