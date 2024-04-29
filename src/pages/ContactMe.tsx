import React, { useState } from 'react';
import Seo from '../components/SeoComponent';

// This is a high-level view of what the page will be
export const Contact = () => {
    return (
        <div className="bg-offWhite text-darkBlue column page-width text-center items-center flex-grow-[default] overflow-x-hidden ">
            <div className="column centered contactContent ">
                <div className="contactSubtitle">Business Inquiries</div>
                <div>
                    Please send an email to:{' '}
                    <a
                        className="contactTextLink"
                        href="mailto:christiancatalano@outlook.com?subject=Business Inquiry - "
                    >
                        christiancatalano@outlook.com
                    </a>
                </div>
                <div className="contactSubtitle pt-16">Other Communication</div>
                <div>
                    Feel free to message me on&#8198;
                    <a
                        className="contactTextLink"
                        href="https://www.linkedin.com/in/christian-catalano/"
                        target="_blank"
                    >
                        LinkedIn
                    </a>
                    !
                </div>
            </div>
        </div>
    );
};

export const Head = () => (
    <Seo title="Contact" url="/contact-us">
        <meta name="robots" content="noindex" />
    </Seo>
);
