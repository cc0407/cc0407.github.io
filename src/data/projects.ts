import { project } from './types';

export const projects: project[] = [
    {
        projectType: 'personal',
        name: 'Portfolio Website',
        description: 'This website, built using React and Typescript.',
        learnLink: 'https://github.com/cc0407/cc0407.github.io',
        poster: require('../img/projects/portfolio.png'),
        banner: require('../img/projects/portfolio banner.png'),
        target: '_self',
    },
    {
        projectType: 'personal',
        name: 'Russian Alphabet Practice',
        description:
            'Alphabet pronunciation helper. This app contains a dictionary of all russian letters and their pronunciations. You can either press a letter to hear its pronunciation, or test your knowledge with a mini-game where you match a letter to its corresponding sound.',
        learnLink: 'https://github.com/cc0407/russian-alphabet-practice',
        prodLink: 'https://cc0407.github.io/russian-alphabet-practice/',
        poster: require('../img/projects/russian-practice.PNG'),
        banner: require('../img/projects/boosted banner.png'),
        target: '_self',
    },
    {
        projectType: 'personal',
        name: 'Stars Arcade',
        description:
            'A horizontal scroller game, inspired by Asteroids (1979), built in Java using AWT. Survive as long as you can as asteroids of varying size and speed fly toward you. Use special abilities such as a shield, faster boosters, triple shot, proximity mines, and a giant beam laser! ',
        learnLink: 'https://github.com/cc0407/stars-arcade',
        poster: require('../img/projects/stars-arcade.PNG'),
        banner: require('../img/projects/stars-arcade banner.png'),
        target: '_blank',
    },
    {
        projectType: 'personal',
        name: 'Tic-Tac-Toe',
        description: 'A standard tic-tac-toe clone built in React.',
        learnLink: 'https://github.com/cc0407/tic-tac-toe',
        prodLink: 'https://cc0407.github.io/tic-tac-toe/',
        poster: require('../img/projects/tic-tac-toe.PNG'),
        banner: require('../img/projects/tic-tac-toe banner.png'),
        target: '_self',
    },
    {
        projectType: 'personal',
        name: 'Matrix Transformation in C',
        description:
            'This project transforms a shape (expressed as a set of points) according to parameters passed by the user. Built in C with 16 teams of 4. Experience collaborating in small teams to acheive on larger goal.',
        learnLink:
            'https://github.com/cc0407/CIS3250-ClassProject?tab=readme-ov-file',
        poster: require('../img/projects/matrix.png'),
        banner: require('../img/projects/matrix banner.png'),
        target: '_blank',
    },
    {
        projectType: 'personal',
        name: "Conway's Game of Life",
        description:
            "Showcasing Conway's Game of Life in java! Edit a grid of cells and watch as they evolve and grow. Allows for varying simulation speeds.",
        learnLink: 'https://github.com/cc0407/Conways-Game-of-Life',
        poster: require('../img/projects/game-of-life.PNG'),
        banner: require('../img/projects/game-of-life banner.png'),
        target: '_blank',
    },
];
