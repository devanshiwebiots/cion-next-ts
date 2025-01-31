import { Button, CardBody, Input, InputGroup } from 'reactstrap'
import { Info, Secondary } from '@/utils/Constant'
import SegmentedButtonsCommonDropDown from './SegmentedButtonsCommonDropDown'
import { firstSegmentedButtonsDropDowns, secondSegmentedButtonsDropDowns } from '@/Data/Form/FormControl/FormControlData'

const SegmentedButtonsCardBody = () => {
  return (
    <CardBody className="main-segment-btn card-wrapper input-group-wrapper">
      <InputGroup>
        <Button outline color="info">{Info}</Button>
        <SegmentedButtonsCommonDropDown toggleColor="info" dropdownItems={firstSegmentedButtonsDropDowns}/>
        <Input type="text" />
      </InputGroup>
      <InputGroup>
        <Input type="text" />
        <Button outline color="secondary" >{Secondary}</Button>
        <SegmentedButtonsCommonDropDown toggleColor="secondary" dropdownItems={secondSegmentedButtonsDropDowns}/>
      </InputGroup>
    </CardBody>
  )
}

export default SegmentedButtonsCardBody