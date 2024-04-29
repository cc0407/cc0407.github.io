// Base tailwind config file containing the configurations required for tailwind css
const { white } = require('tailwindcss/colors');
const colors = require('tailwindcss/colors');

module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    purge: {
        content: ['./src/**/*.{js,jsx,ts,tsx}'],
        options: {
            safelist: ['dark'],
        },
    },
    // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                green: '#444922',
                forest: '#5C6539',
                olive: '#838D53',
                mustard: '#F6B954',
                sunshine: '#FBD97C',
                cream: '#f3f6ef',

                offWhite: '#F2F2F2',
                darkBlue: '#05111C',
                darkBlue2: '#02141f',
                lightBlue: '#3f6d93',

                background: '#E2E8F0',
                main: '#333333',

                brightRed: '#EE3325',
                brightRed2: '#f11908',
                LightGray4: '#5f5f5f',
                LightGray3: '#868686',
                LightGray2: '#c1c1c1',
                LightGray: '#e0e0e0',
                black: '#111111',
            },
            borderRadius: {
                inherit: 'inherit',
            },
            fontFamily: {
                aileron: ['Aileron', 'sans-serif'],
                catamaran: ['Catamaran', 'sans-serif'],
            },
            screens: {
                '3xl': '1921px',
                '3xl-max': { max: '1921px' },
                '2xl-max': { max: '1536px' },
                'xl-max': { max: '1280px' },
                'lg-max': { max: '1024px' },
                'md-max': { max: '768px' },
                'sm-max': { max: '640px' },
                xs: '360px',
                'xs-max': { max: '360px' },
            },
        },
    },
    variants: {
        extend: {},
    },
    corePlugins: {
        preflight: false,
    },
};
