import { useState } from 'react'
import ReactDatePicker from 'react-datepicker';
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { CompanyName, Location, Period, Position } from '@/utils/Constant';
import { Typeahead } from 'react-bootstrap-typeahead';
import { positionsData } from '@/Data/JobSearch/CardViewData';

const ExperienceClass = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const handleChange2 = (date: Date | null) => setStartDate(date);
  const handleChange3 = (date: Date | null) => setEndDate(date);

  return (
    <Form className="theme-form form">
      <Row>
        <Col xl={6} className="xl-100">
          <FormGroup>
            <Label>{Location}:<span className="font-danger">*</span></Label>
            <Input type="text" placeholder="Enter Location" />
          </FormGroup>
        </Col>
        <Col xl={6} className="ExperienceClass">
          <Label className="col-form-label text-end pt-0">{Period}:<span className="font-danger">*</span></Label>
          <Row>
            <Col sm={6}>
              <FormGroup>
                <ReactDatePicker className="form-control digits" selected={startDate} onChange={handleChange2}/>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup>
                <ReactDatePicker className="form-control digits" selected={endDate} onChange={handleChange3}/>
              </FormGroup>
            </Col>
          </Row>
        </Col>
        <Col xl={6} className="xl-100">
          <div className="col-form-label pt-0">{Position}:<span className="font-danger">*</span></div>
          <FormGroup>
            <Typeahead labelKey="name" multiple={false} options={positionsData} id="Position" placeholder="Enter Position"/>
          </FormGroup>
        </Col>
        <Col xl={6} className="xl-100">
          <FormGroup>
            <Label >{CompanyName}:<span className="font-danger">*</span></Label>
            <Input type="text" placeholder="Enter Company Name"/>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  )
}

export default ExperienceClass