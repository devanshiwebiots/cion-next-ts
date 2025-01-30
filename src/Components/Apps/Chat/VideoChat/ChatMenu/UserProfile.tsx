import { Col, Row } from "reactstrap";
import { Fax, Follower, Following } from "@/utils/Constant";
import Image from "next/image";
import { ImagePath } from "@/Constant";
import SocialMediaIcons from "./SocialMediaIcons";

const UserProfile = () => {
  return (
    <div className='user-profile'>
      <div className='image'>
        <div className='avatar text-center'>
          <Image alt='user' src={`${ImagePath}/user/2.png`} height={130} width={130}/>
        </div>
        <div className='icon-wrapper'>
          <i className='icofont icofont-pencil-alt-5' />
        </div>
      </div>
      <div className='user-content text-center'>
        <h5>{"MARK JENCO"}</h5>
        <div className='social-media'>
          <SocialMediaIcons />
        </div>
        <hr />
        <div className='follow text-center'>
          <Row>
            <Col className='border-right'>
              <span>{Following}</span>
              <div className='follow-num'>236k</div>
            </Col>
            <Col>
              <span>{Follower}</span>
              <div className='follow-num'>3691k</div>
            </Col>
          </Row>
        </div>
        <hr />
        <div className='text-center digits'>
          <p className='mb-0'>{"Markjecno@gmail.com"}</p>
          <p className='mb-0'>+91 365 - 658 - 1236</p>
          <p className='mb-0'>{Fax}: 123-4560 </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
