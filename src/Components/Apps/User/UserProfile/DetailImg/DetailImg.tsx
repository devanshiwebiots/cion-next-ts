import { Card, Col, Row } from "reactstrap";
import CommonProfileHead from "../CommonProfileHead/CommonProfileHead";
import { Href } from "@/utils/Constant";
import Link from "next/link";
import Image from "next/image";
import { ImagePath } from "@/Constant";
import ProfileLike from "../WilliamProfile/ProfileLike";

const DetailImg = () => {
  return (
    <Col sm={12}>
      <Card>
        <div className="profile-img-style">
          <CommonProfileHead  activeTime="2 Yours ago" />
          <hr />
          <Row>
            <Col lg={12} xl={4}>
              <div className="step8">
                <Link href={Href}>
                  <Image
                    className="img-fluid rounded"
                    src={`${ImagePath}/other-images/sidebar-bg.jpg`}
                    alt="nature"
                    width={446} height={251}
                  />
                </Link>
              </div>
              <ProfileLike />
            </Col>
            <Col xl={6}>
              <p className="block-ellipsis pt-xl-0 pt-3">{"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consecteturContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur"}</p>
            </Col>
          </Row>
        </div>
      </Card>
    </Col>
  );
};

export default DetailImg;
