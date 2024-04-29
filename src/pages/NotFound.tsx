import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes';

export const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="column centered flex-grow-[1] gap-5 text-black">
            <div className="text-6xl font-bold ">Oops...</div>
            <div className="subtitle pb-0">
                The page you are looking for does not exist.
            </div>
            <Button onClick={() => navigate(ROUTES.root)}>Return Home</Button>
        </div>
    );
};
