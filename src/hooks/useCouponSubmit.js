import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SidebarContext } from '../context/SidebarContext';
import CouponServices from '../services/CouponServices';
import { notifyError, notifySuccess } from '../utils/toast';

const useCouponSubmit = (id) => {
  const [imageUrl, setImageUrl] = useState('');
  const { isDrawerOpen, closeDrawer, setIsUpdate } = useContext(SidebarContext);

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (!imageUrl) {
      notifyError('Icon is required!');
      return;
    }
    const CouponData = {
      title: data.title,
      couponCode: data.couponCode,
      endTime: data.endTime,
      discountPercentage: data.discountPercentage,
      minimumAmount: data.minimumAmount,
      productType: data.productType,
      logo: imageUrl,
    };

    if (id) {
      CouponServices.updateCoupon(id, CouponData)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeDrawer();
    } else {
      CouponServices.addCoupon(CouponData)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeDrawer();
    }
  };

  useEffect(() => {
    if (!isDrawerOpen) {
      setValue('title');
      setValue('productType');
      setValue('couponCode');
      setValue('endTime');
      setValue('discountPercentage');
      setValue('minimumAmount');
      setImageUrl('');
      clearErrors('title');
      clearErrors('productType');
      clearErrors('couponCode');
      clearErrors('endTime');
      clearErrors('discountPercentage');
      clearErrors('minimumAmount');
      return;
    }
    if (id) {
      CouponServices.getCouponById(id)
        .then((res) => {
          if (res) {
            setValue('title', res.title);
            setValue('productType', res.productType);
            setValue('couponCode', res.couponCode);
            setValue('endTime', res.endTime);
            setValue('discountPercentage', res.discountPercentage);
            setValue('minimumAmount', res.minimumAmount);
            setImageUrl(res.logo);
          }
        })
        .catch((err) => {
          notifyError('There is a server error!');
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, setValue, isDrawerOpen]);
  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    setImageUrl,
    imageUrl,
  };
};

export default useCouponSubmit;
