import React from 'react';
import { TableCell, TableBody, TableRow } from '@windmill/react-ui';

const Invoice = ({ data }) => {
  return (
    <>
      <TableBody className="bg-white dark:bg-gray-800 divide-y divide-gray-100 text-serif text-sm ">
        {data?.cart?.map((item, i) => (
          <TableRow key={i} className="dark:border-gray-700 dark:text-gray-400">
            <TableCell className="px-6 py-1 whitespace-nowrap font-normal text-gray-500 text-left">
              {i + 1}{' '}
            </TableCell>
            <TableCell className="px-6 py-1 whitespace-nowrap font-normal text-gray-500">
              {item.title}
            </TableCell>
            <TableCell className="px-6 py-1 whitespace-nowrap font-bold text-center">
              {item.quantity}{' '}
            </TableCell>
            <TableCell className="px-6 py-1 whitespace-nowrap font-bold text-center">
              ${item.price}.00{' '}
            </TableCell>

            <TableCell className="px-6 py-1 whitespace-nowrap text-center font-bold text-red-500 dark:text-green-500">
              ${item.itemTotal}.00
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default Invoice;
