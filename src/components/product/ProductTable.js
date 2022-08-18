import React from 'react';
import { Link } from 'react-router-dom';
import {
  TableCell,
  TableBody,
  TableRow,
  Badge,
  Avatar,
} from '@windmill/react-ui';
import { FiEye } from 'react-icons/fi';

import Tooltip from '../tooltip/Tooltip';
import MainModal from '../modal/MainModal';
import MainDrawer from '../drawer/MainDrawer';
import ProductDrawer from '../drawer/ProductDrawer';
import ShowHideButton from '../table/ShowHideButton';
import EditDeleteButton from '../table/EditDeleteButton';
import useToggleDrawer from '../../hooks/useToggleDrawer';

const ProductTable = ({ products }) => {
  const { serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();

  return (
    <>
      <MainModal id={serviceId} />
      <MainDrawer>
        <ProductDrawer id={serviceId} />
      </MainDrawer>
      <TableBody>
        {products?.map((product, i) => (
          <TableRow key={i + 1}>
            <TableCell>
              <span className="text-xs uppercase font-semibold">
                {' '}
                {product._id.substring(18, 26)}
              </span>
            </TableCell>
            <TableCell>
              <div className="flex items-center">
                <Avatar
                  className="hidden p-1 mr-2 md:block bg-gray-50 shadow-none"
                  src={product.image}
                  alt={product.title}
                />
                <div>
                  <h2 className="text-sm font-medium">{product.title}</h2>
                </div>
              </div>
            </TableCell>
            <TableCell className='hidden'>
              <span className="text-sm">{product.parent}</span>
            </TableCell>

            <TableCell>
              <span className="text-sm font-semibold">${product.price}</span>
            </TableCell>

            <TableCell>
              <span className="text-sm">{product.quantity}</span>
            </TableCell>
            <TableCell>
              {product.quantity > 0 ? (
                <Badge type="success">Selling</Badge>
              ) : (
                <Badge type="danger">Sold Out</Badge>
              )}
            </TableCell>

            <TableCell>
              <span className="text-sm font-semibold">
                {product.discount !== 0 && (
                  <span>{product.discount.toFixed(0)}% Off</span>
                )}
              </span>
            </TableCell>
            <TableCell>
              <Link
                to={`/product/${product._id}`}
                className="flex justify-center text-center text-gray-400 hover:text-green-600"
              >
                <Tooltip
                  id="details"
                  Icon={FiEye}
                  title="Details"
                  bgColor="#10B981"
                />
              </Link>
            </TableCell>
            <TableCell>
              <ShowHideButton id={product._id} status={product.status} />
            </TableCell>
            <TableCell>
              <EditDeleteButton
                id={product._id}
                handleUpdate={handleUpdate}
                handleModalOpen={handleModalOpen}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default React.memo(ProductTable);
