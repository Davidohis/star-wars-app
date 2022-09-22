import React from "react";
import * as Organism from "../../organisms";
import { Layout } from "../../templates";
import { GlobalContainerWrapper } from "../styles";
import { useQuery } from "react-query";
import * as api from "../../../query";
import columns from "./TableColums";

export default function DashboardPage() {
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
        <Organism.HeaderComponent />
        <Organism.TableComponent
          title={"Films"}
          data={swapiData}
          isFetching={isFetching}
          columns={columns}
        />
        <Organism.SiderBarComponent />
      </GlobalContainerWrapper>
    </Layout>
  );
}
