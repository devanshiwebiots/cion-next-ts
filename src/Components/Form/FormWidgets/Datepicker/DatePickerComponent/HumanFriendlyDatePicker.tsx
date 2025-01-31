import { Col, InputGroup, Label, Row } from "reactstrap";
import { HumanFriendly } from "@/utils/Constant";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";

const HumanFriendlyDatePicker = () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const handleChange = (date: Date | null) => {
      setStartDate(date);
    };
  return (
    <Row>
      <Col xxl={3}>
        <Label className="box-col-12 text-start">{HumanFriendly}</Label>
      </Col>
      <Col xxl={9} className="box-col-12">
        <InputGroup className="flatpicker-calender">
          <ReactDatePicker
            className="form-control flatpickr-input"
            selected={startDate}
            onChange={handleChange}
            dateFormat="MMMM dd,yyyy"
          />
        </InputGroup>
      </Col>
    </Row>
  );
};

export default HumanFriendlyDatePicker;
