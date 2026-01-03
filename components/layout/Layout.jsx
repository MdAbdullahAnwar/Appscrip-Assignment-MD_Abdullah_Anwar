import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, onSearch, favoritesCount }) => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
