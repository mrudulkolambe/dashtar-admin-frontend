import * as dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import isToday from 'dayjs/plugin/isToday';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

//internal import
import ProductServices from '../services/ProductServices';
import { notifyError, notifySuccess } from '../utils/toast';

const useFilter = (data) => {
  const [filter, setFilter] = useState('');
  const [sortedField, setSortedField] = useState('');
  const [searchText, setSearchText] = useState('');
  const [searchUser, setSearchUser] = useState('');
  const [searchCoupon, setSearchCoupon] = useState('');
  const [searchOrder, setSearchOrder] = useState('');
  const [categoryType, setCategoryType] = useState('');
  const [pending, setPending] = useState([]);
  const [processing, setProcessing] = useState([]);
  const [delivered, setDelivered] = useState([]);
  const [status, setStatus] = useState('');
  const [role, setRole] = useState('');
  const [time, setTime] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [dataTable, setDataTable] = useState([]); //tableTable for showing on table according to filtering
  const [todayOrder, setTodayOrder] = useState('');
  const [monthlyOrder, setMonthlyOrder] = useState('');
  const [totalOrder, setTotalOrder] = useState('');
  const [newProducts] = useState([]);
  const searchRef = useRef('');
  const userRef = useRef('');
  const couponRef = useRef('');
  const orderRef = useRef('');
  const categoryRef = useRef('');
  dayjs.extend(isBetween);
  dayjs.extend(isToday);
  const location = useLocation();

  //service data filtering
  const serviceData = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() - time);
    let services = data;

    if (location.pathname === '/dashboard') {
      const orderPending = services.filter(
        (statusP) => statusP.status === 'Pending'
      );
      setPending(orderPending);

      const orderProcessing = services.filter(
        (statusO) => statusO.status === 'Processing'
      );
      setProcessing(orderProcessing);

      const orderDelivered = services.filter(
        (statusD) => statusD.status === 'Delivered'
      );
      setDelivered(orderDelivered);

      //daily total order calculation
      const todayServices = services.filter((order) =>
        dayjs(order.createdAt).isToday()
      );
      const todayOrder = todayServices.reduce(
        (preValue, currentValue) => preValue + currentValue.total,
        0
      );
      setTodayOrder(todayOrder);

      //monthly order calculation
      const monthlyServices = services.filter((order) =>
        dayjs(order.createdAt).isBetween(
          new Date().setDate(new Date().getDate() - 30),
          new Date()
        )
      );

      const monthlyOrder = monthlyServices.reduce(
        (preValue, currentValue) => preValue + currentValue.total,
        0
      );
      setMonthlyOrder(monthlyOrder);

      //total order calculation
      const totalOrder = services.reduce(
        (preValue, currentValue) => preValue + currentValue.total,
        0
      );
      setTotalOrder(totalOrder);
    }

    //products filtering

    if (filter) {
      services = services.filter((item) => item.parent === filter);
    }

    if (sortedField === 'Low') {
      services = services.sort((a, b) => a.price < b.price && -1);
    }
    if (sortedField === 'High') {
      services = services.sort((a, b) => a.price > b.price && -1);
    }
    if (searchText) {
      services = services.filter((search) =>
        search.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    //category searching
    if (categoryType) {
      services = services.filter((search) =>
        search.type.toLowerCase().includes(categoryType.toLowerCase())
      );
    }

    //admin Filtering

    if (role) {
      services = services.filter((staff) => staff.role === role);
    }

    //User and Admin filtering
    if (searchUser) {
      services = services.filter(
        (search) =>
          search.name.toLowerCase().includes(searchUser.toLowerCase()) ||
          search?.phone?.toLowerCase().includes(searchUser.toLowerCase()) ||
          search?.email?.toLowerCase().includes(searchUser.toLowerCase())
      );
    }

    //Coupon filtering

    if (searchCoupon) {
      services = services.filter(
        (search) =>
          search.title.toLowerCase().includes(searchCoupon.toLowerCase()) ||
          search.couponCode.toLowerCase().includes(searchCoupon.toLowerCase())
      );
    }

    // order filtering
    if (status) {
      services = services.filter((order) => order.status === status);
    }
    if (searchOrder) {
      services = services.filter((search) =>
        search.contact.toLowerCase().includes(searchOrder.toLowerCase())
      );
    }

    if (time) {
      services = services.filter((order) =>
        dayjs(order.createdAt).isBetween(date, new Date())
      );
    }

    return services;
  }, [
    filter,
    sortedField,
    data,
    searchText,
    searchUser,
    searchCoupon,
    searchOrder,
    categoryType,
    status,
    role,
    time,
    location,
  ]);

  //pagination functionality start

  const resultsPerPage = 8;
  const totalResults = serviceData.length;

  const handleChangePage = (p) => {
    setCurrentPage(p);
  };

  useEffect(() => {
    setDataTable(
      serviceData.slice(
        (currentPage - 1) * resultsPerPage,
        currentPage * resultsPerPage
      )
    );
  }, [serviceData, currentPage, resultsPerPage]);

  //pagination functionality end

  //table form submit function for search start

  const handleSubmitForAll = (e) => {
    e.preventDefault();
    setSearchText(searchRef.current.value);
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    setSearchUser(userRef.current.value);
  };

  const handleSubmitCoupon = (e) => {
    e.preventDefault();
    setSearchCoupon(couponRef.current.value);
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    setSearchOrder(orderRef.current.value);
  };

  const handleSubmitCategory = (e) => {
    e.preventDefault();
    setCategoryType(categoryRef.current.value);
  };

  //table form submit function for search end

  //handle submit multiple product data with csv format

  const handleOnDrop = (data) => {
    for (let i = 0; i < data.length; i++) {
      newProducts.push(data[i].data);
    }
  };

  const handleUploadProducts = () => {
    if (newProducts.length < 1) {
      notifyError('Please upload/select csv file first!');
    } else {
      ProductServices.addAllProducts(newProducts)
        .then((res) => {
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
    }
  };

  return {
    userRef,
    searchRef,
    couponRef,
    orderRef,
    categoryRef,
    pending,
    processing,
    delivered,
    todayOrder,
    monthlyOrder,
    totalOrder,
    setFilter,
    setSortedField,
    setStatus,
    setRole,
    setTime,
    handleChangePage,
    totalResults,
    resultsPerPage,
    dataTable,
    serviceData,
    handleSubmitUser,
    handleSubmitForAll,
    handleSubmitCoupon,
    handleSubmitOrder,
    handleSubmitCategory,
    handleOnDrop,
    handleUploadProducts,
  };
};

export default useFilter;
