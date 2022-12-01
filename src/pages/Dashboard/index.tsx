import { Layout } from "../../components/templates";
import { GlobalContainerWrapper } from "../styles";
import * as Container from "../../container";
import * as Organism from "../../components/organisms";

export default function DashboardPage() {
  return (
    <Layout>
      <GlobalContainerWrapper>
        <Organism.HeaderComponent />
        <Container.DashboardModule />
        <Organism.SiderBarComponent />
      </GlobalContainerWrapper>
    </Layout>
  );
}
