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
                active === link ? 'text-white bg-darkBlue3' : ''
            } hover:underline decoration-text-darkBlue3 decoration-2 h-7 leading-7 hover:cursor-pointer text-lg tracking-wide px-6 py-1 select-none rounded-lg w-min font-bold`}
            onClick={() => {
                if (dispatch !== undefined) dispatch();
                navigate(link);
            }}
        >
            {name}
        </div>
    );
};
