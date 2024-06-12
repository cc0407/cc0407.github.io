import React, { useState } from 'react';
import Seo from '../components/SeoComponent';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes';

// This is a high-level view of what the page will be
export const Landing = () => {
    /*--- Changes 'Hello' to random language from list ---*/
    const [lang, setLang] = useState(0);
    function changeLanguage(e: any) {
        var langSelect = lang;
        while (langSelect === lang)
            langSelect = Math.floor(Math.random() * languageList.length);
        setLang(langSelect);
    }
    function resetLang(e: any) {
        setLang(0);
    }
    /*----------------------------------------------------*/

    return (
        <div className="flex justify-center items-center flex-grow-[1] px-4 xs:px-8">
            <div className="flex flex-row justify-center items-center flex-wrap max-w-screen-lg">
                <div className="py-4 md:px-10 object-cover">
                    <img
                        className="w-48 h-48 xs:w-64 xs:h-64 rounded-full bg-black border-solid border-[6px] border-darkBlue"
                        alt={'Avatar'}
                        src={'https://avatars.githubusercontent.com/u/46330616'}
                    />
                </div>

                <div className="max-w-screen-sm font-bitter text-darkBlue3">
                    <div
                        className="sm-max:text-5xl text-7xl sm-max:text-center leading-[1.1]"
                        onMouseEnter={changeLanguage}
                        onMouseLeave={resetLang}
                    >
                        Hi, my name <br />
                        is <span className="font-bold">Christian</span>
                        <span className="text-lightBlue">.</span>
                    </div>
                    <div className="sm-max:text-xl text-2xl leading-normal py-5">
                        I am a{' '}
                        <span className="font-bold">full-stack developer</span>{' '}
                        from Toronto, Ontario, <br className="sm-max:hidden" />{' '}
                        with over <br className="xs:hidden" />
                        <Link to={ROUTES.experience} className="text-darkBlue3">
                            5 years of full-time work experience
                        </Link>
                        .
                    </div>
                </div>
            </div>
        </div>
    );
};

const languageList = [
    { lang: 'English', text: 'Hi' },
    { lang: 'Italian', text: 'Ciao' },
    { lang: 'Russian', text: 'привет' },
    { lang: 'French', text: 'Bonjour' },
    { lang: 'Finnish', text: 'Hei' },
    { lang: 'Swedish', text: 'Hej' },
];

export const Head = () => <Seo title="Home" url="/" />;
