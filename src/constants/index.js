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
        id: "experience",
        title: "Experience",
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
        title: "Mobil Developer",
        icon: mobile,
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
        name: 'React',
        icon: reactjs,
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
            'Built a case management application for the Toronto Police’s Violent Crimes unit using TypeScript, C#, Vue, .NET, and internal services.',
            'Led technical design efforts in collaboration with team members and stakeholders, delivering 20+ impactful features to enhance the product’s value.',
            'Set up Azure-based release pipelines utilizing Docker to deploy the app across Production, Test, and Development environments.',
            'Designed new SQL Server database schemas and migrated legacy data to support advanced features and improve system maintainability.',
            'Boosted API performance by 30% through optimization of SQL queries, business logic, and by introducing a caching layer.'
        ]
    },
    {
        title: "Full Stack Engineer",
        company_name: "TripSpark Software",
        icon: momentm,
        iconBg: "#E6DEDD",
        date: "May 2022 – June 2023",
        points: [
            'Supported the medical transport of 3.2 million patients daily across the U.S. as part of the medical growth team.',
            'Developed a patient intake app using TypeScript, C#, React, and .NET, reducing average triage time by 60%.',
            'Maintained a React Native mobile app that enabled drivers to manage and execute rides efficiently.',
            'Maintained a Blazor-based patient portal, allowing patients to bypass call centers and book rides directly.',
            'Designed user-friendly interfaces by creating mockups in Figma, participating in UX discussions, and gathering feedback from user testing.'
        ]
    },
    {
        title: "Software Developer",
        company_name: "Aurora Wireless Networks",
        icon: aurora,
        iconBg: "#E6DEDD",
        date: " May 2020 – May 2021",
        points: [
            'Collaborated with a team of 3 developers to design, implement, and test features using Agile methodologies.',
            'Enhanced a long-distance communication system by integrating a Wi-Fi stack, enabling direct data uploads to an AWS database.'
        ]
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