import { useState } from "react";

import Button from "components/Button/Button";
import Modal from "components/Modal/Modal";
import { ButtonControl, Consultation10Wrapper, ModalContent } from "./styles";

function Consultation10() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <Consultation10Wrapper>
      <ButtonControl>
        <Button name='OPEN MODAL' onClick={openModal} />
      </ButtonControl>
      <Modal open={isModalOpen} onClose={closeModal}>
        <ModalContent>Hello world!</ModalContent>
        <Button name='close' onClick={closeModal} />
      </Modal>
    </Consultation10Wrapper>
  )
}

export default Consultation10