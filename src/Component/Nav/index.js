import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navbar ">
      <ul>
        <li>
          <a className="home" href="#about">
            HOME
          </a>
        </li>
        <li>
          <a className="about" href="#about">
            ABOUT
          </a>
        </li>
        <li className="portfolio">
          <a href="#portfolio">PORTFOLIO</a>
        </li>
        <li>
          <a className="contact" href="#contact">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
