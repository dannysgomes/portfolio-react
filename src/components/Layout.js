import Nav from "./Nav";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Header />
      {children}
    </>
  );
};

export default Layout;
