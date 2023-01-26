import styled from 'styled-components';

export const ModalBackdrop = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgb(0, 0, 0, .2);
    position: absolute;
    top: 0;
    overflow: auto;
    display: ${props => props.show ? 'block' : 'none'};
`;

export const ModalContainer = styled.div`
    width: ${props => props.width ? props.width : '400px'};
    background-color: white;
    height: ${props => props.height ? props.height : '437px'};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    border-radius: 10px;
`;

export const ModalInnerContainer = styled.div`
    margin: 45px;
`;

export const ModalHeader = styled.div`
    font-family: RubikMedium;
    font-size: 20px;
    color: #142C1F;
    text-align: center;
    margin-bottom: 30px;
`;

export const ModalBody = styled.div`

`;