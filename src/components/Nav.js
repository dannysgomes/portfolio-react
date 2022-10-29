import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="main-nav">
      <ul className="nav">
        <li className="name">Front-End Web Development</li>
        <li>
          <Link to="home">My Profile</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
