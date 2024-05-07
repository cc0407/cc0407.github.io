import React, { useState } from 'react';
import { NavItem } from '../components';
import { ROUTES } from '../routes';
import { FaGithub } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { BsArrowBarUp } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { GiHamburgerMenu } from 'react-icons/gi';

export const Nav = () => {
    const [open, setOpen] = useState<boolean>(false);
    const location = useLocation();

    return (
        <div className="w-full h-8 backdrop-blur bg-transparent z-50 flex items-center justify-between relative flex-shrink-0 text-black py-2 border-b-black border-solid border-0 md:border-b-2">
            {/* Links (automatically slides up to top on mobile) */}
            <div
                className={`page-link-wrapper md:ml-6 md-max:gap-6 ${
                    open ? 'nav-opened' : ''
                }`}
            >
                <div className="blurFallback" />
                <Items currentPath={location.pathname} />
            </div>

            {/* Mobile View */}
            {/* Hamburger icon */}
            <IconContext.Provider
                value={{
                    className: 'icon nav-item md:hidden ml-4',
                    size: '100px',
                }}
            >
                {open ? (
                    <BsArrowBarUp
                        onClick={() => {
                            setOpen(false);
                        }}
                    />
                ) : (
                    <GiHamburgerMenu
                        onClick={() => {
                            setOpen(true);
                        }}
                    />
                )}
            </IconContext.Provider>

            {/* 
            <div
                className={`nav-overlay ${open ? 'visible' : 'collapse'}`}
                onClick={() => {
                    setOpen(false);
                }}
            /> */}

            <a
                href="https://github.com/cc0407"
                className="icon nav-item h-8 mr-4"
                target="blank"
            >
                <FaGithub className="icon" title="Github" />
            </a>
        </div>
    );
};

interface IItems extends React.HTMLAttributes<HTMLDivElement> {
    dispatch?: () => void;
    currentPath: string;
}
const Items: React.FC<IItems> = ({ dispatch, currentPath }) => {
    return (
        <>
            <NavItem
                name="Home"
                active={currentPath}
                link={ROUTES.root}
                className="mx-auto z-20"
                dispatch={dispatch}
            />
            <NavItem
                name="Experience"
                active={currentPath}
                link={ROUTES.experience}
                className="mx-auto z-20"
                dispatch={dispatch}
            />
            <NavItem
                name="Projects"
                active={currentPath}
                link={ROUTES.projects}
                className="mx-auto z-20"
                dispatch={dispatch}
            />
            <NavItem
                name="Contact"
                active={currentPath}
                link={ROUTES.contact}
                className="mx-auto z-20"
                dispatch={dispatch}
            />
        </>
    );
};
