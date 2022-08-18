import React from 'react';
import * as dayjs from 'dayjs';
import { TableCell, TableBody, TableRow } from '@windmill/react-ui';

import Status from '../table/Status';
import SelectStatus from '../form/SelectStatus';

const CustomerOrderTable = ({ orders }) => {
  return (
    <>
      <TableBody>
        {orders?.map((order) => (
          <TableRow key={order._id}>
            <TableCell>
              <span className="font-semibold uppercase text-xs">
                {order._id.substring(20, 24)}
              </span>
            </TableCell>
            <TableCell>
              <span className="text-sm">
                {dayjs(order.createdAt).format('MMM D, YYYY')}
              </span>
            </TableCell>

            <TableCell>
              <span className="text-sm">{order.address}</span>
            </TableCell>
            <TableCell>
              {' '}
              <span className="text-sm">{order.contact}</span>{' '}
            </TableCell>
            <TableCell>
              <span className="text-sm font-semibold">
                {order.paymentMethod}
              </span>
            </TableCell>
            <TableCell>
              {' '}
              <span className="text-sm font-semibold">
                ${Math.round(order.total)}.00
              </span>{' '}
            </TableCell>
            <TableCell className="text-center">
              <Status status={order.status} />
            </TableCell>
            <TableCell className="text-right">
              <SelectStatus id={order._id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default CustomerOrderTable;
