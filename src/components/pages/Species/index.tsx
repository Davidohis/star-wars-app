import * as Organism from "../../organisms";
import moment from "moment";
import { MoreOutlined } from "@ant-design/icons";
import { Layout } from "../../templates";
import { GlobalContainerWrapper } from "../styles";
import { useQuery } from "react-query";
import * as api from "../../../query";
import type { ColumnsType } from "antd/es/table";
import { SpeciesTableType } from "../../../utils/types";
import { Link } from "react-router-dom";

export default function SpeciesPage() {
  // React query function hooks for queryFilms
  const { error, data, isFetching, isLoading } = useQuery(
    "querySpecies",
    api.querySpecies
  );
  const swapiData = isLoading ? "" : data?.results;

  if (error) return <h2>An error has occurred</h2>;

  const columns: ColumnsType<SpeciesTableType> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Classification",
      dataIndex: "classification",
    },
    {
      title: "Eye colors",
      dataIndex: "eye_colors",
      width: 250,
    },
    {
      title: "Hair Color",
      dataIndex: "hair_colors",
      width: 200,
    },
    {
      title: "Height",
      dataIndex: "average_height",
    },
    {
      title: "Created",
      dataIndex: "created",
      width: 200,
      render: (created) => <div>{moment(created).format("MMMM Do YYYY")}</div>,
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
          title={"Species"}
          data={swapiData}
          isFetching={isFetching}
          columns={columns}
        />
        <Organism.SiderBarComponent />
      </GlobalContainerWrapper>
    </Layout>
  );
}
