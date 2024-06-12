import { project } from './types';

export const projects: project[] = [
    {
        projectType: 'personal',
        name: 'Portfolio Website',
        description: 'This website, build using React and Typescript.',
        link: '/',
        target: '_self',
    },
    {
        projectType: 'personal',
        name: 'Russian Alphabet Practice',
        description: '',
        link: '/russian-alphabet-practice',
        image: require('../img/projects/russian-practice.PNG'),
        target: '_self',
    },
    {
        projectType: 'personal',
        name: 'Tic-Tac-Toe Clone',
        description: '',
        link: '/tic-tac-toe',
        image: require('../img/projects/tic-tac-toe.PNG'),
        target: '_self',
    },
    {
        projectType: 'personal',
        name: 'Stars Arcade',
        description: '',
        link: 'https://github.com/cc0407/stars-arcade',
        image: require('../img/projects/stars-arcade.PNG'),
        target: '_blank',
    },
    {
        projectType: 'personal',
        name: "Conway's Game of Life",
        description: '',
        link: 'https://github.com/cc0407/Conways-Game-of-Life',
        image: require('../img/projects/game-of-life.PNG'),
        target: '_blank',
    },
];
