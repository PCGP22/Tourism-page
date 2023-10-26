import NavBar from "./NavBar";

function LandingPage() {
  return (
    <languageContext.Provider value={[language, setLanguage]}>
      <NavBar />
      <header>
        <img src="" alt="tourism in mexico" />
        <div>
          <h1>Tour by México</h1>
          <p>Dare to explore something new,</p>
          <p>something breathtaking,</p>
          <p>something like México.</p>
        </div>
      </header>
      <main></main>
    </languageContext.Provider>
  );
}

export default LandingPage;
