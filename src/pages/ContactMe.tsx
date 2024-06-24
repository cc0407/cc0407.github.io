import Seo from '../components/SeoComponent';

// Displays main contact information
export const Contact = () => {
    return (
        // Main container for contact content
        <div
            className="column centered contactContent text-center"
            role="main"
            aria-labelledby="contact-heading"
        >
            {/* Title */}
            <div className="contactSubtitle pb-4" id="contact-heading">
                Business Inquiries
            </div>
            {/* Body */}
            <div>
                Please send an email to:{' '}
                {/* Email link with a predefined subject for business inquires */}
                <a
                    className="contactTextLink"
                    href="mailto:christiancatalano@outlook.com?subject=Business Inquiry - "
                    aria-label="Send email to christiancatalano@outlook.com"
                >
                    christiancatalano@outlook.com
                </a>
            </div>
        </div>
    );
};

// Head component for setting SEO properties specific to the contact page
export const Head = () => (
    <Seo title="Contact" url="/contact-us">
        <meta name="robots" content="noindex" />
    </Seo>
);
