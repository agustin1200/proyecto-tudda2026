import { Outlet } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import  NotFound from './pages/NotFound';
import About from './pages/About';

const routes = [
    {
        path: '/',
        element : <MainLayout>
            <Outlet/>
        </MainLayout>,

        children : [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '*',
                element: <NotFound />
            },
        ],
    },
];


export default routes;
