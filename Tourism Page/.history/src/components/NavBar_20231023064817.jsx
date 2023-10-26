import logo from "../img/logo.png";

function NavBar() {
  return (
    <nav>
      <figure>
        <img src={logo} alt="logo" />
      </figure>
      <p>Tour by México</p>
      <figure>{/*Ícono de hamburgesa*/}</figure>
    </nav>
  );
}

export default NavBar;
