import React, { useContext, useState } from 'react';
import { Select } from '@windmill/react-ui';

import OrderServices from '../../services/OrderServices';
import { notifySuccess, notifyError } from '../../utils/toast';
import { SidebarContext } from '../../context/SidebarContext';
import AdminServices from '../../services/AdminServices';

const SelectOrder = ({ id, orders }) => {
	const { setIsUpdate } = useContext(SidebarContext);
	const [order, setOrder] = useState("")
	const handleChangeStatus = (id, orderID) => {
		console.log(orderID);
		AdminServices.updateStaff(id, { order: orderID })
			.then((res) => {
				notifySuccess(res.message);
				setIsUpdate(true);
				OrderServices.updateOrder(orderID, { status: 'Processing' })
					.then(() => {
						setOrder(orderID)
					})
			})
			.catch((err) => notifyError(err.message));
	};
	return (
		<>
			{order ? <div>{order}</div>
				: <Select
					onChange={(e) => handleChangeStatus(id, e.target.value)}
					className="border border-gray-50 bg-gray-50 dark:border-gray-700 h-8 rounded-md text-xs focus:border-gray-400 focus:outline-none"
				>
					<option value="" key={"a"} defaultValue hidden>
						select
					</option>
					{
						orders && orders.map((order, i) => {
							return <option value={order._id}>{`Order ${i + 1}`}</option>
						})
					}
				</Select>}
		</>
	);
};

export default SelectOrder;
