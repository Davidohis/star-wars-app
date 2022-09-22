import * as Organism from "../../organisms";
import { Layout } from "../../templates";
import { GlobalContainerWrapper } from "../styles";
import { useParams } from "react-router-dom";

export default function PreviewPage() {
  const params = useParams();
  const title = params.id;

  return (
    <Layout>
      <GlobalContainerWrapper>
        <Organism.HeaderComponent goback={true} />
        <Organism.PreviewComponent title={title} />
        <Organism.SiderBarComponent />
      </GlobalContainerWrapper>
    </Layout>
  );
}
