import "./Header.css";

const Header = () => {
  const navLinks = ["home", "expertise", "work", "experience", "contact"];
  return (
    <header className="header">
      <h1>Haris Javed._</h1>
      <div className="navContainer">
        {navLinks.map((navLink, idx) => (
          <div className="navLink" key={idx}>
            <p className="navNumber">
              {idx + 1 < 10 ? "0" + (idx + 1).toString() : idx + 1}
            </p>
            <p className="navText">{"// " + navLink}</p>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
