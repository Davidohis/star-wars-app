import { Col, Row } from "antd";
import React from "react";
import * as Molecule from "../../molecules";
import * as Organism from "../index";
import * as Atom from "../../atoms";
import { MainContainerWrapper, TableSection } from "./styles";

interface Props {
  title: string;
  data: any;
  columns: any;
  isFetching: boolean;
}

export default function TableComponent({
  title,
  data,
  isFetching,
  columns,
}: Props) {
  return (
    <React.Fragment>
      <MainContainerWrapper>
        {/* cards section */}
        {title === "Films" ? <Organism.DashboardCardList /> : null}

        {/* Table section */}
        <TableSection>
          <Atom.TableHeadingComponent title={title} />
          <Row gutter={[0, 0]}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} span={24}>
              <Col span={24}>
                <Molecule.TableDetailComponent
                  data={data}
                  isFetching={isFetching}
                  columns={columns}
                />
              </Col>
            </Col>
          </Row>
        </TableSection>
      </MainContainerWrapper>
    </React.Fragment>
  );
}
