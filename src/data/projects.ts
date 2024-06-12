import { project } from './types';

export const projects: project[] = [
    {
        projectType: 'personal',
        name: 'Portfolio Website',
        description: 'This website, built using React and Typescript.',
        image: require('../img/projects/portfolio.png'),
        target: '_self',
    },
    {
        projectType: 'personal',
        name: 'Russian Alphabet Practice',
        description:
            'Alphabet pronunciation helper. This app contains a dictionary of all russian letters and their pronunciations. You can either press a letter to hear its pronunciation, or test your knowledge with a mini-game where you match a letter to its corresponding sound.',
        link: '/russian-alphabet-practice',
        image: require('../img/projects/russian-practice.PNG'),
        target: '_self',
    },
    {
        projectType: 'personal',
        name: 'Stars Arcade',
        description:
            'A horizontal scroller game, inspired by Asteroids (1979), built in Java using AWT. Survive as long as you can as asteroids of varying size and speed fly toward you. Use special abilities such as a shield, faster boosters, triple shot, proximity mines, and a giant beam laser! ',
        link: 'https://github.com/cc0407/stars-arcade',
        image: require('../img/projects/stars-arcade.PNG'),
        target: '_blank',
    },
    {
        projectType: 'personal',
        name: 'Tic-Tac-Toe',
        description: 'A standard tic-tac-toe clone built in React.',
        link: '/tic-tac-toe',
        image: require('../img/projects/tic-tac-toe.PNG'),
        target: '_self',
    },
    {
        projectType: 'personal',
        name: "Conway's Game of Life",
        description:
            "Showcasing Conway's Game of Life in java! Edit a grid of cells and watch as they evolve and grow. Allows for varying simulation speeds.",
        link: 'https://github.com/cc0407/Conways-Game-of-Life',
        image: require('../img/projects/game-of-life.PNG'),
        target: '_blank',
    },
];
