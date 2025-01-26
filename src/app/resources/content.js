import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Ivan",
  lastName: "Flores Hurtado",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Product Engineer",
  avatar: "/images/avatar-cerveza.jpg",
  location: "Europe/Berlin", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Español", "English", "Deutsch"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/iafhurtado",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ivan-flores-hurtado-09243b44/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://twitter.com/iafhurtado",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:iafhurtado@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Product manager and web3 builder</>,
  subline: (
    <>
      I'm Ivan, a product manager at <InlineCode>Palletways</InlineCode>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Ivan is a Hamburg-based product engineer with a passion for transforming complex challenges
        into simple, elegant design solutions. His work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Xocolatl Finance",
        timeframe: "2022 - Present",
        role: "Founder & CPO",
        achievements: [
          <>
            Co-founded a protocol for Xocolatl Finance and La DAO to steer the project in a decentralized way. Contributed as a Product Manager by setting priorities, designing, coding, and deploying a new frontend for the smart contracts, enhancing user experience and operational efficiency.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Palletways",
        timeframe: "2018 - 2022",
        role: "Group Product Manager",
        achievements: [
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Arizona",
        description: <>Bachelor of Science in Operations Management </>,
      },
      {
        name: "Kühne Logistics University",
        description: <>Master of Science in Global Logistics</>,
      },
      {
        name: "Alchemy University",
        description: <>Ethereum Developer Bootcamp</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype powerful user experiences using a Collaborative Product Design approach with Figma to building it.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-02/ux-design-cover.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-02/ux-design-screenshot1.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "React using Next.js (Scaffold-Eth-2)",
        description: <>Building web3 apps with scaffold-eth-2 implies using Next.js, Tailwind CSS, Vercel, Wagmi-Viem to interact with contracts on-chain and RainbowKit to connect to the most popular wallets in the EVM ecosystem.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/xocolatl-screenshot1.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/github-profile.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Solidity using Hardhat or Foundry",
        description: <>Crafting, testing and deloying smart contracts on EVM chains.</>,
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about web3 and product management...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/living.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/rathaus.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/gm.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/alster.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/wuerzburg.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/hbf.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/alster2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
