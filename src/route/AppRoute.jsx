import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Product from '../pages/user/Product';
import Home from '../pages/user/Home';
import Order from '../pages/user/Order';
import Layout from '../layout/Layout';
import DashBoard from '../pages/admin/ManageUsers';
import ManageProduct from '../pages/admin/ManageProduct';
import ManageOrder from '../pages/admin/ManageOrder';
import ManageCategory from '../pages/admin/ManageCategory';
import LayoutAdmin from '../layout/LayoutAdmin';

const router = createBrowserRouter([
    
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'product', element: <Product /> },
            { path: 'order', element: <Order /> },
        ]
    },
    {
        path: '/admin',
        element: <LayoutAdmin />,
        children: [
            { index: true, element: <DashBoard /> },
            { path: 'product', element: <ManageProduct /> },
            { path: 'order', element: <ManageOrder /> },
            { path: 'category', element: <ManageCategory /> },
        ]
    },

]);

const AppRoute = () => {
    return <RouterProvider router={router} />;
};

export default AppRoute;
