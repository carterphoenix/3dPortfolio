import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    contact,
    css,
    git,
    github,
    html,
    java,
    javascript,
    linkedin,
    nodejs,
    python,
    react,
    tailwindcss,
    flappy,
    foodesign,
    poke,
    weather
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];

export const experiences = [

];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/carterphoenix',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/Carter-Morphis',
    }
];

export const projects = [
    {
        iconUrl: flappy,
        theme: 'btn-back-red',
        name: 'Flappy Bird',
        description: 'Developed a web-based Flappy Bird game using HTML, CSS, and JavaScript, showcasing proficiency in front-end web development and interactive game design. Aimed to recreate the classic Flappy Bird experience while adding a personal touch.',
        link: 'https://carterphoenix.github.io/flappybirdgame/'
    },
    {
        iconUrl: foodesign,
        theme: 'btn-back-blue',
        name: 'Foodesign Associates',
        description: "Designed a mock website for my mom's company, Foodesign Associates, using HTML, CSS, and JavaScript. Created a responsive, user-friendly website to showcase the firm's portfolio and services.",
        link: 'https://carterphoenix.github.io/Foodesign/'
    },
    {
        iconUrl: poke,
        theme: 'btn-back-yellow',
        name: 'PokeDex',
        description: 'Developed a web-based PokeDex application using HTML, CSS, and JavaScript, showcasing proficiency in front-end web development. Aimed to recreate the classic PokeDex experience while adding a personal touch.',
        link: 'https://lindsaymei.github.io/pokepages/'
    },
    {
        iconUrl: weather,
        theme: 'btn-back-green',
        name: 'Weather App',
        description: 'Developed a web-based weather application using ReactJS. Aimed to provide users with real-time weather information and forecasts based on various locations.',
        link: 'https://lindsaymei.github.io/weather-app/'
    }


];