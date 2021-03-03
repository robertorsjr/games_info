import React from 'react';
import styled from "styled-components"
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const CustomModal = styled(Modal)`
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  position: relative;
  width: 600px;
  background: #161618;
  border-radius: 20px;
  padding: 50px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;  
`

const Description = styled.span`
  font-family: 'Noto Sans';
  font-style: normal;
  font-size: 16px;
  color: #FFFFFF;
  margin-top: 34px;
  margin-right: 48px;
`


const Icon = styled(FontAwesomeIcon)`
  display: flex;
  align-self: flex-end;
  cursor: pointer;
`

function ModalGame({description, showModal, setShowAbout}) {
  return (
    <CustomModal isOpen={showModal} onRequestClose={() => {}} shouldCloseOnOverlayClick={false}>
      <Wrapper>
        <Icon icon={faTimes} size={'3x'} color={'white'} onClick={() => setShowAbout(false)} />
        <Description>{description}</Description>    
      </Wrapper>
    </CustomModal>
  );
}

export default ModalGame;