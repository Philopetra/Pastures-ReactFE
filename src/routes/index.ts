import { lazy } from 'react';

const Calendar = lazy(() => import('../pages/Calendar'));
const Chart = lazy(() => import('../pages/Chart'));
const FormElements = lazy(() => import('../pages/Form/FormElements'));
const FormLayout = lazy(() => import('../pages/Form/FormLayout'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const Tables = lazy(() => import('../pages/Tables'));
const Alerts = lazy(() => import('../pages/UiElements/Alerts'));
const Buttons = lazy(() => import('../pages/UiElements/Buttons'));
const AdminUsers = lazy(() => import('../pages/AdminUsers'));
const Products = lazy(() => import('../pages/Products'));
const Orders = lazy(() => import('../pages/Orders'));
const Reports = lazy(() => import('../pages/Reports'));
const Finances = lazy(() => import('../pages/Finances'));
const Approvals = lazy(() => import('../pages/Approvals'));
const Customers = lazy(() => import('../pages/Customers'));

const coreRoutes = [
  {
    path: '/admin-users',
    title: 'Admin Users',
    component: AdminUsers,
  },
  {
    path: '/products',
    title: 'Products',
    component: Products,
  },
  {
    path: '/customers',
    title: 'Customers',
    component: Customers,
  },
  {
    path: '/orders',
    title: 'Orders',
    component: Orders,
  },
  {
    path: '/reports',
    title: 'Reports',
    component: Reports,
  },
  {
    path: '/finances',
    title: 'Finances',
    component: Finances,
  },
  {
    path: '/approvals',
    title: 'Approvals',
    component: Approvals,
  },
  {
    path: '/calendar',
    title: 'Calender',
    component: Calendar,
  },
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/forms/form-elements',
    title: 'Forms Elements',
    component: FormElements,
  },
  {
    path: '/forms/form-layout',
    title: 'Form Layouts',
    component: FormLayout,
  },
  {
    path: '/tables',
    title: 'Tables',
    component: Tables,
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
  },
  {
    path: '/chart',
    title: 'Chart',
    component: Chart,
  },
  {
    path: '/ui/alerts',
    title: 'Alerts',
    component: Alerts,
  },
  {
    path: '/ui/buttons',
    title: 'Buttons',
    component: Buttons,
  },
];

const routes = [...coreRoutes];
export default routes;
