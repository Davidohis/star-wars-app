// import Footer from "../components/Footer/Footer";
// import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";

const Layout = ({ children }: any) => {
  return (
    <Container>
      {/* <Header /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </Container>
  );
};

export default Layout;
