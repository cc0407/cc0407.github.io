import React, { useState } from 'react';
import { NavItem } from '../components';
import { ROUTES } from '../routes';
//@ts-ignore
import { MenuOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

export const Nav = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div className="w-full h-12 backdrop-blur bg-transparent z-50 flex items-center justify-between relative font-aileron flex-shrink-0 text-black py-2 border-b-black border-solid border-0 border-b-2">
            {/* Desktop View */}
            <div className="hidden gap-12 ml-6 md:flex font-semibold text-lg">
                <Items />
            </div>

            {/* Mobile View */}
            <MenuOutlined
                className="md:hidden ml-4 text-[150%] cursor-pointer"
                onClick={() => setOpen(!open)}
            />
            {open && (
                <>
                    <div
                        className="absolute top-20 left-0 h-[calc(100vh-80px)] w-full bg-black/75"
                        onClick={() => setOpen(false)}
                    />
                    <div className="absolute bg-olive right-0 top-20 py-10 w-full flex flex-col gap-8 items-end shadow-md z-10 md-max:text-cream rounded">
                        <Items
                            dispatch={() => {
                                setOpen(false);
                            }}
                        />
                    </div>
                </>
            )}

            <div className="social-buttons mr-4">
                <a
                    href="https://github.com/cc0407"
                    className="icon nav-item"
                    target="blank"
                >
                    <FaGithub className="icon" title="Github" />
                </a>
            </div>
        </div>
    );
};

interface IItems extends React.HTMLAttributes<HTMLDivElement> {
    dispatch?: () => void;
}
const Items: React.FC<IItems> = ({ dispatch }) => {
    return (
        <>
            <NavItem
                name="Home"
                active={false}
                link={ROUTES.root}
                className=" mx-auto"
                dispatch={dispatch}
            />
            <NavItem
                name="Experience"
                active={false}
                link={ROUTES.experience}
                className="col-span-2 mx-auto"
                dispatch={dispatch}
            />
            <NavItem
                name="Projects"
                active={false}
                link={ROUTES.projects}
                className="col-span-2 mx-auto"
                dispatch={dispatch}
            />
        </>
    );
};
