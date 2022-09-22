import { Table } from "antd";
import React from "react";
import { TableWrapper } from "./styles";

interface Props {
  data: any;
  columns: any;
  isFetching: boolean;
}

const TableDetailComponent = ({ data, isFetching, columns }: Props) => {
  const [selectedRowKeys, setSelectedRowKeys] = React.useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <TableWrapper>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        loading={isFetching}
        scroll={{ y: 460 }}
        rowKey={data?.title}
        pagination={false}
      />
    </TableWrapper>
  );
};

export default TableDetailComponent;
