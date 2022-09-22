import * as Organism from "../../organisms";
import { Layout } from "../../templates";
import { GlobalContainerWrapper } from "../styles";

export default function PreviewPage() {
  return (
    <Layout>
      <GlobalContainerWrapper>
        <Organism.HeaderComponent goback={true} />
        <Organism.PreviewComponent />
        <Organism.SiderBarComponent />
      </GlobalContainerWrapper>
    </Layout>
  );
}
