import Nav from "./Nav";
import Header from "./Header";
import SocialLinks from "./SocialLinks";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Nav />
      <Header />
      <main className="flex">{children}</main>
      <SocialLinks />
    </div>
  );
};

export default Layout;
