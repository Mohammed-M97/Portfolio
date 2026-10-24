import { FaBootstrap, FaNodeJs, FaReact, FaSass } from 'react-icons/fa'
import { SiBootstrap, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiPhp, SiTailwindcss, SiTypescript } from 'react-icons/si'

import toyzer01 from '../assets/projects/toyzer/01.webp'
import toyzer02 from '../assets/projects/toyzer/02.webp'
import toyzer03 from '../assets/projects/toyzer/03.webp'
import toyzer04 from '../assets/projects/toyzer/04.webp'
import omar01 from '../assets/projects/omar/01.webp'
import omar02 from '../assets/projects/omar/02.webp'
import omar03 from '../assets/projects/omar/03.webp'
import spark01 from '../assets/projects/spark/01.webp'
import spark02 from '../assets/projects/spark/02.webp'
import spark03 from '../assets/projects/spark/03.webp'
import services01 from '../assets/projects/services-app/01.webp'
import services02 from '../assets/projects/services-app/02.webp'
import services03 from '../assets/projects/services-app/03.webp'
import services04 from '../assets/projects/services-app/04.webp'
import services05 from '../assets/projects/services-app/05.webp'
import services06 from '../assets/projects/services-app/06.webp'
import services07 from '../assets/projects/services-app/07.webp'
import admin01 from '../assets/projects/admin-dashboard/01.webp'
import admin02 from '../assets/projects/admin-dashboard/02.webp'
import admin03 from '../assets/projects/admin-dashboard/03.webp'
import admin04 from '../assets/projects/admin-dashboard/04.webp'
import chat01 from '../assets/projects/chat-app/01.webp'
import chat02 from '../assets/projects/chat-app/02.webp'
import chat03 from '../assets/projects/chat-app/03.webp'

// Tools shown on project pages
const tools = {
    react: { name: 'React', icon: FaReact },
    tailwind: { name: 'Tailwind CSS', icon: SiTailwindcss },
    node: { name: 'Node.js', icon: FaNodeJs },
    mongodb: { name: 'MongoDB', icon: SiMongodb },
    bootstrap: { name: 'Bootstrap', icon: SiBootstrap },
    sass: { name: 'Sass', icon: FaSass },
    html: { name: 'HTML5', icon: SiHtml5 },
    javascript: { name: 'JavaScript', icon: SiJavascript },
    typescript: { name: 'TypeScript', icon: SiTypescript },
    php: { name: 'PHP', icon: SiPhp },
    mysql: { name: 'MySQL', icon: SiMysql },
}

// Each project gets a page at /work/projects/:slug
// `image` is the card cover on the Work page, `slides` is the gallery on the project page
export const data = [
    {
        id: 1,
        slug: 'Toyzer',
        name: 'Toyzer',
        title: 'Toyzer is an e-commerce website',
        description: 'Toyzer Store is an e-commerce website specializing in toys and related products. It provides a platform for users to browse, purchase, and manage their favorite toys. The website is built using React for the frontend and Node.js with Express for the backend, with a MongoDB database.',
        image: toyzer01,
        slides: [toyzer01, toyzer02, toyzer03, toyzer04],
        tools: [tools.react, tools.tailwind, tools.node, tools.mongodb],
        demo: 'https://toyzer-store.onrender.com/',
        code: 'https://github.com/Mohammed-M97/toyzer-store',
    },
    {
        id: 2,
        slug: 'Omar',
        name: 'Lawyer Omar Website',
        label: 'Lawyer Omar Ali John',
        title: 'Omar',
        description: 'Omar is a professional lawyer with expertise in various legal fields. He provides legal advice, represents clients in court, and helps them navigate complex legal issues. With a strong commitment to justice and a passion for helping others, Omar is dedicated to achieving the best possible outcomes for his clients.',
        image: omar01,
        slides: [omar01, omar02, omar03],
        tools: [tools.react, { name: 'Bootstrap', icon: FaBootstrap }, tools.sass],
        demo: 'https://zippy-swan-9b0623.netlify.app/#header/',
        code: 'https://github.com/Mohammed-M97/lawyer-omar-portfolio',
    },
    {
        id: 3,
        slug: 'Spark',
        name: 'Spark',
        title: 'Spark is a social media app',
        description: 'Spark is a photo sharing social networking platform. The app allows users to upload posts. Users can browse other users, view trending content, and edit or delete their posts.',
        image: spark01,
        slides: [spark01, spark02, spark03],
        tools: [tools.html, tools.bootstrap, tools.javascript],
        demo: 'https://spark-soical-media.netlify.app/',
        code: 'https://github.com/Mohammed-M97/Spark-soical-media-app',
    },
    {
        id: 4,
        slug: 'ServicesApp',
        name: 'Services App',
        title: 'Services is an app for learning new things',
        description: 'Services is an online learning platform that allows users to choose from a variety of courses, each of which is designed to teach a specific skill or topic. Users can also create their own courses, which can be shared with others. The app also includes a dashboard for admins, which allows them to register users, create new courses, and edit existing courses.',
        image: services01,
        slides: [services02, services03, services04, services05, services06, services07],
        tools: [tools.html, tools.bootstrap, tools.javascript, tools.php, tools.mysql],
        code: 'https://github.com/Mohammed-M97/Services-App',
    },
    {
        id: 5,
        slug: 'AdminDashboard',
        name: 'Admin Dashboard',
        title: 'Admin Dashboard',
        description: 'Admin Dashboard is a web application designed to help administrators manage their tasks efficiently. It provides a user-friendly interface for monitoring key metrics, managing user accounts, and generating reports. Built with React and connected to an API.',
        image: admin01,
        slides: [admin01, admin02, admin03, admin04],
        tools: [tools.react, tools.typescript, tools.sass],
        demo: 'https://sage-kangaroo-d5f862.netlify.app/',
        code: 'https://github.com/Mohammed-M97/admin-dashboard',
    },
    {
        id: 6,
        slug: 'Chatapp',
        name: 'Chat App',
        title: 'Chat app let you communicate with proper way',
        description: 'Services is an online learning platform that allows users to choose from a variety of courses, each of which is designed to teach a specific skill or topic. Users can also create their own courses, which can be shared with others. The app also includes a dashboard for admins, which allows them to register users, create new courses, and edit existing courses.',
        image: chat01,
        slides: [chat01, chat02, chat03],
        tools: [tools.html, tools.bootstrap, tools.javascript, tools.php, tools.mysql],
        code: 'https://github.com/Mohammed-M97/Realtime-Chat-App-client',
    },
]
