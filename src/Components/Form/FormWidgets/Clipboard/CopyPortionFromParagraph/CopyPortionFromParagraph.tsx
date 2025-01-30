import { Button, Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { CopyHighlighted, CopyParagraph, CopyText, CopyTextParagraph } from "@/utils/Constant";
import { toast } from "react-toastify";
import { useState } from "react";

const CopyPortionFromParagraph = () => {
   const ClipBoardParaGraph: string = "Copy Text";
   const [clipBoardValues, setClipBoardValues] = useState({ value: ClipBoardParaGraph, copied: false });

   const handleCopy = async () => {
     try {
       await navigator.clipboard.writeText(clipBoardValues.value);
       setClipBoardValues({ ...clipBoardValues, copied: true });

       setTimeout(() => {
         setClipBoardValues({ ...clipBoardValues, copied: false });
       }, 2000);
     } catch (err) {
       toast.error("Failed to copy text: " + err);
     }
   };
  return (
    <Col sm={12} md={6}>
      <Card className="height-equal">
        <CommonHeader title={CopyParagraph} headClass="pb-0" />
        <CardBody>
          <div className="clipboaard-container custom-scrollbar">
            <p className="f-16">{"Copy from paragraph"}</p>
            <h6 className="border rounded card-body f-w-300">
              <span className="bg-primary text-white p-1">{CopyText}</span>
              {CopyTextParagraph}
            </h6>
            <div className="mt-3 text-end">
                <Button className='btn-clipboard' color='secondary' onClick={handleCopy}>
                  <i className='fa fa-copy'></i> {CopyHighlighted}
                </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CopyPortionFromParagraph;
