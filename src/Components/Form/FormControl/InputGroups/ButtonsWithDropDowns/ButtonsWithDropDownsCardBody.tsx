import { CardBody, Input, InputGroup } from 'reactstrap'
import CommonButtonsWithDropdown from './CommonButtonsWithDropdown/CommonButtonsWithDropdown'
import { firstButtonsWithDropDowns, fourthButtonsWithDropDowns, secondButtonsWithDropDowns, thirdButtonsWithDropDowns } from '@/Data/Form/FormControl/FormControlData'

const ButtonsWithDropDownsCardBody = () => {
  return (
    <CardBody className="main-custom-form card-wrapper input-group-wrapper">
      <InputGroup>
        <CommonButtonsWithDropdown dropdownItems={firstButtonsWithDropDowns} toggleColor={"info"}/>
        <Input type="text" />
      </InputGroup>
      <InputGroup>
        <Input type="text" />
        <CommonButtonsWithDropdown dropdownItems={secondButtonsWithDropDowns} toggleColor={"danger"}/>
      </InputGroup>
      <InputGroup>
        <CommonButtonsWithDropdown dropdownItems={thirdButtonsWithDropDowns} toggleColor={"secondary"}/>
        <Input type="text" />
        <CommonButtonsWithDropdown dropdownItems={fourthButtonsWithDropDowns} toggleColor={"primary"}/>
      </InputGroup>
    </CardBody>
  )
}

export default ButtonsWithDropDownsCardBody