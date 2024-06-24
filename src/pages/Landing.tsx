import Seo from '../components/SeoComponent';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes';

// Main landing page for website
export const Landing = () => {
    return (
        // Main container for the landing page content
        <div className="flex justify-center items-center flex-grow-[1] px-4 xs:px-8">
            {/* Container for content, allowing for a responsive layout with flex-wrap */}
            <div className="flex flex-row justify-center items-center flex-wrap max-w-screen-lg">
                {/* Container for the profile picture with responsive padding */}
                <div className="py-4 md:px-10 object-cover">
                    <img
                        className="w-48 h-48 xs:w-64 xs:h-64 rounded-full bg-black border-solid border-[6px] border-darkBlue"
                        alt={'Avatar'} // Alt text for accessibility
                        src={'https://avatars.githubusercontent.com/u/46330616'} // Profile picture URL
                    />
                </div>

                {/* Container for the greeting text */}
                <div className="max-w-screen-sm font-bitter text-darkBlue3">
                    {/* Greeting text with responsive font size and center alingment on smaller screens */}
                    <div className="sm-max:text-5xl text-7xl sm-max:text-center leading-[1.1]">
                        Hi, my name <br />
                        is <span className="font-bold">Christian</span>
                        <span className="text-lightBlue">.</span>
                    </div>
                    {/* Introduction text with responsive font size and line breaks for readability */}
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

// Component for setting the page's SEO properties
export const Head = () => <Seo title="Home" url="/" />;
