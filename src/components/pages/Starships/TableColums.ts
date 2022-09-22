import type { ColumnsType } from "antd/es/table";
import { StarshipsTableType } from "../../../utils/types";

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
  },
];

export default columns;
