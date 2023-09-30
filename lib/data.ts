const user_data = {
  name: "John Doe",
  profile_image: "https://randomuser.me/api/portraits/men/62.jpg",
  bio: "I'm a software engineer at Google. I love to code and learn new things. I'm a big fan of React and TypeScript. I also love to play guitar and read books.",
  role: "Software Engineer",
  socialLinks: {
    twitter: "https://twitter.com/",
    linkedin: "https://www.linkedin.com/",
    github: "https://www.github.com/",
  },
  contactDetails: {
    email: "hello@example.com",
    phone: "+1 234 567 890",
  },
  about: {
    paragraphs: [
      `I am a passionate software engineer with a strong background in web development.`,
      `I started my journey as a web developer in 2015 and have been learning new technologies and frameworks ever since. I have worked with many clients and companies to create web applications that are fast, responsive, and user-friendly.`,
      `My expertise lies in using technologies like React and TypeScript to create user-friendly and efficient web applications.`,
      `When I'm not coding, you can find me strumming my guitar or engrossed in a good book.`,
      `Apart from my technical skills, I am a good team player and a quick learner. I am always open to learning new technologies and frameworks. I am also a good communicator and can effectively communicate my ideas to my team members.`,
      `Over the years, I have worked with many clients and companies to create web applications that are fast, responsive, and user-friendly. I have also worked on many open-source projects and have contributed to many popular projects.`,
      `I am currently working as a software engineer at Google. I am also working on a few side projects to improve my skills and learn new technologies.`,
    ],
  },
  projects: [
    {
      title: "E-commerce Website",
      description:
        "An e-commerce platform for buying and selling products online with Stripe integration.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      links: {
        github: "https://github.com/johndoe/ecommerce-website",
        live: "https://www.example.com/ecommerce",
      },
    },
    {
      title: "Blogging Platform",
      description:
        "A blog website where users can create, edit, and publish articles. It includes user authentication and a comment system.",
      techStack: ["Django", "Python", "PostgreSQL", "HTML/CSS", "Django"],
      links: {
        github: "https://github.com/johndoe/blog-platform",
        live: "https://www.example.com/blog",
      },
    },
    {
      title: "Weather App",
      description:
        "A weather application that provides real-time weather information based on user's location or a search query.",
      techStack: ["Vue.js", "OpenWeatherMap API", "Axios", "SCSS"],
      links: {
        github: "https://github.com/johndoe/weather-app",
        live: "https://www.example.com/weather",
      },
    },
    {
      title: "Expense Tracker",
      description:
        "An application to help users track their income and expenses. It provides insights into spending habits.",
      techStack: ["React Native", "Firebase", "Redux", "Expo"],
      links: {
        github: "https://github.com/johndoe/expense-tracker",
        live: "https://www.example.com/expenses",
      },
    },
    {
      title: "Portfolio Website",
      description:
        "Your own portfolio website to showcase your skills, projects, and contact information.",
      techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      links: {
        github: "https://github.com/johndoe/portfolio-website",
        live: "https://www.example.com/portfolio",
      },
    },
    {
      title: "Recipe Finder",
      description:
        "An app that allows users to search for recipes based on ingredients they have on hand.",
      techStack: ["Angular", "Spoonacular API", "RxJS", "Material Design"],
      links: {
        github: "https://github.com/johndoe/recipe-finder",
        live: "https://www.example.com/recipes",
      },
    },
  ],
  experience: [
    {
      title: "Software Engineer",
      company: "Google",
      location: "Mountain View, CA",
      startDate: "2019-01-01",
      endDate: "Present",
      description:
        "Collaborating with designers and product managers to create a user-friendly interface",
    },
    {
      title: "Software Engineer",
      company: "Facebook",
      location: "Menlo Park, CA",
      startDate: "2017-01-01",
      endDate: "2018-12-31",
      description:
        "Worked on the Instagram team to create new features and designs.",
    },
    {
      title: "Software Engineer",
      company: "Amazon",
      location: "Seattle, WA",
      startDate: "2015-01-01",
      endDate: "2016-12-31",
      description:
        "Implemented new features and designs for the Amazon website.",
    },
    {
      title: "Frontend Intern",
      company: "Microsoft",
      location: "Redmond, WA",
      startDate: "2014-01-01",
      endDate: "2014-12-31",
      description:
        "Worked on the Outlook team to create new features and designs.",
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      location: "San Francisco, CA",
      startDate: "2013-01-01",
      endDate: "2013-12-31",
      description:
        "Worked with many clients to create websites and web applications.",
    },
  ],
  skills: {
    "Front End": ["React", "TypeScript", "HTML/CSS", "JavaScript"],
    "Back End": ["Node.js", "Express", "Django", "Flask"],
    Database: ["MongoDB", "PostgreSQL", "MySQL", "SQLite"],
    "Version Control": ["Git", "GitHub", "GitLab", "Bitbucket"],
    Cloud: ["AWS", "Azure", "Heroku", "Netlify"],
    Testing: ["Jest", "Mocha", "Chai", "Cypress"],
  },
};
export default user_data;
