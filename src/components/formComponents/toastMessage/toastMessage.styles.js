import styled from 'styled-components';

const toastPosition = (position) => {
    if(position === 'topRight') return {
        top: "12px",
        right: "12px",
        transition: "transform .6s ease-in-out",
        animation: "toast-in-right .7s"
    }
    if(position === 'bottomRight') return {
        bottom: "12px",
        right: "12px",
        transition: "transform .6s ease-in-out",
        animation: "toast-in-right .7s"
    }
    if(position === 'topLeft') return {
        top: "12px",
        left: "12px",
        transition: "transform .6s ease-in",
        animation: "toast-in-left .7s"
    }
    if(position === 'bottomLeft') return {
        bottom: "12px",
        left: "12px",
        transition: "transform .6s ease-in",
        animation: "toast-in-left .7s"
    }
}
export const ToastMessageNotificationContainer = styled.div`
    font-size: 14px;
    box-sizing: border-box;
    position: fixed;
    z-index: 999999;
    /* ${props => toastPosition(props.position)} */
    top: 12px;
    right: 12px;
    transition: transform .6s ease-in-out;
    animation: toast-in-right .7s;

    & > button {
        position: relative;
        right: -.3em;
        top: -.3em;
        float: right;
        font-weight: 700;
        color: #fff;
        outline: none;
        border: none;
        text-shadow: 0 1px 0 #fff;
        opacity: .8;
        line-height: 1;
        font-size: 16px;
        padding: 0;
        cursor: pointer;
        background: 0 0;
        border: 0
    }
`;

export const ToastMessageToast = styled.div`
    height: 50px;
    width: 365px;
	color: #fff;
	padding: 20px 15px 10px 10px;
`;

export const ToastMessageNotification = styled.div`
    background: #fff;
	transition: .3s ease;
	position: relative;
	pointer-events: auto;
	overflow: hidden;
	margin: 0 0 6px;
	padding: 30px;
	margin-bottom: 15px;
	width: 300px;
	max-height: 100px;
	border-radius: 3px 3px 3px 3px;
	box-shadow: 0 0 10px #999;
	color: #000;
	opacity: .9;
	background-position: 15px;
	background-repeat: no-repeat;

    :hover {
        box-shadow: 0 0 12px #fff;
        opacity: 1;
        cursor: pointer
    }
`;

export const ToastMessageNotificationTitle = styled.p`
    font-weight: 700;
	font-size: 16px;
	text-align: left;
	margin-top: 0;
	margin-bottom: 6px;
    width: 300px;
    height: 18px;
`;

export const ToastMessage = styled.p`
    margin: 0;
	text-align: left;
    height: 18px;
    margin-left: -1px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const ToastMessageNotificationImage = styled.div`
    float: left;
    margin-right: 15px;

    & > img {
        width: 30px;
        height: 30px;
    }
`;