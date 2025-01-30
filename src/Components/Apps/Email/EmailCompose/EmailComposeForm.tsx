import { Form, FormGroup, Input, Label } from "reactstrap";
import { Messages, Subject, To } from "@/utils/Constant";
import SimpleMDE from "react-simplemde-editor";
import { useState } from "react";
import CommonFileUpload from "@/Components/BonusUi/Dropzone/Common/CommonFileUpload";

const EmailComposeForm = () => {
  const [text, setText] = useState(`Enter text in the area on the left. For more info, click the ? (help) icon in the menu.`);
  const handleChange = () => {
    setText("Enter text in the area on the left. For more info, click the ? (help) icon in the menu.");
  };

   return (
    <div className='email-wrapper'>
      <Form className='theme-form'>
        <FormGroup>
          <Label className='col-form-label pt-0'>{To}</Label>
          <Input type='email' />
        </FormGroup>
        <FormGroup>
          <Label className='col-form-label pt-0'>{Subject}</Label>
          <Input type='text' value={""} />
        </FormGroup>
        <FormGroup>
          <Label className='col-form-label pt-0'>{Messages}</Label>
          <SimpleMDE id='editor_container' onChange={handleChange} value={text} options={{ autofocus: true, spellChecker: false }} />
        </FormGroup>
        <FormGroup>
          <CommonFileUpload/>
        </FormGroup>
      </Form>
    </div>
  );
};

export default EmailComposeForm;
