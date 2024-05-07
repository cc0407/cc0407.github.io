import Seo from '../components/SeoComponent';

// This is a high-level view of what the page will be
export const Contact = () => {
    return (
        <>
            {' '}
            <div className="column centered contactContent  text-center ">
                <div className="contactSubtitle pb-4">Business Inquiries</div>
                <div>
                    Please send an email to:{' '}
                    <a
                        className="contactTextLink"
                        href="mailto:christiancatalano@outlook.com?subject=Business Inquiry - "
                    >
                        christiancatalano@outlook.com
                    </a>
                </div>
            </div>
        </>
    );
};

export const Head = () => (
    <Seo title="Contact" url="/contact-us">
        <meta name="robots" content="noindex" />
    </Seo>
);
