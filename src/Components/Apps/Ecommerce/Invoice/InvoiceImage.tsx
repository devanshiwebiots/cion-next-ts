import { ImagePath } from "@/Constant";
import Image from "next/image";
import { Col, Form, Row } from "reactstrap";

const InvoiceImage = () => {
  return (
    <Row>
      <Col md={8}>
        <div>
          <p className="legal">
            <strong>{"Thank you for your business!"}</strong> {"Payment is expected within 31 days; please process this invoice within that time. There will be a 5% interest charge per month on late invoices."}
          </p>
        </div>
      </Col>
      <Col md={4}>
        <Form className="text-end">
          <Image src={`${ImagePath}/other-images/paypal.png`} alt="PayPal" width={170} height={32}/>
        </Form>
      </Col>
    </Row>
  );
};

export default InvoiceImage;
