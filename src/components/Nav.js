import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="main-nav">
      <ul className="nav">
        <li className="name">Software Engineer: Front-End Development</li>
        <li>
          <Link className="link" to="home">
            My Work
          </Link>
        </li>
        <li>
          <Link className="link" to="contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
