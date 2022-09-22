import type { ColumnsType } from "antd/es/table";
import { SpeciesTableType } from "../../../utils/types";

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
    width: 250,
    render: (created) => (
      <div>{moment(created).format("MMMM Do YYYY").substring(0, 26)}</div>
    ),
  },
];

export default columns;
