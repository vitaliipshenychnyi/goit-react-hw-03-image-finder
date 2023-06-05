import { Overlay } from './Modal.styled';
import { Modal } from './Modal.styled';

export const ModalImg = ({ urlBig, alt }) => {
  return (
    <Overlay>
      <Modal>
        <img src={urlBig} alt={alt} />
      </Modal>
    </Overlay>
  );
};
