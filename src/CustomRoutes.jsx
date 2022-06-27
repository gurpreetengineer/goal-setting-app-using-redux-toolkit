import React, { Fragment, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';

const Dashboard = lazy(() => import('./pages/Dashboard'));
// const Register = lazy(() => import('./pages/Register'));
const Login = lazy(() => import('./pages/Login'));

const CustomRoutes = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Fragment>
  );
};

export default CustomRoutes;
