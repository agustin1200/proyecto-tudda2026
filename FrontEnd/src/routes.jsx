import { Outlet } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Login from './pages/Login';
import User from './pages/User';

const routes = [
    {
        path: '/',
        element: (
            <MainLayout>
                <Outlet />
            </MainLayout>
        ),

        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/user',
                element : <User />
            },
            {
                path: '*',
                element: <NotFound />
            },
        ],
    },
];

export default routes;