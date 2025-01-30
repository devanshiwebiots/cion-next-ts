import { PrintModalPropsTypes } from '@/Types/Apps/ContactTypes';
import { Cancel, Print, PrintViews } from '@/utils/Constant';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Button, Modal, ModalBody } from 'reactstrap';
import PrintPreview from './PrintPreview';

const PrintModal:React.FC<PrintModalPropsTypes> = ({ printModal, selectedUser, toggleCallback }) => {
 const contentRef = useRef<HTMLDivElement | null>(null);

 const handlePrint = useReactToPrint({
   contentRef,
 });

 const printModalToggle = () => {
   toggleCallback(false);
   handlePrint();
 };

 const closePrintModal = () => {
   toggleCallback(false);
 };

  return (
    <Modal fade className="modal-bookmark" isOpen={printModal} toggle={printModalToggle}>
      <div className="modal-header">
        <h3 className="modal-title">{PrintViews}</h3>
        <Button color="transprant" close onClick={printModalToggle}></Button>
      </div>
      <ModalBody className="list-persons">
        <PrintPreview selectedUser={selectedUser} />
        <Button color="secondary" className="me-1" onClick={printModalToggle}>
          {Print}
        </Button>
        <Button color="primary" onClick={closePrintModal}>
          {Cancel}
        </Button>
      </ModalBody>
    </Modal>
  );
}

export default PrintModal