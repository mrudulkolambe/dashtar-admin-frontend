import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@windmill/react-ui';

import Error from '../components/form/Error';
import useLoginSubmit from '../hooks/useLoginSubmit';
import LabelArea from '../components/form/LabelArea';
import InputArea from '../components/form/InputArea';
import ImageLight from '../assets/img/forgot-password-office.jpeg';
import ImageDark from '../assets/img/forgot-password-office-dark.jpeg';

const ForgotPassword = () => {
  const { onSubmit, register, handleSubmit, errors, loading } =
    useLoginSubmit();

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Forgot password
              </h1>

              <form onSubmit={handleSubmit(onSubmit)}>
                <LabelArea label="Email" />
                <InputArea
                  register={register}
                  label="Email"
                  name="verifyEmail"
                  type="email"
                  placeholder="john@doe.com"
                />
                <Error errorName={errors.verifyEmail} />

                <Button
                  disabled={loading}
                  type="submit"
                  block
                  className="mt-4 h-12"
                >
                  Recover password
                </Button>
              </form>
              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-green-500 dark:text-green-400 hover:underline"
                  to="/login"
                >
                  Already have an account? Login
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
