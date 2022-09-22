import { Container } from "./LayoutStyles";

const Layout = ({ children }: any) => {
  return (
    <Container>
      <main>{children}</main>
    </Container>
  );
};

export default Layout;
