import React from 'react';

const Home = React.lazy(() => import("../components/home"));
const Login = React.lazy(() => import("../components/auth/Login"));
const Register = React.lazy(() => import("../components/auth/Register"));
const ProdList = React.lazy(() => import("../components/products"));
const AddProduct = React.lazy(() => import("../components/products/AddProduct/addproduct"))

const defaultRoutes = [
    { path: '/', exact: true, name: 'Головна', component: Home },
    { path: '/login', exact: true, name: 'Вхід', component: Login },
    { path: '/register', exact: true, name: 'Реєстрація', component: Register },
    { path: '/product', exact: true, name: 'Список товарів', component: ProdList },
    { path: '/product/add', exact: true, name: 'Додати товар', component: AddProduct }
];
export default defaultRoutes;