"use client"
import "./Header.css";

const Header = () => {

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-content">
          <div onClick={() => scrollTo("hero")} className="nav-logo">Haris Javed._</div>
          <div className="nav-links">
            <a onClick={() => scrollTo(`about`)} className="nav-link">About</a>
            <a onClick={() => scrollTo(`projects`)} className="nav-link">Projects</a>
            <a onClick={() => scrollTo(`skills`)} className="nav-link" >Skills</a>
            <button
              onClick={() => scrollTo("contact")}
              className="contact-button"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </nav >
  );
};

export default Header;
