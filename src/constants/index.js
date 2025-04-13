export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'VogueVault - Modern E-Commerce Platform',
        desc: 'VogueVault is a full-stack e-commerce solution featuring modern UI/UX, product management, and secure payment integration. Built with React and Node.js, it delivers seamless shopping experiences with real-time updates and user authentication.',
        subdesc: 'Developed using React for frontend, Node.js for backend, Tailwind CSS for styling, and MongoDB for database. Integrated essential e-commerce features including cart management, product filtering, and order tracking.',
        href: 'https://vogue-vault-frontend.vercel.app/', // Add your live demo/GitHub link
        texture: '/textures/project/project1.mp4',
        logo: '/public/assets/voguevault-logo.svg',
        logoStyle: {
            backgroundColor: '#1A1A1A',
            border: '0.2px solid #2D2D2D',
            boxShadow: '0px 0px 60px 0px rgba(59, 130, 246, 0.3)', // Blue shadow
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'Node.js',
                path: '/assets/node.svg', // Ensure exact match
            },
            {
                id: 3,
                name: 'Tailwind',
                path: '/assets/tailwindcss.png',
            },
            {
                id: 4,
                name: 'MongoDB',
                path: '/public/assets/mongodb.svg',
            },
            {
                id: 6,
                name: 'JWT',
                path: '/assets/icons8-jwt.svg',
            }
        ],
    },
    {
        title: 'Global Explorer - REST Countries Interface',
        desc: 'An interactive country information portal using core web technologies. Features real-time search, regional filtering, and detailed country profiles with responsive design and dark mode.',
        subdesc: 'Built with vanilla JavaScript and pure CSS, demonstrating clean API integration without frameworks. Includes dynamic data loading and smooth theme transitions.',
        href: 'https://frontend-api-project.netlify.app/',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/globe-icon.png',
        logoStyle: {
            backgroundColor: '#1a365d',
            border: '1px solid #2c5282',
            boxShadow: '0px 0px 40px 0px rgba(56, 178, 172, 0.3)',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'HTML5',
                path: '/assets/icons8-html5.svg'
            },
            {
                id: 2,
                name: 'CSS3',
                path: '/assets/icons8-css3.svg'
            },
            {
                id: 3,
                name: 'JavaScript',
                path: '/assets/icons8-javascript.svg'
            },
            {
                id: 4,
                name: 'REST API',
                path: '/assets/rest-api-icon.svg'
            }
        ],
    },
    {
        title: 'Prime Properties - Modern Real Estate Platform',
        desc: 'A responsive real estate website designed to showcase property listings with modern filters, interactive galleries, and seamless user experience. Built to help clients explore homes, apartments, and commercial spaces effortlessly.',
        subdesc: 'Features property search filters, image sliders, contact forms, and dynamic content loading. Developed with pure HTML, CSS, and JavaScript for optimal performance.',
        href: 'https://homeverse-snowy.vercel.app/',
        texture: '/textures/project/project3.mp4', // Add a screen recording of your site
        logo: '/assets/brand_name.png', // Update with your real estate logo
        logoStyle: {
            // backgroundColor: '#3B82F6', // Trustworthy blue
            // background: 'linear-gradient(0deg, #3B82F650, #3B82F650), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(59, 130, 246, 0.3)' // Blue glow
        },
        spotlight: '/assets/spotlight3.png', // Add a hero section screenshot
        tags: [
            {
                id: 1,
                name: 'HTML5',
                path: '/assets/icons8-html5.svg'
            },
            {
                id: 2,
                name: 'CSS3',
                path: '/assets/icons8-css3.svg'
            },
            {
                id: 3,
                name: 'JavaScript',
                path: '/assets/icons8-javascript.svg'
            },  
        ]
    },
]
//     {
//         title: 'Horizon - Online Banking Platform',
//         desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
//         subdesc:
//             'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
//         href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
//         texture: '/textures/project/project4.mp4',
//         logo: '/assets/project-logo4.png',
//         logoStyle: {
//             backgroundColor: '#0E1F38',
//             border: '0.2px solid #0E2D58',
//             boxShadow: '0px 0px 60px 0px #2F67B64D',
//         },
//         spotlight: '/assets/spotlight4.png',
//         tags: [
//             {
//                 id: 1,
//                 name: 'React.js',
//                 path: '/assets/react.svg',
//             },
//             {
//                 id: 2,
//                 name: 'TailwindCSS',
//                 path: 'assets/tailwindcss.png',
//             },
//             {
//                 id: 3,
//                 name: 'TypeScript',
//                 path: '/assets/typescript.png',
//             },
//             {
//                 id: 4,
//                 name: 'Framer Motion',
//                 path: '/assets/framer.png',
//             },
//         ],
//     },
//     {
//         title: 'Imaginify - AI Photo Manipulation App',
//         desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
//         subdesc:
//             'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
//         href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
//         texture: '/textures/project/project5.mp4',
//         logo: '/assets/project-logo5.png',
//         logoStyle: {
//             backgroundColor: '#1C1A43',
//             border: '0.2px solid #252262',
//             boxShadow: '0px 0px 60px 0px #635BFF4D',
//         },
//         spotlight: '/assets/spotlight5.png',
//         tags: [
//             {
//                 id: 1,
//                 name: 'React.js',
//                 path: '/assets/react.svg',
//             },
//             {
//                 id: 2,
//                 name: 'TailwindCSS',
//                 path: 'assets/tailwindcss.png',
//             },
//             {
//                 id: 3,
//                 name: 'TypeScript',
//                 path: '/assets/typescript.png',
//             },
//             {
//                 id: 4,
//                 name: 'Framer Motion',
//                 path: '/assets/framer.png',
//             },
//         ],
//     },
// ];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'CloudCreditTechnology',
        pos: 'Frontend Developer Intern',
        duration: 'Jan 2025 - March 2025',
        title: "Developed responsive web applications using React and Tailwind CSS, implementing state management with Redux. Collaborated with UX designers and backend teams to deliver high-quality features. Optimized component performance and participated in Agile development processes.",
        icon: '/assets/react.svg',
        animation: 'victory',
    },
  
    {
        id: 2,
        name: 'VougueVault',
        pos: 'Full Stack Developer',
        duration: '2023 - Present',
        title: "Built full-cycle fashion e-commerce platform using React.js/Node.js stack with MongoDB. Developed secure JWT authentication flow, RESTful APIs for product management, and admin dashboard with CRUD operations. Implemented responsive UI with Tailwind CSS and complex state management using Redux Toolkit.",
        icon: '/assets/voguevault-logo.svg',
        animation: 'salute',
     
    },
    {
        id: 3,
        name: 'Real Estate Platform',
        pos: 'Freelance Web Developer',
        duration: '2023 - 2024',
        title: "Built a full-stack real estate marketplace with property search filters, interactive maps, and user authentication. Implemented frontend using React with Tailwind CSS, and integrated third-party API for property listings. Delivered mobile-first responsive design with 40% performance improvement.",
        icon: '/assets/brand_name.png',
        animation: 'clapping',
    },
    // {
    //     id: 3,
    //     name: 'Notion',
    //     pos: 'Junior Web Developer',
    //     duration: '2019 - 2020',
    //     title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    //     icon: '/assets/notion.svg',
    //     animation: 'salute',
    // },
];