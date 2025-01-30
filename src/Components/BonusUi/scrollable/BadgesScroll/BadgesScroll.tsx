import { Badge, Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { BadgesScrollbar } from "@/utils/Constant";
import ScrollBar from "react-perfect-scrollbar";
import { BadgesScrollTopData, badgeScrollData } from "@/Data/BonusUi/scrollable/scrollableData";

const BadgesScroll = () => {
  return (
    <Col xxl={4} md={6}>
      <Card>
        <CommonHeader title={BadgesScrollbar} subTitle={BadgesScrollTopData} headClass="pb-0" />
        <CardBody>
          <ScrollBar className="scroll-demo" style={{ width: "100%", height: "300px" }}>
            <ListGroup numbered className="scroll-rtl">
              {badgeScrollData &&
                badgeScrollData.map((item, index) => (
                  <ListGroupItem className={`d-flex align-items-start flex-wrap ${index === badgeScrollData.length - 1 && "justify-content-between"}`} key={index}>
                    <div className="ms-2 me-auto">{item.text}</div>
                    <Badge pill color={item.class} className="p-2">
                      {item.badge}
                    </Badge>
                  </ListGroupItem>
                ))}
            </ListGroup>
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BadgesScroll;
