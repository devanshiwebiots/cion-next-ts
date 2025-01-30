import { Col } from "reactstrap";
import { Href, WebDesigner } from "@/utils/Constant";
import Link from "next/link";

const ProfileName = () => {
  return (
    <>
      <Col sm={12} xl={4} className="order-sm-0 order-xl-1">
        <div className="user-designation tour-email">
          <div className="title">
            <Link href={Href} target="_blank">
              {'William C. Jennings'}
            </Link>
          </div>
          <div className="desc mt-2"> {WebDesigner}</div>
        </div>
      </Col>
    </>
  );
};

export default ProfileName;
