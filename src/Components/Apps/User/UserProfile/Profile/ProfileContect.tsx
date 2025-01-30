import { Col, Row } from "reactstrap";
import { ContactUs, Location } from "@/utils/Constant";

const ProfileContect = () => {
  return (
    <Col sm={6} xl={4} className="order-sm-2 order-xl-2">
      <Row className="g-3">
        <Col md={6} className="mt-0 mt-sm-3">
          <div className="ttl-info text-start">
            <h5>
              <i className="fa fa-phone" />
              &nbsp;&nbsp;&nbsp;{ContactUs}
            </h5>
            <span>{'US 310-273-0666'}</span>
          </div>
        </Col>
        <Col md={6}>
          <div className="ttl-info text-start">
            <h5>
              <i className="fa fa-location-arrow" />
              &nbsp;&nbsp;&nbsp;{Location}
            </h5>
            <span>{'4377 Libby Street Beverly Hills'}</span>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default ProfileContect;
