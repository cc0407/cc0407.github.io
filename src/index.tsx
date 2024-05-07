import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, Outlet, createBrowserRouter } from 'react-router-dom';
import * as PAGES from './pages';
import { ROUTES } from './routes';
import { Nav } from './sections';
import './index.css';
import './';

const bgImg = require('./img/bg/landing.webp');

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const Layout = () => {
    return (
        <>
            <img
                src={bgImg}
                className="absolute z-1 object-cover h-screen w-screen left-0 opacity-25"
            />
            <div className=" w-screen h-screen overflow-y-auto overflow-x-hidden flex flex-col font-grenoble relative z-10">
                <Nav />
                <Outlet />
            </div>
        </>
    );
};

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: ROUTES.root,
                element: <PAGES.Landing />,
            },
            {
                path: ROUTES.contact,
                element: <PAGES.Contact />,
            },
            {
                path: ROUTES.experience,
                element: <PAGES.Experience />,
            },
            {
                path: ROUTES.projects,
                element: <PAGES.Projects />,
            },
            { path: '*', element: <PAGES.NotFound /> },
        ],
    },
]);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
