import { AboutElement, ContactInfo, ProjectInfo } from "./Types";

// material color: https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=F9A825

export const EMAIL = "erentasdemircs@gmail.com";

export const LINKEDIN_URL = "https://www.linkedin.com/in/etasdemircs/";

export const GITHUB_URL = "https://github.com/etasdemir";

export const ABOUT: AboutElement[] = [
  {
    title: 'summary',
    type: "simple",
    descriptions: [
      "Currently, I am a Software Developer at Basarsoft. I graduated with a BSc in Computer Science from Hacettepe University. I wrote my first line of code before I started college in 2017. I have been working professionally since the first day of 2021. I mostly developed native Android (Kotlin, Java) and cross-platform mobile applications (React Native). I enjoy learning recently released technologies and trying them out on small projects, especially if they are in alpha or beta releases. I take joy in solving new problems that come with new technology. When I'm not working, I often read programming articles or newsletters and work on my side projects created to test the latest technologies."
    ],
  },
  {
    title: 'skills',
    subtitle: "Here are a few technologies I’ve experience in:",
    type: "element",
    descriptions: [
      "Android, Kotlin, Java, C++",
      "React Native, React",
      "JavaScript, HTML/CSS"
    ],
  },
  {
    title: 'favourite newsletters',
    subtitle: "They're great for keeping up with all the news and everything that's changing in the industry. Today's newsletters help save time by providing great articles, tips, useful resources, learning more about a topic that interests you, and so on. I'm getting addicted to newsletters now.",
    type: "hyperlink",
    descriptions: [
      "Android Weekly",
      "Kotlin Weekly",
      "React Native Newsletter",
      "TLDR",
      "TLDR Crypto",
      "Hacker Newsletter",
      "SoftwareLeadWeekly",
      "Changelog",
      "Frontend Focus",
      "Frontend Weekly",
      "Investing.io",
      "Github Explore",
    ],
    urls: [
      "https://androidweekly.net/",
      "http://kotlinweekly.net/",
      "https://reactnativenewsletter.com/",
      "https://tldr.tech/",
      "https://tldr.tech/crypto",
      "https://hackernewsletter.com/",
      "https://softwareleadweekly.com/",
      "https://changelog.com/weekly",
      "https://frontendfoc.us/",
      "https://frontendweekly.co/",
      "https://smash.vc/startup-newsletter/",
      "https://github.com/explore/email"
    ]
  },
];

export const CONTACT: Array<ContactInfo> = [
  {
    urlName: EMAIL,
    url: `mailto:${EMAIL}`,
    buttonText: 'send me email',
  },
  {
    urlName: GITHUB_URL,
    url: GITHUB_URL,
    buttonText: 'visit github',
  },
  {
    urlName: 'Eren Tasdemir',
    url: LINKEDIN_URL,
    buttonText: 'visit linkedin',
  }
];


export const PROJECTS: Array<ProjectInfo> = [
  {
    title: "Albedo",
    description: "With AlbedoApp you can find most popular anime series, top upcomings, airings, movies, manga and novels. Make searches by anime, manga, character or people. Find anime and manga by genres. Follow weekly anime schedule. Read anime quotes. Track down watched anime, read manga, total watched episode count, favourite quotes, favourite anime and manga. Create custom anime and manga lists.",
    url: "https://github.com/etasdemir/AlbedoApp",
    techStack: [
      "Kotlin",
      "MVVM",
      "Dagger2",
      "Architecture Components",
      "Retrofit2",
      "Coroutine"
    ],
    image: "albedo-collage.webp"
  },
  {
    title: "",
    description: "",
    url: "",
    techStack: [],
    image: ""
  }
];
