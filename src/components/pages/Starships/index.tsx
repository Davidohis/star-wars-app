import * as Organism from "../../organisms";
import { Layout } from "../../templates";
import { MoreOutlined } from "@ant-design/icons";
import { GlobalContainerWrapper } from "../styles";
import { useQuery } from "react-query";
import * as api from "../../../query";
import type { ColumnsType } from "antd/es/table";
import { StarshipsTableType } from "../../../utils/types";
import { Link } from "react-router-dom";

export default function StarshipPage() {
  // React query function hooks for queryFilms
  const { error, data, isFetching, isLoading } = useQuery(
    "queryStarships",
    api.queryStarships
  );
  const swapiData = isLoading ? "" : data?.results;

  if (error) return <h2>An error has occurred</h2>;

  const columns: ColumnsType<StarshipsTableType> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Model",
      dataIndex: "model",
    },
    {
      title: "Class",
      dataIndex: "starship_class",
      width: 250,
    },
    {
      title: "Passenger",
      dataIndex: "passengers",
      width: 200,
    },
    {
      title: "Length",
      dataIndex: "length",
    },
    {
      title: "Character",
      dataIndex: "films",
      width: 250,
      render: (films) => <div>https://swapi.dev/api/people</div>,
    },
    {
      key: "button",
      title: "View",
      dataIndex: "title",
      width: 70,
      render: (title) => (
        <Link to={`/preview/${title}`}>
          <MoreOutlined size={15} style={{ cursor: "pointer" }} />
        </Link>
      ),
    },
  ];

  return (
    <Layout>
      <GlobalContainerWrapper>
        <Organism.HeaderComponent />
        <Organism.TableComponent
          title={"Starships"}
          data={swapiData}
          isFetching={isFetching}
          columns={columns}
        />
        <Organism.SiderBarComponent />
      </GlobalContainerWrapper>
    </Layout>
  );
}
