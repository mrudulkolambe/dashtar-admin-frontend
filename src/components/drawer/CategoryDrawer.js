import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import ReactTagInput from '@pathofdev/react-tag-input';

import Error from '../form/Error';
import Title from '../form/Title';
import InputArea from '../form/InputArea';
import LabelArea from '../form/LabelArea';
import SelectOption from '../form/SelectOption';
import DrawerButton from '../form/DrawerButton';
import Uploader from '../image-uploader/Uploader';
import useCategorySubmit from '../../hooks/useCategorySubmit';

const CategoryDrawer = ({ id }) => {
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    imageUrl,
    setImageUrl,
    children,
    setChildren,
  } = useCategorySubmit(id);

  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        {id ? (
          <Title
            title="Update Category"
            description="Updated your Product category and necessary information from here"
          />
        ) : (
          <Title
            title="Add Category"
            description=" Add your Product category and necessary information from here"
          />
        )}
      </div>
      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-6 flex-grow scrollbar-hide w-full max-h-full pb-40">
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Category Icon" />
              <div className="col-span-8 sm:col-span-4">
                <Uploader imageUrl={imageUrl} setImageUrl={setImageUrl} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Product Type" />
              <div className="col-span-8 sm:col-span-4">
                <SelectOption
                  register={register}
                  label="Product type"
                  name="type"
                />
                <Error errorName={errors.type} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Parent Category" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Category title"
                  name="parent"
                  type="text"
                  placeholder="Category title"
                />
                <Error errorName={errors.parent} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Child Category" />
              <div className="col-span-8 sm:col-span-4">
                <ReactTagInput
                  placeholder="Child category  (Write then press enter to add new child category )"
                  tags={children}
                  onChange={(child) => setChildren(child)}
                />
              </div>
            </div>
          </div>

          <DrawerButton id={id} title="Category" />
        </form>
      </Scrollbars>
    </>
  );
};

export default CategoryDrawer;
