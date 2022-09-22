import type { ColumnsType } from "antd/es/table";
import { DashboardTableType } from "../../../utils/types";

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
    dataIndex: "url",
    width: 250,
    render: (url) => <p>fvfjfj </p>,
  },
];

export default columns;
