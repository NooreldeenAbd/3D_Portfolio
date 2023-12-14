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
    python,
    java,
    dotnet,
    docker,
    tailwind,
    nodejs,
    mongodb,
    git,
    csharp,
    vue,
    covalence,
    momentm,
    aurora,
    camps,
    jobFinder,
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
];

const technologies = [
    {
        name: "csharp",
        icon: csharp,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "Vue",
        icon: vue,
    },
    {
        name: ".NET",
        icon: dotnet,
    },
    {
        name: "sql",
        icon: sql,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "Docker",
        icon: docker,
    },

];

const experiences = [
    {
        title: "Software Engineer",
        company_name: "Covalence Inc.",
        icon: covalence,
        iconBg: "#E6DEDD",
        date: "June 2023 – Present",
        points: [
            'Delivered impactful presentations to senior executives and stakeholders, effectively communicating findings and recommendations.',
            'Collaborate closely with both internal and external representatives to gather business requirements to build a custom law enforcement application for the Toronto Police using TypeScript, C#, Vue, and .NET, and ensure alignment with client needs.',
            'Provided guidance on industry best practices and commonly used software stacks, promoting efficient and effective development processes.',
            'Streamlined the development workflow by introducing Agile and Jira as well as creating CI/CD pipelines hosted on Azure DevOps.',
            'Wrote custom plugin rules in Java for pre-existing HCM and WFM software and automated tasks using Python.'
        ],
    },
    {
        title: "Full Stack Engineer",
        company_name: "Momentm Software",
        icon: momentm,
        iconBg: "#E6DEDD",
        date: "May 2022 – June 2023",
        points: [
            'Demonstrated expertise in full-stack development as part of the Medical Growth team, creating and maintaining three distinct mobile and web applications, leveraging technologies including TypeScript, C#, Vue, and .NET which enabled the non-emergency medical transport of 3.2 million patients annually across the United States.',
            'Assumed responsibility for identifying and resolving critical and major issues within both new and legacy codebases, ensuring the stability and reliability of products.',
            'Aided to better the development workflow by introducing Docker, which helped three new colleagues get set up faster.',
        ],
    },
    {
        title: "Software Developer Intern",
        company_name: "Aurora Wireless Networks",
        icon: aurora,
        iconBg: "#E6DEDD",
        date: " May 2020 – September 2021",
        points: [
            'Managed small projects by drafting project plans, budgets, and schedules, effectively minimizing slippage by identifying risks and developing mitigation plans.',
            'Collaborated with developers to design, test, and debug various software programs, ranging from UI using React to embedded programs using C++.',
            'Contributed to improving an existing long-distance communication system by adding a Wi-Fi stack, enabling the system to be discovered and queried over a local network.',
        ],
    }
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
    {
        name: "Job Finder",
        description:
            "Mobile application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "React Native",
                color: "blue-text-gradient",
            },
            {
                name: "rest-api",
                color: "green-text-gradient",
            },
            {
                name: "expo",
                color: "pink-text-gradient",
            },
        ],
        image: jobFinder,
        source_code_link: "https://github.com/NooreldeenAbd/Job_Finder",
    },
];

const socialLinks = [{ id: 0, link: 'https://github.com/NooreldeenAbd', image: github, alt: 'github' }, { id: 1, link: 'https://www.linkedin.com/in/nooreldeen-a-3a9285b8/', image: linkedin, alt: 'linkedin' }]

export { services, technologies, experiences, testimonials, projects, socialLinks };