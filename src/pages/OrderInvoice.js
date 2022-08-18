import dayjs from 'dayjs';
import { useParams } from 'react-router';
import ReactToPrint from 'react-to-print';
import React, { useContext, useRef } from 'react';
import { FiPrinter } from 'react-icons/fi';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import {
  TableCell,
  TableHeader,
  Table,
  TableContainer,
  WindmillContext,
} from '@windmill/react-ui';
import { PDFDownloadLink } from '@react-pdf/renderer';

import useAsync from '../hooks/useAsync';
import Status from '../components/table/Status';
import OrderServices from '../services/OrderServices';
import Invoice from '../components/invoice/Invoice';
import Loading from '../components/preloader/Loading';
import logoDark from '../assets/img/logo/logo-dark.svg';
import logoLight from '../assets/img/logo/logo-light.svg';
import PageTitle from '../components/Typography/PageTitle';
import InvoiceForDownload from '../components/invoice/InvoiceForDownload';

const OrderInvoice = () => {
  const { mode } = useContext(WindmillContext);
  const { id } = useParams();
  const printRef = useRef();

  const { data, loading } = useAsync(() => OrderServices.getOrderById(id));

  return (
    <>
      <PageTitle>Invoice</PageTitle>

      <div
        ref={printRef}
        className="bg-white dark:bg-gray-800 mb-4 p-6 lg:p-8 rounded-xl shadow-sm overflow-hidden"
      >
        {!loading && (
          <div className="">
            <div className="flex lg:flex-row md:flex-row flex-col lg:items-center justify-between pb-4 border-b border-gray-50 dark:border-gray-700 dark:text-gray-300">
              <h1 className="font-bold font-serif text-xl uppercase">
                Invoice
                <p className="text-xs mt-1 text-gray-500">
                  Status:{' '}
                  <span className="pl-2 font-medium text-xs capitalize">
                    {' '}
                    <Status status={data.status} />
                  </span>
                </p>
              </h1>
              <div className="lg:text-right text-left">
                <h2 className="lg:flex lg:justify-end text-lg font-serif font-semibold mt-4 lg:mt-0 lg:ml-0 md:mt-0">
                  {mode === 'dark' ? (
                    <img src={logoLight} alt="dashtar" width="110" />
                  ) : (
                    <img src={logoDark} alt="dashtar" width="110" />
                  )}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Cecilia Chapman, 561-4535 Nulla LA, <br /> United States 96522{' '}
                </p>
              </div>
            </div>
            <div className="flex lg:flex-row md:flex-row flex-col justify-between pt-4">
              <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col">
                <span className="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                  Date
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 block">
                  {data.createdAt !== undefined && (
                    <span>{dayjs(data?.createdAt).format('MMMM D, YYYY')}</span>
                  )}
                </span>
              </div>
              <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col">
                <span className="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                  Invoice No
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 block">
                  #10012
                </span>
              </div>
              <div className="flex flex-col lg:text-right text-left">
                <span className="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                  Invoice To.
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 block">
                  {data.name}
                  <br />
                  {data.address.substring(0, 25)}
                  <br />
                  {data.city}, {data.country}, {data.zipCode}
                </span>
              </div>
            </div>
          </div>
        )}
        <div>
          {loading ? (
            <Loading loading={loading} />
          ) : (
            <TableContainer className="my-8">
              <Table>
                <TableHeader>
                  <tr>
                    <TableCell> Sr.</TableCell>
                    <TableCell>Product Name</TableCell>
                    <TableCell className="text-center">Quantity</TableCell>
                    <TableCell className="text-center">Item Price</TableCell>
                    <TableCell className="text-center">Amount</TableCell>
                  </tr>
                </TableHeader>
                <Invoice data={data} />
              </Table>
            </TableContainer>
          )}
        </div>

        {!loading && (
          <div className="border rounded-xl border-gray-100 p-8 py-6 bg-gray-50 dark:bg-gray-900 dark:border-gray-800">
            <div className="flex lg:flex-row md:flex-row flex-col justify-between">
              <div className="mb-3 md:mb-0 lg:mb-0  flex flex-col sm:flex-wrap">
                <span className="mb-1 font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                  Payment Method
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 font-semibold font-serif block">
                  {data.paymentMethod}
                </span>
              </div>
              <div className="mb-3 md:mb-0 lg:mb-0  flex flex-col sm:flex-wrap">
                <span className="mb-1 font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                  Shipping Cost
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 font-semibold font-serif block">
                  ${Math.round(data.shippingCost)}.00
                </span>
              </div>
              <div className="mb-3 md:mb-0 lg:mb-0  flex flex-col sm:flex-wrap">
                <span className="mb-1 font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                  Discount
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 font-semibold font-serif block">
                  ${Math.round(data.discount)}.00
                </span>
              </div>
              <div className="flex flex-col sm:flex-wrap">
                <span className="mb-1 font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                  Total Amount
                </span>
                <span className="text-xl font-serif font-bold text-red-500 dark:text-green-500 block">
                  ${Math.round(data.total)}.00
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
      {!loading && (
        <div className="mb-4 mt-3 flex justify-between">
          <PDFDownloadLink
            document={<InvoiceForDownload data={data} />}
            fileName="Invoice"
          >
            {({ blob, url, loading, error }) =>
              loading ? (
                'Loading...'
              ) : (
                <button className="flex items-center text-sm leading-5 transition-colors duration-150 font-medium focus:outline-none px-5 py-2 rounded-md text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300 w-auto cursor-pointer">
                  Download Invoice{' '}
                  <span className="ml-2 text-base">
                    <IoCloudDownloadOutline />
                  </span>
                </button>
              )
            }
          </PDFDownloadLink>

          <ReactToPrint
            trigger={() => (
              <button className="flex items-center text-sm leading-5 transition-colors duration-150 font-medium focus:outline-none px-5 py-2 rounded-md text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300 w-auto">
                Print Invoice{' '}
                <span className="ml-2">
                  <FiPrinter />
                </span>
              </button>
            )}
            content={() => printRef.current}
            documentTitle="Invoice"
          />
        </div>
      )}
    </>
  );
};

export default OrderInvoice;
