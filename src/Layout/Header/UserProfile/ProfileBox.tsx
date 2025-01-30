import { profilesMessage } from "@/Data/Layout/Header/ProfilesData";
import FeatherIcons from "@/utils/CommonSvgIcon/FeatherIcons";
import { signOut } from "next-auth/react";
import Link from "next/link";

const ProfileBox = () => {
  const handleLogout = () => {
    signOut();
  };
  return (
    <ul className='profile-dropdown onhover-show-div'>
      {profilesMessage.map((data, index) => (
        <li key={index}>
          <Link href={data.link} onClick={handleLogout}>
            <FeatherIcons iconName={data.icon} />
            <span>{data.name}</span>
          </Link>
        </li>
      ))}
      <li onClick={handleLogout}>
        <FeatherIcons iconName={"LogOut"} />
        <span>{"Log Out"}</span>
      </li>
    </ul>
  );
};

export default ProfileBox;
