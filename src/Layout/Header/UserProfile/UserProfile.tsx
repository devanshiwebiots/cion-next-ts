import Image from "next/image";
import ProfileBox from "./ProfileBox";
import { ImagePath } from "@/Constant";
import { Admin, HelenWalter } from "@/utils/Constant";
import { useSession } from "next-auth/react";

const UserProfile = () => {
  const { data: session } = useSession();

  return (
    <li className='profile-nav onhover-dropdown pe-0 py-0'>
      <div className='d-flex align-items-center profile-media'>
        <Image className='b-r-25' src={session?.user?.image || `${ImagePath}/dashboard/profile.png`} alt='' height={40} width={40} />
        <div className='flex-grow-1 user'>
          <span>{session?.user?.email || HelenWalter}</span>
          <p className='mb-0 font-nunito'>
            {session?.user?.name || Admin}
            <i className='middle fa fa-angle-down'></i>
          </p>
        </div>
      </div>
      <ProfileBox />
    </li>
  );
};

export default UserProfile;
