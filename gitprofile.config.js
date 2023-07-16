// gitprofile.config.js

const config = {
  github: {
    username: 'rtphawaii', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'richardpang3',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: 'rpang167',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'rpang16@gmail.com',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/e/2PACX-1vRWBiUUxwm7pECEPbUWn0gHWUTlwfjAqeBRPpwZzovzqYhv81pJFa11WvHLulE88w/pub', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'R',
    'Salesforce Certified',
    'Tableau',
    'JavaScript',
    'React.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'UC Berkeley School of Information',
      position: 'Masters in Data Science Candidate',
      from: 'September 2023',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Zendesk',
      position: 'Sales Operations Analyst',
      from: 'July 2019',
      to: 'January 2023',
      companyLink: 'https://example.com',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Santa Clara University',
      degree: 'BS in Economics',
      from: '2016',
      to: '2020',
    },
    {
      institution: 'UC Berkeley',
      degree: 'Masters in Data Science',
      from: '2023',
      to: '2024',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
//  externalProjects: [
    {
     // title: 'Project Name',
   //   description:
      //  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
   //   imageUrl: 'https://via.placeholder.com/250x250',
    //  link: 'https://example.com',
    },
    {
    //  title: 'Project Name',
    //  description:
     //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //  imageUrl: 'https://via.placeholder.com/250x250',
    //  link: 'https://example.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'rpang167', // to hide blog section, keep it empty
    limit: 5, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
