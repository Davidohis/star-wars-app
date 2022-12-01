import * as Organism from "../../components/organisms";
import * as Container from "../../container";
import { Layout } from "../../components/templates";
import { GlobalContainerWrapper } from "../styles";

export default function PeoplesPage() {
  return (
    <Layout>
      <GlobalContainerWrapper>
        <Organism.HeaderComponent />
        <Container.PeoplesModule />
        <Organism.SiderBarComponent />
      </GlobalContainerWrapper>
    </Layout>
  );
}
