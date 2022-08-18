import { ToastContainer, toast } from 'react-toastify';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';

const notifySuccess = (message) =>
  toast.success(message, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

const notifyError = (message) =>
  toast.error(message, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

// eslint-disable-next-line no-unused-expressions
<ToastContainer
  position="top-center"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
/>;

export { ToastContainer, notifySuccess, notifyError };
