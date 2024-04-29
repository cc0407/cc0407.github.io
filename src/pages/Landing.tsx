import React, { useState } from 'react';
import Seo from '../components/SeoComponent';

// This is a high-level view of what the page will be
export const Landing = () => {
    /*--- Changes 'Hello' to random language from list ---*/
    const [lang, setLang] = useState(0);
    function changeLanguage(e: any) {
        var langSelect = lang;
        while (langSelect == lang)
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
                        className="circle-image"
                        src={'https://avatars.githubusercontent.com/u/46330616'}
                    />
                </div>

                <div className="max-w-screen-sm">
                    <div
                        className="text-6xl font-bold text-lightBlue leading-none sm-max:text-center"
                        onMouseEnter={changeLanguage}
                        onMouseLeave={resetLang}
                    >
                        {languageList[lang].text}!
                    </div>
                    <div className="text-2xl leading-tight py-3 sm-max:text-center">
                        I'm{' '}
                        <span className="font-bold">Christian Catalano</span>.
                    </div>
                    <div className="xs-max:text-base text-lg">
                        I am currently studying B.Comp Honours{' '}
                        <span className="font-bold">Software Engineering</span>,
                        minoring in{' '}
                        <span className="font-bold">Mathematics</span>, at the
                        University of Guelph. With{' '}
                        <span className="font-bold">
                            5+ years of full-time experience
                        </span>{' '}
                        in the industry, and{' '}
                        <span className="font-bold">
                            3 years in full-stack development
                        </span>{' '}
                        specifically, I would be a great asset to your team!
                    </div>
                </div>
            </div>
        </div>
    );
};

const languageList = [
    { lang: 'English', text: 'Hello' },
    { lang: 'Italian', text: 'Ciao' },
    { lang: 'Russian', text: 'привет' },
    { lang: 'French', text: 'Bonjour' },
    { lang: 'Finnish', text: 'Hei' },
    { lang: 'Swedish', text: 'Hej' },
];

export const Head = () => <Seo title="Home" url="/" />;
