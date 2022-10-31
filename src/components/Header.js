import { useLocation } from "react-router-dom";

import profilePic from "../images/ResizedGOMES.png";

const Header = () => {
  const location = useLocation();
  const { pathname } = location;

  let message = "";
  switch (true) {
    case pathname === "/home":
      message = "My Work";
      break;
    case pathname === "/contact":
      message = "Contact Me";
      break;
    default:
      message = "My Work";
  }

  return (
    <header>
      <img
        src={profilePic}
        alt="profile of Daniel Gomes"
        className="profile-image"
      />
      <h1 className="tag name">{message}</h1>
    </header>
  );
};

export default Header;
