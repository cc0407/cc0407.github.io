import { project } from './types';

export const experience: project[] = [
    {
        projectType: 'work',
        name: 'VIVA Streaming TV',
        description:
            'Designed and built from scratch using Gatsby, Typescript, and Tailwind.',
        link: 'https://landing.vivatv.ca',
        image: require('../img/projects/icon-512x512.png'),
        target: '_blank',
    },
    {
        projectType: 'work',
        name: 'TLN',
        description:
            'Designed and built site using custom Wordpress theme and PHP',
        link: 'https://www.tln.ca/',
        image: require('../img/projects/tln.png'),
        target: '_blank',
    },
    {
        projectType: 'work',
        name: 'TLN - Soccer Redesign',
        description:
            'Updated all pages related to soccer, to better reflect industry standards.',
        link: 'https://tln.ca/soccer',
        image: require('../img/projects/tln-soccer.jpg'),
        target: '_blank',
    },
    {
        projectType: 'work',
        name: 'DisplayPro',
        description: '',
        link: 'https://displaypro.shop/',
        target: '_blank',
    },
];
