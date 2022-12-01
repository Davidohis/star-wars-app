import * as Organism from "../../components/organisms";
import moment from "moment";
import { MoreOutlined } from "@ant-design/icons";
import { useQuery } from "react-query";
import * as api from "../../query";
import type { ColumnsType } from "antd/es/table";
import { PeopleTableType } from "../../utils/types";
import { Link } from "react-router-dom";

export default function PeoplesModule() {
  // React query function hooks for queryPeople
  const { error, data, isFetching, isLoading } = useQuery(
    "queryPeople",
    api.queryPeople
  );
  const swapiData = isLoading ? "" : data?.results;

  if (error) return <h2>An error has occurred</h2>;

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
      width: 200,
      render: (created) => <div>{moment(created).format("MMMM Do YYYY")}</div>,
    },
    {
      key: "button",
      title: "View",
      dataIndex: "name",
      width: 70,
      render: (name) => (
        <Link to={`/preview/${name}`}>
          <MoreOutlined size={15} style={{ cursor: "pointer" }} />
        </Link>
      ),
    },
  ];

  return (
    <Organism.TableComponent
      title={"People"}
      data={swapiData}
      isFetching={isFetching}
      columns={columns}
    />
  );
}
