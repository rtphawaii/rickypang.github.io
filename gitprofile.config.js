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
    calendly: 'https://calendly.com/rtphawaii',
    phone: '',
    email: 'rpang16@gmail.com',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/1E7hokYFxYqvdZYzFWg592gREivS2s5pK/edit?usp=sharing&ouid=106181217289032167190&rtpof=true&sd=true', // Empty fileUrl will hide the `Download Resume` button.
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
  /* Calendly: [
    {
      name: 'Book time with Ricky here',
      body: '',
      year: '',
      link: 'https://calendly.com/rtphawaii'
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
  externalProjects: [
    {title: 'Osaka Travel Analysis',
      description:
        'Forecasting and Statistical Analysis of the Osaka market for travel',
      imageUrl: 'data:image/png;base64,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',
      link: 'https://drive.google.com/file/d/1yLRwyuA1_YqHAJT2GeCFRoZv6EHgtj3H/view?usp=sharing',
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
    defaultTheme: 'autumn',

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
 // footer: `Made with <a 
    //  class="text-primary" href="https://github.com/arifszn/gitprofile"
    //  target="_blank"
    //  rel="noreferrer"
  //  >GitProfile</a> and ❤️`,
};

export default config;
