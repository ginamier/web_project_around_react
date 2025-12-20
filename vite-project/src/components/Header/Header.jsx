import logo from "../../images/Aroundtheus.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo Around the US logo" className="header__logo" />
    </header>
  );
}

export default Header;
