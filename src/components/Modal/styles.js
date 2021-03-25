import styled from "styled-components"
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const CustomModal = styled(Modal)`
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  position: fixed;
  width: 600px;
  background: #161618;
  border-radius: 20px;
  padding: 50px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;  
`

export const Description = styled.span`
  font-family: 'Noto Sans';
  font-style: normal;
  font-size: 16px;
  color: #FFFFFF;
  margin-top: 34px;
  margin-right: 48px;
`

export const Icon = styled(FontAwesomeIcon)`
  display: flex;
  align-self: flex-end;
  cursor: pointer;
`