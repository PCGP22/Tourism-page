import NavBar from "./NavBar";

function CountryPage({ location }) {
  return (
    <>
      <NavBar />
      <header>
        <img src="" alt={`${location} landscape`} />
        <p>{location}</p>
      </header>
    </>
  );
}

export default CountryPage;
