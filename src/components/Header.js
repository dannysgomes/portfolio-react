import profilePic from "../images/ResizedGOMES.png";

const Header = () => {
  return (
    <header>
      <img
        src={profilePic}
        alt="profile of Daniel Gomes"
        className="profile-image"
      />
      <h1 className="tag name">Welcome to my Portfolio</h1>
    </header>
  );
};

export default Header;
