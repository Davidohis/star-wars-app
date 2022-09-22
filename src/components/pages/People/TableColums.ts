import type { ColumnsType } from "antd/es/table";
import { PeopleTableType } from "../../../utils/types";

const columns: ColumnsType<PeopleTableType> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Brth Year",
    dataIndex: "birth_year",
  },
  {
    title: "Gender",
    dataIndex: "gender",
  },
  {
    title: "Hair Color",
    dataIndex: "hair_color",
  },
  {
    title: "Height",
    dataIndex: "height",
  },
  {
    title: "Created",
    dataIndex: "created",
    width: 250,
  },
];

export default columns;
