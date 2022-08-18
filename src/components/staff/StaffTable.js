import React from 'react';
import * as dayjs from 'dayjs';
import { TableCell, TableBody, TableRow, Avatar } from '@windmill/react-ui';

import MainModal from '../modal/MainModal';
import MainDrawer from '../drawer/MainDrawer';
import StaffDrawer from '../drawer/StaffDrawer';
import useToggleDrawer from '../../hooks/useToggleDrawer';
import EditDeleteButton from '../table/EditDeleteButton';
import SelectOrder from '../form/SelectOrder';

const StaffTable = ({ staffs, orders }) => {
  console.log(staffs);
  const { serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();
  return (
    <>
      <MainModal id={serviceId} />
      <MainDrawer>
        <StaffDrawer id={serviceId} />
      </MainDrawer>

      <TableBody>
        {staffs && staffs.map((staff) => (
          <TableRow key={staff && staff._id}>
            <TableCell>
              <span className="font-semibold uppercase text-xs">
                {' '}
                {staff && staff._id.substring(20, 24)}
              </span>
            </TableCell>
            <TableCell>
              <div className="flex items-center">
                <Avatar
                  className="hidden mr-3 md:block bg-gray-50"
                  src={staff && staff.image}
                  alt={staff && staff.name}
                />
                <div>
                  <h2 className="text-sm font-medium">{staff && staff.name}</h2>
                </div>
              </div>
            </TableCell>

            <TableCell>
              <span className="text-sm">{staff && staff.email}</span>{' '}
            </TableCell>
            <TableCell>
              <span className="text-sm ">{staff && staff.phone}</span>
            </TableCell>

            <TableCell>
              <span className="text-sm">
                {dayjs(staff && staff.joiningData).format('MMM D, YYYY')}
              </span>
            </TableCell>
            <TableCell>
              <span className="text-sm ">{staff && staff.status}</span>
            </TableCell>
            <TableCell>
              <EditDeleteButton
                id={staff && staff._id}
                handleUpdate={handleUpdate}
                handleModalOpen={handleModalOpen}
              />
            </TableCell>
            <TableCell>
              <SelectOrder id={staff._id} orders={orders}/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default StaffTable;
