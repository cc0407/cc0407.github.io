import React, { PropsWithChildren } from 'react';
// @ts-ignore
import logo from '../img/logos/LogoLong.png';

interface props extends PropsWithChildren<any> {
    title: string;
    description?: string;
    url: string;
    image?: string;
    metaTitle?: string;
    htmlAttributes?: any;
}

const defaultProps: Partial<props> = {
    //Declared here, implemented at bottom of file
    image: logo, // defaults to main logo if nothing provided
    description: '',
    htmlAttributes: { lang: 'en' },
};

export const Seo: React.FC<props> = props => {
    let metaTitle =
        props.metaTitle === undefined ? props.title : props.metaTitle;
    return (
        <>
            <meta charSet="utf-8" />
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={props.description} />
            <meta property="og:url" content={props.url} />
            <meta property="og:image" content={props.image} />
            <link rel="canonical" href={props.url}></link>
            {props.children}
        </>
    );
};

Seo.defaultProps = defaultProps;
export default Seo;
