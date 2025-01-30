import { Facebook, Linkedin, Twitter } from "react-feather";
import { FacebookHeading, LinkedInHeading, TwitterHeading } from "@/utils/Constant";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { Button } from "reactstrap";
import { toast } from "react-toastify";

const SocialApp = () => {
  const handlesubmit = () => {
    toast.error("This is only demo purpose, click on the Sign In button to login.");
  };
  return (
    <div className='social mt-4'>
      <div className='btn-showcase'>
        <Button tag={'a'} color="light" onClick={handlesubmit} target='_blank' rel='noreferrer'>
          <Linkedin className='txt-linkedin' /> {LinkedInHeading}
        </Button>
        <Button tag={'a'} color="light" onClick={handlesubmit} target='_blank' rel='noreferrer'>
          <Twitter className='txt-twitter' />
          {TwitterHeading}
        </Button>
        <Button tag={'a'} color="light" onClick={handlesubmit} target='_blank' rel='noreferrer'>
          <Facebook className='txt-fb' />
          {FacebookHeading}
        </Button>
      </div>
    </div>
  );
};

export default SocialApp;
