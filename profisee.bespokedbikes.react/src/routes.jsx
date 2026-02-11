import { lazy } from 'react';

const LoginPage = lazy(() => import("./pages/LoginPage"));
const MainPage = lazy(() => import("./pages/MainPage"));
const SalespersonListPage = lazy(() => import("./pages/SalespersonListPage"));
const SalespersonFormPage = lazy(() => import("./pages/SalespersonFormPage"));
const SaleListPage = lazy(() => import("./pages/SaleListPage"));
const QuarterlyCommissionReportPage = lazy(() => import("./pages/QuarterlyCommissionReportPage"));

const routes = [
    { path: '/', element: <LoginPage /> },
    { path: '/main', element: <MainPage /> },
    { path: '/salesperson/list', element: <SalespersonListPage /> },
    { path: '/salesperson/form', element: <SalespersonFormPage /> },
    { path: '/sale/list', element: <SaleListPage /> },
    { path: '/report', element: <QuarterlyCommissionReportPage /> },
];

export default routes;
