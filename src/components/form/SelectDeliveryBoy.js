import React, { useContext } from 'react';
import { Select } from '@windmill/react-ui';

import OrderServices from '../../services/OrderServices';
import { notifySuccess, notifyError } from '../../utils/toast';

const SelectDeliveryBoy = ({ id }) => {
  const handleAssignOrder = (id, boy) => {
    OrderServices.updateOrder(id, { deliveryboy: boy })
      .then((res) => {
        notifySuccess(res.message);
      })
      .catch((err) => notifyError(err.message));
  };

  return (
    <>
      <Select
        onChange={(e) => handleAssignOrder(id, e.target.value)}
        className="border border-gray-50 bg-gray-50 dark:border-gray-700 h-8 rounded-md text-xs focus:border-gray-400 focus:outline-none"
      >
        <option value="Status" defaultValue hidden>
          Status
        </option>
        <option value="Delivered">Delivered</option>
        <option value="Pending">Pending</option>
        <option value="Processing">Processing</option>
        <option value="Cancel">Cancel</option>
      </Select>
    </>
  );
};

export default SelectDeliveryBoy;
