import NavBar from "./NavBar";

function CountryPage({ country }) {
  return (
    <>
      <NavBar />
      <p>{country}</p>
    </>
  );
}

export default CountryPage;
