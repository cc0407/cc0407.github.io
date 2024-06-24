import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, Outlet, createHashRouter } from 'react-router-dom';
import * as PAGES from './pages';
import { ROUTES } from './routes';
import { Nav } from './sections';
import './index.css';
import './';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const Layout = () => {
    return (
        <>
            {/* <img
                src={bgImg}
                className="absolute z-1 object-cover h-screen w-screen left-0 top-0 opacity-25"
            /> */}
            <div className="absolute z-1 object-cover h-screen w-screen left-0 top-0 bg-darkBlue2"></div>
            <div className="md-max:w-[calc(100vw-1rem)] md-max:h-[calc(100vh-1rem)] md-max:m-2 w-[calc(100vw-1.5rem)] h-[calc(100vh-1.5rem)] m-3 overflow-y-auto overflow-x-hidden flex flex-col font-grenoble relative z-10 bg-white/95">
                <Nav />
                <Outlet />
            </div>
        </>
    );
};

const router = createHashRouter([
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
