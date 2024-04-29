import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NI extends React.HTMLAttributes<HTMLDivElement> {
    active: string;
    name: string;
    link: string;
    dispatch?: () => void;
}
export const NavItem: React.FC<NI> = ({
    active,
    name,
    link,
    className,
    dispatch,
}) => {
    const navigate = useNavigate();
    return (
        <div
            className={`${className || ''} ${
                active === link ? 'text-white bg-main' : ''
            } hover:underline decoration-main decoration-4 h-7 leading-7 hover:cursor-pointer text-base tracking-wide px-6 py-1 select-none rounded-lg w-min`}
            onClick={() => {
                if (dispatch !== undefined) dispatch();
                navigate(link);
            }}
        >
            {name}
        </div>
    );
};
