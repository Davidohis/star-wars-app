import * as Organism from "../../organisms";
import { Layout } from "../../templates";
import { GlobalContainerWrapper } from "../styles";
import { useQuery } from "react-query";
import * as api from "../../../query";


export default function PreviewPage() {
  // React query function hooks for queryFilms
  const { error, data, isFetching, isLoading } = useQuery(
    "queryFilms",
    api.queryFilms
  );
  const swapiData = isLoading ? "" : data?.results;

  if (error) return <h2>An error has occurred</h2>;

  return (
    <Layout>
      <GlobalContainerWrapper>
        <Organism.HeaderComponent back={true} />
        <Organism.PreviewComponent/>
        <Organism.SiderBarComponent />
      </GlobalContainerWrapper>
    </Layout>
  );
}
