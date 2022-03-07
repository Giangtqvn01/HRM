import Login from '../components/Login';
import Dashboard from '../components/Dashboard';

const routes = [
    {
      path: '/',
      component: Login,
      title: 'products',
      needsAuth: false,
    },
    {
      path: '/dashboard',
      component: Dashboard,
      title: 'dashboard',
      needsAuth: false,
    },
  ];
  
  export default routes;