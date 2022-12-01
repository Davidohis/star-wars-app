import type { ColumnsType } from "antd/es/table";
import { MoreOutlined } from "@ant-design/icons";
import * as Organism from "../../components/organisms";
import { useQuery } from "react-query";
import * as api from "../../query";
import { Link } from "react-router-dom";
import { DashboardTableType } from "../../utils/types";

export default function DashboardModule() {
  // React query function hooks for queryFilms
  const { error, data, isFetching, isLoading } = useQuery(
    "queryFilms",
    api.queryFilms
  );
  const swapiData = isLoading ? "" : data?.results;

  if (error) return <h2>An error has occurred</h2>;

  const columns: ColumnsType<DashboardTableType> = [
    {
      title: "Film Title",
      dataIndex: "title",
    },
    {
      title: "Release Date",
      dataIndex: "release_date",
    },
    {
      title: "Director",
      dataIndex: "director",
    },
    {
      title: "Producer",
      dataIndex: "producer",
      width: 250,
    },
    {
      title: "Episode ID",
      dataIndex: "episode_id",
      width: 150,
    },
    {
      title: "Character",
      dataIndex: "characters",
      width: 250,
      render: (characters) => <div>{characters[0]}</div>,
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
    <Organism.TableComponent
      title={"Films"}
      data={swapiData}
      isFetching={isFetching}
      columns={columns}
    />
  );
}
