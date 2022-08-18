import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

import Title from '../form/Title';
import Error from '../form/Error';
import LabelArea from '../form/LabelArea';
import InputArea from '../form/InputArea';
import InputValue from '../form/InputValue';
import SelectOption from '../form/SelectOption';
import DrawerButton from '../form/DrawerButton';
import Uploader from '../image-uploader/Uploader';
import useCouponSubmit from '../../hooks/useCouponSubmit';

const CouponDrawer = ({ id }) => {
  const { register, handleSubmit, onSubmit, errors, setImageUrl, imageUrl } =
    useCouponSubmit(id);

  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        {id ? (
          <Title
            title="Update Coupon"
            description="Updated your coupon and necessary information from here"
          />
        ) : (
          <Title
            title="Add Coupon"
            description="Add your coupon and necessary information from here"
          />
        )}
      </div>

      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full pb-40">
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Coupon Banner Image" />
              <div className="col-span-8 sm:col-span-4">
                <Uploader imageUrl={imageUrl} setImageUrl={setImageUrl} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Campaign Name" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Coupon title"
                  name="title"
                  type="text"
                  placeholder="Campaign Title"
                />
                <Error errorName={errors.title} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Campaign Code" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Coupon Code"
                  name="couponCode"
                  type="text"
                  placeholder="Coupon code"
                />
                <Error errorName={errors.couponCode} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Coupon Validity Time" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Coupon Validation End Time"
                  name="endTime"
                  type="datetime-local"
                  placeholder="Coupon validation end time"
                />
                <Error errorName={errors.endTime} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Discount Percentage" />
              <div className="col-span-8 sm:col-span-4">
                <InputValue
                  register={register}
                  maxValue={90}
                  minValue={1}
                  label="Discount"
                  name="discountPercentage"
                  type="number"
                  placeholder="Discount percentage"
                />

                <Error errorName={errors.discountPercentage} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Minimum Amount" />
              <div className="col-span-8 sm:col-span-4">
                <InputValue
                  register={register}
                  maxValue={200000}
                  minValue={100}
                  label="Minimum Amount"
                  name="minimumAmount"
                  type="number"
                  placeholder="Minimum amount required"
                />
                <Error errorName={errors.minimumAmount} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Product Type" />
              <div className="col-span-8 sm:col-span-4">
                <SelectOption
                  register={register}
                  label="Product type"
                  name="productType"
                />
                <Error errorName={errors.productType} />
              </div>
            </div>
          </div>

          <DrawerButton id={id} title="Coupon" />
        </form>
      </Scrollbars>
    </>
  );
};

export default CouponDrawer;
