import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, Outlet, createBrowserRouter } from 'react-router-dom';
import * as PAGES from './pages';
import { ROUTES } from './routes';
import { Footer, Nav } from './sections';
import { Helmet } from 'react-helmet';
import './index.css';
import './';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const Layout = () => {
    return (
        <div className="bg-offWhite w-screen h-screen overflow-y-auto overflow-x-hidden flex flex-col font-grenoble">
            <Nav />
            <Outlet />
        </div>
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
                path: ROUTES.root,
                element: <PAGES.Landing />,
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
