import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NI extends React.HTMLAttributes<HTMLDivElement> {
    active: boolean;
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
                active ? '' : ''
            } hover:underline decoration-mustard decoration-4 h-7 leading-7 hover:cursor-pointer font-grenoble text-[125%] tracking-wide`}
            onClick={() => {
                if (dispatch !== undefined) dispatch();
                navigate(link);
            }}
        >
            {name}
        </div>
    );
};
