import React, { useContext, useEffect } from 'react';
import { CSVDownloader } from 'react-papaparse';
import {
  Table,
  TableHeader,
  TableCell,
  TableFooter,
  TableContainer,
  Select,
  Input,
  Card,
  CardBody,
  Pagination,
  Button,
} from '@windmill/react-ui';
import { IoCloudDownloadOutline } from 'react-icons/io5';

import orderData from '../utils/orders';
import useAsync from '../hooks/useAsync';
import useFilter from '../hooks/useFilter';
import NotFound from '../components/table/NotFound';
import OrderServices from '../services/OrderServices';
import Loading from '../components/preloader/Loading';
import OrderTable from '../components/order/OrderTable';
import PageTitle from '../components/Typography/PageTitle';
import axios from 'axios';
import AdminServices from '../services/AdminServices';
import { AdminContext } from '../context/AdminContext';
import OrderDrawer from '../components/drawer/OrderDrawer';
import { SidebarContext } from '../context/SidebarContext';
import MainDrawer from '../components/drawer/MainDrawer';
import { FiPlus } from 'react-icons/fi';

const Orders = () => {
  const { data, loading } = useAsync(OrderServices.getAllOrders);
  const { toggleDrawer } = useContext(SidebarContext);
  const {
    orderRef,
    setStatus,
    setTime,
    handleChangePage,
    totalResults,
    resultsPerPage,
    dataTable,
    serviceData,
    handleSubmitOrder,
  } = useFilter(data);
  return (
    <>
      <PageTitle>Orders</PageTitle>
      {/* <MainDrawer>
        <OrderDrawer />
      </MainDrawer> */}
      <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
        <CardBody>
          <form
            onSubmit={handleSubmitOrder}
            className="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:grid-cols-4 xl:grid-cols-4"
          >
            <div>
              <Input
                ref={orderRef}
                type="search"
                className="hidden border h-12 text-sm focus:outline-none w-full bg-gray-100 border-transparent focus:bg-white"
                placeholder="Search by phone"
              />
            </div>
            <div>
              <Select
                onChange={(e) => setStatus(e.target.value)}
                className="hidden border h-12 text-sm focus:outline-none w-full bg-gray-100 border-transparent focus:bg-white"
              >
                <option value="Status" defaultValue hidden>
                  Status
                </option>
                <option value="Delivered">Delivered</option>
                <option value="Pending">Pending</option>
                <option value="Processing">Processing</option>
                <option value="Cancel">Cancel</option>
              </Select>
            </div>
            <div>
              <Select
                onChange={(e) => setTime(e.target.value)}
                className="border h-12 text-sm focus:outline-none hidden w-full bg-gray-100 border-transparent focus:bg-white"
              >
                <option value="Order limits" defaultValue hidden>
                  Order limits
                </option>
                <option value="5">Last 5 days orders</option>
                <option value="7">Last 7 days orders</option>
                <option value="15">Last 15 days orders</option>
                <option value="30">Last 30 days orders</option>
              </Select>
            </div>
            <div className='flex'>
              {/* <CSVDownloader data={orderData} filename={'orders'}>
                <button className="flex items-center justify-center text-sm leading-5 h-12 w-full text-center transition-colors duration-150 font-medium focus:outline-none px-6 py-2 rounded-md text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300">
                  Downloaed all Orders
                  <span classNam="ml-2 text-base">
                    <IoCloudDownloadOutline />
                  </span>
                </button>
              </CSVDownloader> */}
              <Button onClick={toggleDrawer} className="hidden w-full md:w-56 lg:w-56 xl:w-56 rounded-md h-12">
                <span className="mr-3">
                  <FiPlus />
                </span>
                Add Order
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>

      {loading ? (
        <Loading loading={loading} />
      ) : serviceData.length !== 0 ? (
        <TableContainer className="mb-8">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>SR NO</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Shipping Address</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Method</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell className="text-center">Status</TableCell>
                <TableCell className="text-center">Action</TableCell>
                <TableCell className="text-right">Invoice</TableCell>
              </tr>
            </TableHeader>
            <OrderTable orders={dataTable} />
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
      ) : (
        <NotFound title="Order" />
      )}
    </>
  );
};

export default Orders;
