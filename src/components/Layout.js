import Nav from "./Nav";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Nav />
      <Header />
      <main className="flex">{children}</main>
    </div>
  );
};

export default Layout;
