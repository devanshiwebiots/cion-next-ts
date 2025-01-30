import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { TimeLines } from "@/utils/Constant";
import VerticalTimelineData1 from "./VerticalTimelineData1";
import VerticalTimelineData2 from "./VerticalTimelineData2";
import VerticalTimelineData3 from "./VerticalTimelineData3";
import VerticalTimelineData4 from "./VerticalTimelineData4";
import VerticalTimelineData5 from "./VerticalTimelineData5";
import VerticalTimelineData6 from "./VerticalTimelineData6";

const TimeLineMain = () => {
  return (
    <Col sm={12} className="box-col-12">
      <Card>
        <CommonHeader title={TimeLines} subTitle={[{ text: "This is a Cion timeline chart." }]} />
        <CardBody id="cd-timeline" className="custom-timeline-card">
          <section className="cd-container" id="cd-timeline">
            <VerticalTimelineData1 />
            <VerticalTimelineData2 />
            <VerticalTimelineData3 />
            <VerticalTimelineData4 />
            <VerticalTimelineData5 />
            <VerticalTimelineData6 />
          </section>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TimeLineMain;
