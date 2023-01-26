import React, { useState } from 'react';
import ToastMessage from './ToastMessage';
import {getRandomValue} from 'configs/utils';

// Images
import checkIcon from 'assets/images/toast/check.svg';
import errorIcon from 'assets/images/toast/error.svg';
import infoIcon from 'assets/images/toast/info.svg';
import warningIcon from 'assets/images/toast/warning.svg';

const Toast = () => {
    const [list, setList] = useState([]);

    const showToastMessage = (type, message) => {
        const id = getRandomValue(101);
    
        let toastProperties = null;

        switch(type) {
          case 'success':
            toastProperties = {
              id,
              title: 'Success',
              description: message,
              backgroundColor: '#5cb85c',
              icon: checkIcon
            }
            break;
          case 'danger':
            toastProperties = {
              id,
              title: 'Danger',
              description: message,
              backgroundColor: '#d9534f',
              icon: errorIcon
            }
            break;
          case 'info':
            toastProperties = {
              id,
              title: 'Info',
              description: message,
              backgroundColor: '#5bc0de',
              icon: infoIcon
            }
            break;
          case 'warning':
            toastProperties = {
              id,
              title: 'Warning',
              description: message,
              backgroundColor: '#f0ad4e',
              icon: warningIcon
            }
            break;
    
            default:
              setList([]);
        }
    
        setList([...list, toastProperties]);
      }

    return (
        <ToastMessage 
            toastList={list}
            position={'topRight'}
            autoDelete={true}
            autoDeleteTime={3000}
      />
    )
}

export const showToast = (type, message) => {
    Toast.showToastMessage(type, message)
};
export default Toast;
