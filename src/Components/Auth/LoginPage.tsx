"use client";
import { useState } from "react";
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { toast } from "react-toastify";
import { CreateAccount, DoNotAccount, EmailAddress, ForgotPassword, Href, Password, RememberPassword, SignIn, SignInAccount, SignInWith } from "@/utils/Constant";
import SocialApp from "./SocialApp";
import Link from "next/link";
import { useRouter } from "next/navigation";
import imageOne from "../../../public/assets/images/logo/logo-1.png";
import imageTwo from "../../../public/assets/images/logo/logo.png";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("Test123@gmail.com");
  const [password, setPassword] = useState("Test@123");
  const router = useRouter();

  const formSubmitHandle = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/dashboards/crmdashboard",
    });

    if (result?.ok) {
      toast.success("successfully Logged in Rediract......");
      router.push("/dashboards/crmdashboard");
    } else {
      toast.error("Invalid Credentaial...");
    }
  };
  return (
    <Container fluid className='p-0'>
      <Row className='m-0'>
        <Col xs={12} className='p-0'>
          <div className='login-card login-dark'>
            <div>
              <div>
                <Link className='logo text-center' href={Href}>
                  <img className='img-fluid for-light' src={imageOne.src} alt='looginpage' />
                  <img className='img-fluid for-dark' src={imageTwo.src} alt='looginpage' />
                </Link>
              </div>
              <div className='login-main'>
                <Form className='theme-form' onSubmit={(event) => formSubmitHandle(event)}>
                  <h3>{SignInAccount}</h3>
                  <p>{"Enter your email & password to login"}</p>
                  <FormGroup>
                    <Label className='col-form-label'>{EmailAddress}</Label>
                    <Input type='email' required placeholder='Test@gmail.com' value={email} name='email' onChange={(event) => setEmail(event.target.value)} />
                  </FormGroup>
                  <FormGroup>
                    <Label className='col-form-label'>{Password}</Label>
                    <div className='form-input position-relative'>
                      <Input type={show ? "text" : "password"} placeholder='*********' onChange={(event) => setPassword(event.target.value)} value={password} name='password' />
                      <div className='show-hide' onClick={() => setShow(!show)}>
                        <span className='show'> </span>
                      </div>
                    </div>
                  </FormGroup>
                  <FormGroup className='mb-0 form-sub-title'>
                    <div className='checkbox p-0'>
                      <Input id='checkbox1' type='checkbox' />
                      <Label className='text-muted' htmlFor='checkbox1'>
                        {RememberPassword}
                      </Label>
                    </div>
                    <Link className='link' href={`/pages/authentication/forgetpassword`}>
                      {ForgotPassword}
                    </Link>
                    <div className='text-end mt-3'>
                      <Button color='primary' block className='w-100' type='submit'>
                        {SignIn}
                      </Button>
                    </div>
                  </FormGroup>
                  <h4 className='text-muted mt-4 or'>{SignInWith}</h4>
                  <SocialApp />
                  <p className='mt-4 mb-0 text-center'>
                    {DoNotAccount}
                    <Link className='ms-2' href={`/pages/commingsoon/commingsimple`}>
                      {CreateAccount}
                    </Link>
                  </p>
                </Form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;

 
