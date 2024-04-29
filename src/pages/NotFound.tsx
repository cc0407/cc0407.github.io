import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes';

export const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="column centered bg-darkBlue flex-grow-[default]">
            <div className="title font-bold text-white">Oops...</div>
            <div className="subtitle text-white">
                The page you are looking for does not exist.
            </div>
            <Button
                title="Back to Home"
                onClick={() => navigate(ROUTES.root)}
            />
        </div>
    );
};
