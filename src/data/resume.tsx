import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Inayat Sayyed",
  initials: "SI",
  url: "www.linkedin.com/in/sayyedinayat",
  location: "Mumbai",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer turned Entrepreneur. I love building things which really help people.",
  summary:
    "I'm software engineer who is more into building and scaling SaaS businesses and helping People.In the past, [  I pursued a degree in computer science ](/#education), [Currently Working as full time employee at big Fintech company in Mumbai](/#work).",
  avatarUrl: "/IMG_20231226_000257_337-transformed.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "AWS",
    "GCP",
    "Express",
    "Hono",
    "MongoDB",
    "Prisma",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sayyedinayat92@gmail.com",
    tel: "+91-8767061300",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Inayat27",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sayyedinayat",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/inayat____92",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Worldline Global Services",
      href: "www.worldline.com",
      badges: [],
      location: "Mumbai",
      title: "FullStack developer",
      logoUrl: "/Worldline2.jpg",
      start: "Aug 2022",
      end: "Present",
      description:
        "Making exiting process,fast,efficient.",
    },
  ],
  education: [
    {
      school: "AIKTC-Kalsekar Technical Campus",
      href: "www.linkedin.com/in/sayyedinayat",
      degree: "Bachelor's of Computer engineering",
      logoUrl: "/AIKTC.jpg",
      start: "2018",
      end: "2022",
    },
    {
      school: "Chembur Karnataka Jr. College",
      href: "www.linkedin.com/in/sayyedinayat",
      degree: "Higher Secondary Certificate (HSC)",
      logoUrl: "/College.png",
      start: "2015",
      end: "2017",
    },
    {
      school: "Veer Savarkar English High School",
      href: "www.linkedin.com/in/sayyedinayat",
      degree: "Secondary School Certificate (SSC)",
      logoUrl: "www.linkedin.com/in/sayyedinayat",
      start: "2005",
      end: "2015",
    },
  ],
  projects: [
    {
      title: "Chat Application",
      href: "#",
      dates: "Sep 2024 - Nov 2024",
      active: true,
      description:
        "ChatApplication is a real-time chat application that allows users to communicate seamlessly. It uses WebSocket for live communication, ensuring fast and efficient message delivery. The project is divided into three main parts: two backend servers and a frontend client.",
      technologies: [
        "ReactJS",
        "Typescript",
        "MongoDB",
        "Nodejs",
        "TailwindCSS",
        "Websocket",
        "Redis"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Inayat27/FullstackProject2024.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    
 
  ]
} as const;
