'use client';

import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import RegisterForm from '../auth/RegisterForm';

const RegisterPageWrapper = () => {
  return (
    <>
      <Header />
      <main>
        <RegisterForm />
      </main>
      <Footer />
    </>
  );
};

export default RegisterPageWrapper;
