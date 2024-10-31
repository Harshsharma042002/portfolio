import img1 from "../assests/img1.jpg";
import img2 from '../assests/img2.jpg';
import img3 from '../assests/img3.jpg';
import img4 from '../assests/img4.jpg';

export const getInternships=[
    {
        role:"full stack developer",
        duration:"2 months",
        companyName:"TeachNook",
        description: "Built full-stack applications for educational platforms.",
        technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
        achievements: ["Delivered key features for platform MVP", "Enhanced application security"],
    },
    {
        role:"web developer",
        duration:"1 month",
        companyName:"Innobyte services",
        description: "Developed responsive web components for client websites.",
        technologies: ["HTML", "CSS", "JavaScript"],
        achievements: ["Implemented optimized layouts reducing bounce rate"],
    }
]

export const getProjects=[
    {
        name:"E-commerce website",
        description:"An online platform for browsing, searching, and purchasing products.",
        technology:["ReactJs","NodeJs","ExpressJs","MongoDB","Multer","Tailwind-css","Material-UI"],
        github:"https://github.com/Harshsharma042002/E-commerce",
        features:["User Authentication & authorization","Shopping Cart","Product search and filter","Payment Gateway","Resposnive design"],
        image:img3
    },
    {
        name:"Custom-GPT",
        description:"A personalized AI assistant built on GPT, tailored to answer questions and provide user-specific assistance.",
        technology:["Python","LangChain","Mistal","ReactJS","Tailwind-css"],
        github:"https://github.com/Harshsharma042002/",
        features:["Custom prompts","external API integrations","user preference learning","file-input","secure authentication"],
        image:img1
    },
    {
        name:"Food recipe website",
        description:" A platform for exploring and sharing diverse recipes, designed to make cooking accessible and enjoyable.",
        technology:["ReactJs","NodeJs","ExpressJs","MySQL","Multer"],
        github:"https://github.com/Harshsharma042002/Food-recipe",
        features:["Recipe search and filter","User Authentication & Authorization","Ingredient-based recipe"],
        image:img4
    },
    {
        name:"NEWS",
        description:"A real-time news website offering up-to-date articles across various categories and interests.",
        technology:["ReactJs","NodeJs","ExpressJs","MongoDB"],
        github:"https://github.com/Harshsharma042002/news",
        features:["Category-based news","trending stories","API integration for live updates","customizable news feed"],
        image:img2
    },
]

export const getEducation=[
        {
            Degree:"BACHELOR",
            Specialization:"Computer science and engineering",
            institute:"Jeppiaar engineering college",
            duration:"2020-2024",
            grade:"8.3 cgpa",
            achievements:"Graduated with a consistent academic record and no backlogs.",
            location: "Chennai, Tamil Nadu"

        },
        {
            Degree:"HSC",
            Specialization:["physics","Chemistry","Maths","Computer science"],
            institute:"Revoor Padmanabha Chetty's Matric hr sec school",
            duration:"2019-2020",
            grade:"83%",
            achievements:"Top scorer in Computer Science",
            location: "Chennai, Tamil Nadu"

        },
        {
            Degree:"SSLC",
            Specialization:["Tamil","English","Maths","Science","Social Science"],
            institute:"Sri Mahaveer Jain hr sec school",
            duration:"2017-2018",
            grade:"87%",
            achievements:"Top 5% of class",
            location: "Chennai, Tamil Nadu"
        },
]

export const getSkills=[
    {name:"Java",proficiency:"Advanced",},
    {name:"ReactJS",proficiency:"Advanced"},
    {name:"NodeJS",proficiency:"Advanced"},
    {name:"MongoDB",proficiency:"Advanced"},
    {name:"Tailwind-css",proficiency:"Advanced"}, 
    {name:"JavaScript",proficiency:"Intermediate"},
    {name:"C++",proficiency:"Intermediate"},
    {name:"MySQL",proficiency:"Intermediate"},
]

