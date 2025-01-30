import CommonHeader from '@/Common/CommonHeader';
import { ClipBoardOnTextInputHeading, Copy, Cut } from '@/utils/Constant';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Button, Card, CardBody, Col, Input } from 'reactstrap';

const ClipboardOnTextInput = () => {
  const [clipboardTextValue, setClipboardTextValue] = useState({ value: "", copied: false });
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(clipboardTextValue.value);
      setClipboardTextValue({ value: clipboardTextValue.value, copied: true });
    } catch (err) {
      toast.error("Failed to copy text: " + err);
    }
  };

  const handleCut = async () => {
    try {
      await navigator.clipboard.writeText(clipboardTextValue.value);
      setClipboardTextValue({ value: "", copied: false });
    } catch (err) {
      toast.error("Failed to cut text: " + err);
    }
  };

  return (
    <Col sm={12} md={6}>
      <Card>
        <CommonHeader title={ClipBoardOnTextInputHeading} headClass="pb-0" />
        <CardBody>
          <div className="clipboaard-container ">
            <p className="f-16">{"Cut/copy from textarea"}</p>
            <Input type="text" placeholder="type some text to copy / cut" value={clipboardTextValue.value} onChange={({ target: { value } }) => setClipboardTextValue({ value, copied: false })} />
            <div className="mt-3 text-end">
                <Button className="btn-clipboard me-2" color="primary" onClick={handleCopy}>
                    <i className="fa fa-copy"></i> {Copy}
                </Button> 
                <Button className="btn-clipboard-cut" color="secondary" onClick={handleCut}>
                  <i className="fa fa-cut"></i> {Cut}
                </Button> 
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}

export default ClipboardOnTextInput