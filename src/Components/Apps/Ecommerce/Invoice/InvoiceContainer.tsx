"use client";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { Ecommerce, Invoices } from "@/utils/Constant";
import InvoiceHeader from "./InvoiceHeader";
import UserInvoice from "./UserInvoice";
import InvoiceBody from "./InvoiceBody";
import InvoiceFooter from "./InvocieFooter";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const InvoiceContainer = () => {

   const contentRef = useRef<HTMLDivElement | null>(null);

   const handlePrint = useReactToPrint({
     contentRef,
   });

  return (
    <>
      <Breadcrumbs mainTitle={Invoices} parent={Ecommerce} title={Invoices} />
      <Container>
        <Row>
          <Col sm={12}>
            <Card>
              <CardBody>
                <div className="invoice" ref={contentRef}>
                  <div>
                    <div>
                      <InvoiceHeader />
                    </div>
                    <hr />
                    <UserInvoice />
                    <InvoiceBody />
                    <InvoiceFooter handlePrint={handlePrint} />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default InvoiceContainer;
