import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rohit Debnath",
  initials: "RD",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "As a freelance developer, I make SaaS, workflows, and user-centric solutions simpler—because who doesn’t love a good shortcut?",
  summary:
    "Welcome to my portfolio! I’m Rohit, a developer and aspiring product manager with a passion for building innovative SaaS solutions. As a freelancer, I’ve worked on projects like MedyMan (SaaS Clinic Management), BuyByEq (SaaS Restaurant Management), and Gamenation.in (E-Commerce for Gaming). My journey through hackathons, community building, and product development has equipped me with both technical skills and strategic insight. Let’s connect and build something amazing together! 🚀",







  avatarUrl: "/mee.png",
  skills: [
    "HTML/CSS",
    "React",
    "Tailwind css",
    "Bootstrap css",
    "Next.js",
    "Typescript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySql",
    "Flask",
    "Python",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://drive.google.com/file/d/1a4wmdDcGnGHI0i4pG-PF5THk_WJnN1-f/view?usp=sharing", icon: NotebookIcon, label: "Resume" },
  ],
  contact: {
    email: "debnathrohit97@gmail.com",
    tel: "+91 9395225956",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://lolurl.site/Rohit-Github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://lolurl.site/Rohit-LinkedIn",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://lolurl.site/Rohit-X",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:debnathrohit97@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Styflowne Finance Services Private Limited",
      href: "https://earnifyy.com",
      badges: [],
      location: "Remote",
      title: "Backend Developer Engineer",
      logoUrl: "/earnifyy.png",
      start: "Aug 2023",
      end: "Jan 2024",
      description:
        "I designed and implemented the database and backend architecture for Earnifyy, leveraging MongoDB for robust data management. I streamlined the payment tracking and user authentication systems, which resulted in a 40% reduction in processing times. Additionally, I focused on enhancing the platform's reliability, leading to fewer technical issues, particularly during peak usage times.",
    },
    {
      company: "Codasauras Developers Community",
      badges: [],
      href: "https://codasauras.in",
      location: "Remote",
      title: "Founding Member and Community Lead",
      logoUrl: "/codasauras.png",
      start: "May 2024",
      end: "Present",
      description:
        "I coordinated over 20 events to foster developer engagement and knowledge sharing within the Codasauras Developers Community. To enhance the overall event experience, I implemented a structured feedback system, which led to a 25% increase in event satisfaction scores.",
    },
    
  ],
  education: [
    {
      school: "JIS College of Engineering",
      degree: "B.Tech in Computer Science and Engineering (Ai/Ml)",
      logoUrl: "/jis.png",
      start: "2023",
      end: "2027",
    },
    
  ],
  projects: [
    {
      title: "LOL URL",
      href: "https://lolurl.site",
      dates: "Smart Link Tracking & Analytics",
      active: true,
      description:
        "LOL URL is a smart URL tracking tool with 1,000+ users, going beyond just shortening links. It provides real-time insights into user engagement, including total clicks, location analytics, active time analysis, and device details. Whether you're sharing portfolio links, event invites, or marketing campaigns, LOL URL helps you track and optimize your links with ease.",
      technologies: [
        "React.js",
        "TailwindCSS",
        "Supabase",
        "Vercel",
        "Aceternity UI",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://lolurl.site",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Rohit-Dnath/LOL-URL",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/lolurl.jpg",
      video:
        "",
    },
    {
      title: "MedyMan.com",
      href: "https://www.medyman.com/",
      dates: "Freelance Project for Healthcare Professionals",
      active: true,
      description:
        "Designed and developed a full-stack platform to streamline patient management, appointment scheduling, and clinic operations. Built as a freelance project using React.js, TailwindCSS, Node.js, Express.js, MongoDB, Prisma, Razorpay, and Docker, enabling seamless workflow automation, secure payment processing, and scalable infrastructure for healthcare professionals.",
      technologies: [
        "React.js",
        "TailwindCSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Prisma",
        "Docker",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.medyman.com/",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/magicuidesign/magicui",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/medyman2.png",
      video: "",
    },
    {
      title: "gamenation.in",
      href: "https://gamenation.in/",
      dates: "Freelanced Frontend Development for Gaming E-commerce",
      active: true,
      description:
        "As a freelance project sourced through Funngro.com, I developed the frontend of Gamenation.in, an e-commerce platform for video games and accessories. Focused on creating a responsive and user-friendly interface, I contributed to their online presence, enabling users to buy, sell, and trade video games.",
      technologies: [
        "HTML",
        "CSS",
        "JS",
      ],
      links: [
        {
          type: "Website",
          href: "https://gamenation.in/",
          icon: <Icons.globe className="size-3" />,
        },
        
      ],
      image: "/gamenation.png",
      video: "",
    },
    {
      title: "WebNetr",
      href: "https://github.com/Rohit-Dnath/WebNetr-Anti-Manipulation-Brigade",
      dates: "Hackathon Project | AI Dark Pattern Detector",
      active: true,
      description:
        "Webnetr is a web extension developed by Rohit and his team during the Dark Pattern Buster hackathon. It uses an AI/ML model to detect dark patterns on websites, helping users identify manipulative design elements. After clearing the regional round, Webnetr became a grand finalist, showcasing its potential to promote ethical web design.",
      technologies: [
        "HTML",
        "CSS",
        "JS",
        "Python",
        "Flask",
        "Panadas",
        "Scikit-learn",
    

      
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Rohit-Dnath/WebNetr-Anti-Manipulation-Brigade",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/webnetr.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Trithon Triplets Hackathon S1 | 2nd Runners Up",
      dates: "19 Nov, 2023",
      location: "Bhubaneswar, India",
      description: "Developed a web application for connecting Common peoples and Scrap vendors for recycling and reusing the waste materials in exchange of Cash or Gift cards.",
      image:
        "./trident.png",
      
      links: [],
    },
    {
      title: "Dark Patterns Buster Hackathon | Grand Finalist",
      dates: "Sep 2023",
      location: "IIT Varanasi, India",
      description:
        "Developed a web extension that uses AI/ML to detect dark patterns on websites, helping users identify manipulative design elements.",
      image:
        "./iit.png",
      
      links: [],
    },
      ],
} as const;
