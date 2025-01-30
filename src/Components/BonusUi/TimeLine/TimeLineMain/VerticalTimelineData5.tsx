import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { TimeLineData5 } from "@/utils/Constant";
import { Badge } from "reactstrap";

const VerticalTimelineData5 = () => {
const MeetUpText: string = "Find nearby web designers to network with! A Web Design Meetup is a place where you can discuss tools.";

  return (
    <div className="cd-timeline-block">
      <div className="cd-timeline-img cd-location bg-secondary is-hidden">
        <i className="icon-pin-alt" />
      </div>
      <div className="cd-timeline-content is-hidden">
        <div className="vertical-timeline-element--work">
          <div className="timeline-wrapper">
            <Badge color="success">Meet-up</Badge>
          </div>
          <h4 className="m-0 vertical-timeline-element-subtitle">Web-designer's meet-up</h4>
          <p className="mb-0">{MeetUpText}</p>
          <div className="time-content pt-2">
            <i className="icon-android"></i>
            <h5>Please! Meet-up</h5>
          </div>
        </div>
        <span className="cd-date">November 04 2022</span>
      </div>
    </div>
  );
};

export default VerticalTimelineData5;
