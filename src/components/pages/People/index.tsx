import * as Organism from "../../organisms";
import { Layout } from "../../templates";
import { GlobalContainerWrapper } from "../styles";
import { useQuery } from "react-query";
import * as api from "../../../query";
import columns from "./TableColums";

export default function PeoplesPage() {
  // React query function hooks for queryPeople
  const { error, data, isFetching, isLoading } = useQuery(
    "queryPeople",
    api.queryPeople
  );
  const swapiData = isLoading ? "" : data?.results;

  if (error) return <h2>An error has occurred</h2>;

  console.log("people", data);

  return (
    <Layout>
      <GlobalContainerWrapper>
        <Organism.HeaderComponent />
        <Organism.TableComponent
          title={"People"}
          data={swapiData}
          isFetching={isFetching}
          columns={columns}
        />
        <Organism.SiderBarComponent />
      </GlobalContainerWrapper>
    </Layout>
  );
}
