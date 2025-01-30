import { Card, CardHeader } from "reactstrap";
import { CreatedByMe, Href, Print } from "@/utils/Constant";
import { Printer } from "react-feather";
import CreatedByme from "./CreatedByme";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import { useRef } from "react";

const ListOfTask = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    contentRef,
  });
  return (
    <Card className="mb-0">
      <CardHeader className="d-flex">
        <h3 className="mb-0">{CreatedByMe}</h3>
        <a href={Href} onClick={() => handlePrint()}>
          <Printer className="me-2" />
          {Print}
        </a>
      </CardHeader>
      <div ref={contentRef}>
        <CreatedByme />
      </div>
    </Card>
  );
};

export default ListOfTask;
