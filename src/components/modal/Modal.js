import OutsideAlerter from 'components/OutsideAlerter';
import React from 'react';
import * as S from './modal.styles';

const Modal = (props) => {
    return (
        <S.ModalBackdrop show={props.show}>
            <OutsideAlerter closeModal={props.setShow} >
                <S.ModalContainer width={props.width} height={props.height}>
                    <S.ModalInnerContainer>
                        <S.ModalHeader>{props.heading}</S.ModalHeader>
                        <S.ModalBody>
                            {props.children}
                        </S.ModalBody>
                    </S.ModalInnerContainer>
                </S.ModalContainer>
            </OutsideAlerter>
        </S.ModalBackdrop>
    )
}

export default Modal
