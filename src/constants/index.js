import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    sql,
    tailwind,
    nodejs,
    mongodb,
    git,
    csharp,
    vue,
    momentm,
    aurora,
    camps,
    threejs,
    github,
    linkedin,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Frontend Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },

    {
        title: "Electrical Engineering",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "vue",
        icon: vue,
    },
    {
        name: "csharp",
        icon: csharp,
    },
    {
        name: "sql",
        icon: sql,
    },
];

const experiences = [
    {
        title: "Embedded Software Developer",
        company_name: "Aurora Wireless Networks",
        icon: aurora,
        iconBg: "#E6DEDD",
        date: " May 2020 – September 2021",
        points: [
            "Managed small projects of 2-3 people by drafting project plans, budgets, and schedules as well as minimizing slippage by identifying risks and coming up with mitigation plans.",
            "Designed, tested, and debugged various software programs ranging from PC apps to embedded firmware while collaborating with 1-2 other developers.",
            "Improved on the existing long distance communication system by adding TCP/IP features. The system could be found and queried over Wi-Fi.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Momentm Software (formally Tripspark)",
        icon: momentm,
        iconBg: "#E6DEDD",
        date: "May 2022 – Present",
        points: [
            "Working as part of the medical growth team to develop new products, which facilitated the non-emergency medical transport of 500,000 patients across the U.S. per year.",
            "Developed  and maintained web applications using technologies such as TypeScript, C#, Vue, and .NET.",
            "Utilized Agile methodologies along with Git to collaborate and execute projects within a team of 4 other developers.",
            "Investigated and fixed critical and major bugs within new and legacy codebase.",
            "Participated in code reviews and contributed to the development of best practices.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Camps",
        description:
            "First REAL project. A Website that allowed users to signup and post about their favorite camp grounds. Each campground would be displayed on a map and could be rated and reviewed by other users.",
        tags: [
            {
                name: "ejs",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: camps,
        source_code_link: "https://github.com/NooreldeenAbd/Camping_Website",
    },
];

const socialLinks = [{ id: 0, link: 'https://github.com/NooreldeenAbd', image: github, alt: 'github' }, { id: 1, link: 'https://www.linkedin.com/in/nooreldeen-a-3a9285b8/', image: linkedin, alt: 'linkedin' }]

export { services, technologies, experiences, testimonials, projects, socialLinks };