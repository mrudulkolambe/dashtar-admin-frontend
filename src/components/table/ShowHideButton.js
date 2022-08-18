import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';

import { notifySuccess, notifyError } from '../../utils/toast';
import ProductServices from '../../services/ProductServices';
import CategoryServices from '../../services/CategoryServices';
import { SidebarContext } from '../../context/SidebarContext';

const ShowHideButton = ({ id, status }) => {
  const location = useLocation();
  const { setIsUpdate } = useContext(SidebarContext);

  const handleChangeStatus = (id) => {
    let newStatus;
    if (status === 'Show') {
      newStatus = 'Hide';
    } else {
      newStatus = 'Show';
    }

    if (location.pathname === '/category') {
      CategoryServices.updateStatus(id, { status: newStatus })
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
    }

    if (location.pathname === '/products') {
      ProductServices.updateStatus(id, { status: newStatus })
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
    }
  };

  return (
    <span
      className="cursor-pointer text-xl flex justify-center text-center"
      onClick={() => handleChangeStatus(id)}
    >
      {status === 'Show' ? (
        <BsToggleOn className="text-green-500" />
      ) : (
        <BsToggleOff className="text-orange-500" />
      )}
    </span>
  );
};

export default ShowHideButton;
