'use client';

import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import LoginForm from '../auth/LoginForm';

const LoginPageWrapper = () => {
  return (
    <>
      <Header />
      <main>
        <LoginForm />
      </main>
      <Footer />
    </>
  );
};

export default LoginPageWrapper;
