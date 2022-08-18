import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Table,
  TableHeader,
  TableCell,
  TableFooter,
  TableContainer,
  Pagination,
} from '@windmill/react-ui';
import { IoBagHandle } from 'react-icons/io5';

import useAsync from '../hooks/useAsync';
import useFilter from '../hooks/useFilter';
import OrderServices from '../services/OrderServices';
import Loading from '../components/preloader/Loading';
import PageTitle from '../components/Typography/PageTitle';
import CustomerOrderTable from '../components/customer/CustomerOrderTable';

const CustomerOrder = () => {
  const { id } = useParams();

  const { data, loading, error } = useAsync(() =>
    OrderServices.getOrderByUser(id)
  );

  const { handleChangePage, totalResults, resultsPerPage, dataTable } =
    useFilter(data);

  return (
    <>
      <PageTitle>Customer Order List</PageTitle>

      {loading && <Loading loading={loading} />}
      {!error && !loading && dataTable.length === 0 && (
        <div className="w-full bg-white rounded-md dark:bg-gray-800">
          <div className="p-8 text-center">
            <span className="flex justify-center my-30 text-red-500 font-semibold text-6xl">
              <IoBagHandle />
            </span>
            <h2 className="font-medium text-base mt-4 text-gray-600">
              This Customer have no order Yet!
            </h2>
          </div>
        </div>
      )}

      {data.length > 0 && !error && !loading ? (
        <TableContainer className="mb-8">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>Order ID</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Shipping Address</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Method</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell className="text-center">Status</TableCell>
                <TableCell className="text-center">Actions</TableCell>
              </tr>
            </TableHeader>
            <CustomerOrderTable orders={dataTable} />
          </Table>
          <TableFooter>
            <Pagination
              totalResults={totalResults}
              resultsPerPage={resultsPerPage}
              onChange={handleChangePage}
              label="Table navigation"
            />
          </TableFooter>
        </TableContainer>
      ) : null}
    </>
  );
};

export default CustomerOrder;
