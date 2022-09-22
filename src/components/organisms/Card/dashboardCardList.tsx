import { Col, Row } from "antd";
import { CardData } from "./data";
import * as Molecule from "../../molecules";

export default function DashboardCardList() {
  return (
    <Row gutter={[40, 16]}>
      {CardData.map((item) => {
        return (
          <Col xs={24} sm={24} md={24} lg={8} xl={6} span={6} key={item.id}>
            <Molecule.DashboardCard
              title={item.title}
              color={item.color}
              num={item.num}
              desc={item.desc}
            />
          </Col>
        );
      })}
    </Row>
  );
}
