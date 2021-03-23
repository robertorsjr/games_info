import React from 'react';
import { CustomModal, Description, Icon, Wrapper } from './styles'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function Modal({description, showModal, setShowAbout}) {
  return (
    <CustomModal isOpen={showModal} onRequestClose={() => {}} shouldCloseOnOverlayClick={false}>
      <Wrapper>
        <Icon icon={faTimes} size={'3x'} color={'white'} onClick={() => setShowAbout(false)} />
        <Description>{description}</Description>    
      </Wrapper>
    </CustomModal>
  );
}

export default Modal;