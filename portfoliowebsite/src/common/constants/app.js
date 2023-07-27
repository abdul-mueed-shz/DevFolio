export const APP_CONSTANTS = {
  username: "Abdul Mueed",
  profilePicture: require("../../assets/profile.jpg"),
  greetingsOBJ: {
    greetingText: function () {
      return `Hi I am ${APP_CONSTANTS.username}`;
    },
    greetingGIF: {
      gifLink: "https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif",
      gifWidth: "width:40px",
    },
  },
  introductionOBJ: {
    address: {
      title: "My Address",
      value: "Lahore, Pakistan",
    },
    mail: {
      title: "Email Me",
      value: "abdulmueedshahbaz@gmail.com",
    },
    phone: {
      title: "Call Me",
      value: "+923234942960",
    },
    position: "A Software Engineer",
    introduction:
      "who loves making web apps with Javascript/ VueJs/ Django Rest Framework and some other cool libraries and frameworks | Ex Google DSC core team member | Mindstorm Gamejam 2021 graduate | Upwork/Fiverr Freelance developer",
    introductionGIF: {
      gifLink: require("../../assets/rocket.png"),
      gifWidth: "width:20px",
    },
    introImage: {
      imgLink: "https://media.giphy.com/media/zhYSVCirREeIZtONCI/giphy.gif",
      style: "max-width:650px",
    },
  },
  profession: {
    title: "What I do",
    body: "Make Web apps with awesome technologies",
    sideImage: {
      style: "max-width:650px",
      imgLink: "https://media.giphy.com/media/juua9i2c2fA0AIp2iq/giphy.gif",
    },
    technologies: {
      iconsSize: "xl",
      iconsList: [
        { iconColor: "orange", icon: "mdi-language-html5" },
        { iconColor: "blue-6", icon: "mdi-language-css3" },
        { iconColor: "yellow-8", icon: "mdi-language-javascript" },
        { iconColor: "blue-9", icon: "mdi-language-python" },
        { iconColor: "green", icon: "mdi-vuejs" },
        { iconColor: "red", icon: "mdi-npm" },
        { iconColor: "blue", icon: "mdi-database" },
        { iconColor: "black", icon: "mdi-github" },
        { iconColor: "red", icon: "mdi-git" },
      ],
    },
    skills: {
      skillIcon: { iconColor: "yellow-9", icon: "mdi-lightning-bolt" },
      skillList: [
        "Develop Highly interactive Front end Apps",
        "Develop Maintainable Backend Services",
        "Develop Independent or Embedded browser extensions",
        "Integrate third party libraries efficiently in web apps",
        "Design and implement RESTful APIs methodically",
        "Develop scalable and secure web solutions",
        "Efficiently collaborate, deliver, and adapt with clients.",
      ],
    },
  },
  proficiecy: {
    title: "Proficiency",
    skills: {
      minSliderVal: 0,
      maxSliderVal: 10,
      sliderColor: "purple-4",
      thumbColor: "purple-4",
      innerTrackColor: "white",
      trackSize: "13px",
      thumbSize: "0px",
      skillList: [
        { title: "Frontend/Design", sliderValue: 8 },
        { title: "Programming", sliderValue: 7 },
        { title: "Backend", sliderValue: 6 },
      ],
    },
  },
  openSourceProjs: {
    title: "Open Source Projects",
    titleIcon: "mdi-book",
    languageConf: {
      icon: "mdi-circle",
      iconColor: "pink",
      iconSize: "sm",
    },
    starsConf: {
      icon: "mdi-star",
      iconColor: "yellow-9",
      iconSize: "md",
    },
    pullReqsConf: {
      icon: "mdi-source-pull",
      iconColor: "",
      iconSize: "md",
    },
    projects: [
      {
        projTitle: "Authentication Application",
        projLink: "https://github.com/Abdul-Mueed-Shahbaz/Auth-Application",
        projDesc:
          "A Full stack authentication application made using quasar 2 for frontend and django rest framework for backend. The application is made completely flexible to be coupled with any other application and implements jwt token authentication.",
        stars: 2,
        language: "JS & Python",
        pullReqs: 0,
      },
      {
        projTitle: "Starks Ecommerce Application",
        projLink:
          "https://github.com/Abdul-Mueed-Shahbaz/Eccomerce-Application",
        projDesc:
          "A Full stack ecommerce application made using quasar 2 for frontend and django rest framework for backend. The application is coupled with my auth application described in the auth application card for login and jwt token authentication.",
        stars: 2,
        language: "JS & Python",
        pullReqs: 0,
      },
      {
        projTitle: "Developer Portfolio Application (Devfolio)",
        projLink: "https://github.com/Abdul-Mueed-Shahbaz/DevFolio",
        projDesc:
          "A single page portfolio application made with quasar containing sections verbosely explaining the developers's skills, interests and experiences.",
        stars: 2,
        language: "JS",
        pullReqs: 0,
      },
      {
        projTitle: "Anime Tracker Application",
        projLink: "https://github.com/Abdul-Mueed-Shahbaz/Anime-Archives",
        projDesc:
          "A single page application made with quasar that shows you recent releases, top rated, upcoming and recently released anime along with the search capabilities. The search even shows the score, type, airing status, and release year.",
        stars: 1,
        language: "JS",
        pullReqs: 0,
      },
      {
        projTitle: "Dino-Run",
        projLink: "https://github.com/Abdul-Mueed-Shahbaz/Dino-Run",
        projDesc:
          "A runner game made in unity. Personally, worked on all the mechanics implemented in the game as well as some level and UI tweaks",
        stars: 1,
        language: "c#",
        pullReqs: 0,
      },
      {
        projTitle: "Todo-App",
        projLink: "https://github.com/Abdul-Mueed-Shahbaz/Todo-App",
        projDesc:
          "A Flutter project to create a Todo app. SQFlite database engine is used to store persistent data.",
        stars: 1,
        language: "Dart",
        pullReqs: 0,
      },
      {
        projTitle: "Personal Expenses Application",
        projLink:
          "https://github.com/Abdul-Mueed-Shahbaz/Personal-Expenses-App",
        projDesc:
          "A flutter project for the front end of a personal expenses app.",
        stars: 1,
        language: "Dart",
        pullReqs: 0,
      },
      {
        projTitle: "BMI Calculator",
        projLink: "https://github.com/Abdul-Mueed-Shahbaz/bmi-calculator",
        projDesc: "Bmi Calculator app made using flutter.",
        stars: 1,
        language: "Dart",
        pullReqs: 0,
      },
      {
        projTitle: "ChatApp",
        projLink: "https://github.com/Abdul-Mueed-Shahbaz/ChatApp",
        projDesc:
          "A Chat Application made using Python socket and Tkinter library",
        stars: 6,
        language: "Python",
        pullReqs: 2,
      },
    ],
    confidentialProjects: [
      {
        projTitle: "Authentication Application",
        projLink: "https://github.com/Abdul-Mueed-Shahbaz/Auth-Application",
        projDesc:
          "A Full stack authentication application made using quasar 2 for frontend and django rest framework for backend. The application is made completely flexible to be coupled with any other application and implements jwt token authentication.",
        stars: 2,
        language: "JS & Python",
        pullReqs: 0,
      },
    ],
  },
  proprietaryProjects: {
    title: "Proprietary Projects I have worked on",
    titleIcon: "mdi-account-lock",
    languageConf: {
      icon: "mdi-circle",
      iconColor: "purple",
      iconSize: "sm",
    },
    projects: [
      {
        projTitle: "Fut Trading Bot",
        projDesc:
          "Fut Trading Bot, a game-changing tool I've worked on, is the ultimate companion for FIFA Ultimate Team (FUT) enthusiasts. Designed to enhance your trading experience, this powerful bot automates sniping and selling processes. With lightning-fast search capabilities that outperform human abilities, it scans the FUT Web App swiftly, identifying lucrative trading opportunities that may otherwise go unnoticed. By utilizing the Fut Trading Bot, you can maximize your coin earnings and eliminate the need to invest real money in FIFA coins. Seamlessly integrated and easy to use, our Fut Trading Bot empowers you to take control of your trading endeavors in FUT, unlocking new levels of success and financial freedom.",
        language: "JS",
        responsibilities: [
          "Embed the Fut Trading Bot seamlessly within the underlying Fifa 23 Fut Web App.",
          "Implement state management using Pinia for efficient data handling.",
          "Establish communication between the Fut Trading Bot and the Fut Web App by utilizing quasar bridge calls (message passing).",
          "Develop, thoroughly test, and ensure functional implementation of the Fut Trading Bot.",
        ],
      },
      {
        projTitle: "rCBT",
        projDesc:
          "rCBT is a computer-based secure online test management system for creating, administering, conducting, and grading computer-based exams. It allows institutions to conduct exams remotely, at designated locations with authentication measures. The platform has eased the transparency of online assessments for students and institutions. It also offers various proctoring controls, including one-to-one, one-to-many, and AI-based options, to ensure transparency and convenience for the examination management system. Institutions can conduct examinations for examinees using this platform from any remote location",
        language: "JS & Python",
        responsibilities: [
          "Developed and implemented the functionality for generating complete exams/papers in rCBT, enabling seamless exam creation and administration.",
          "Integrated proctoring functionalities using the OpenVidu library, ensuring secure and transparent exam sessions with various proctoring controls such as one-to-one, one-to-many, and AI-based options.",
          "Took charge of the complete process handling of paper cancellation and warning sending to examinees, ensuring smooth management of exam-related communications and actions.",
          "Led the development of numerous other features within the rCBT platform, enhancing the overall user experience and functionality.",
        ],
      },
      {
        projTitle: "rLoginApp",
        projDesc:
          "rLoginApp is a versatile full-stack authentication application, developed with Quasar 2 for the frontend and Django Rest Framework for the backend. This application is meticulously designed to be seamlessly integrated with any other application. It leverages JWT token authentication for secure user authentication and authorization. With Quasar 2 as the frontend framework, the application delivers a robust and responsive user interface, while Django Rest Framework empowers the backend with efficient and scalable API development. Together, they provide a powerful foundation for building flexible and secure authentication systems.",
        language: "JS & Python",
        responsibilities: [
          "Expertly resolved bugs and issues within the rLoginApp, ensuring its stability and reliability for seamless user authentication and authorization.",
          "Successfully derived inspiration from the rLoginApp to develop a new application, incorporating additional features and leveraging the integration/connection capabilities with other RedMarker's apps, such as the rCBT platform.",
          "Gained valuable insights and hands-on experience in integrating and connecting the rLoginApp with other RedMarker's applications, establishing a deeper understanding of seamless app integration within the ecosystem.",
          "Demonstrated adaptability and proficiency by working with Quasar 2 for frontend development and Django Rest Framework for backend development in the creation and enhancement of the rLoginApp, showcasing the ability to deliver versatile full-stack authentication solutions.",
        ],
      },
      {
        projTitle: "Gaia",
        projDesc:
          "Gaia, a monumental achievement in game development, is the result of my dedicated efforts as part of a team. Created using Unity, this third-person thriller shooter game surpasses the expansive scale of even GTA V. Gaia presents players with a sprawling open world, meticulously crafted to immerse them in a breathtaking environment teeming with intricate details. From towering cityscapes to vast wilderness, Gaia offers an unparalleled sense of exploration and adventure. Gaia is a testament to the boundless possibilities of game development, offering an unforgettable experience for players seeking an epic and immersive gaming experience.",
        language: "C#",
        responsibilities: [
          "Single-handedly spearheaded the development of Gaia, an awe-inspiring third-person thriller shooter game, using Unity's Gaia asset and a carefully curated selection of assets provided by the client.",
          "Leveraged Unity's Gaia asset along with other resources to create a breathtaking and immersive open-world environment, meticulously designed to captivate players with its intricate details and expansive scale, rivaling renowned games like GTA V.",
          "As the sole developer of the Gaia project, skillfully harnessed Unity's capabilities to craft a vast and diverse terrain, encompassing towering cityscapes and sprawling wilderness, delivering an unparalleled sense of exploration and adventure.",
          "Gaia stands as an extraordinary testament to the limitless potential of game development, showcasing an unforgettable gaming experience meticulously created by utilizing Unity's Gaia asset and client-provided assets, bringing forth an exhilarating and immersive gameplay encounter.",
        ],
      },
    ],
  },
  achievements: {
    title: "Achievements & Certifications",
    desc: "ACHIVEMENTS, CERTIFICATIONS, AWARD LETTERS AND SOME COOL STUFF I HAVE DONE!",
    certificationImgStyle: "",
    certifications: [
      {
        title: "Microsoft Technology Associate",
        position: "MICROSOFT CERTIFIED 2021",
        desc: "Completed MTA: Introduction to Programming Using Python",
        imageLink: require("../../assets/mta.webp"),
        imageStyle: "max-width:300px",
      },
      {
        title: "Microsoft Certified",
        position: "MICROSOFT CERTIFIED 2021",
        desc: "Completed Microsoft Certified: Azure Fundamentals certification",
        imageLink: require("../../assets/MC.webp"),
        imageStyle: "max-width:300px",
        imgSectionHeight: "height:330px",
      },
    ],
  },
  experiences: {
    title: "Experiences",
    expList: [
      {
        entityName: "Redmath",
        expCardBg: "bg-red-8",
        entityLogo: {
          logo: require("assets/ExperiencesImages/redmath.png"),
        },
        position: "Full stack web developer",
        duration: "August 2022-Present",
        description:
          "Redmath is a software firm working with international and national clients on revloutionary ideas. Redmath is working on several exciting products tackling problems related to Fintech, Edtech and Eccomerce. They also have SAAS divisions",
        responsibilities: [
          "Responsible for conceptualizing and executing clear, quality code to develop the best software",
          "Contributed in Edtech systems and Websites using Vue JS - Quasar framework - Django - Javascript",
        ],
      },
      {
        entityName: "MindStorm Studios",
        expCardBg: "bg-orange-9",

        entityLogo: {
          logo: require("assets/ExperiencesImages/mindstorm.jpg"),
        },
        position: "Unity Game Developer",
        duration: "July 2021-September 2021",
        description:
          "Mindstorm studios is one of the largest and most well known Game development firm in Lahore, Pakistan. Mindstorm studios have published several popular android games and are actively working on innovative ideas.",
        responsibilities: [
          "Responsible for conceptualizing and executing clear, quality code to develop the best software",
          "Contributed in creating the mechanics for a 3d runner game",
        ],
      },
      {
        entityName: "Intelligent Machine Labs",
        expCardBg: "bg-blue-5",

        entityLogo: {
          logo: require("assets/ExperiencesImages/imli.webp"),
        },
        position: "ML Intern",
        duration: "July 2019 – Aug 2019",
        description:
          "Intelligent Machines Lab ITU, is an endeavor to establish close working relationship among researchers, engineers and developers",
        responsibilities: [
          "Responsible for generating training dataset of landscape features, from high resolution satellite imagery data using Labelbox",
          "The dataset was used for prediction of vector borne disease’s prevalence and quantification of agricultural land",
          "This Internship was supervised by NYU",
        ],
      },
      {
        entityName: "Fiver",
        expCardBg: "bg-green-9",

        entityLogo: {
          logo: require("assets/ExperiencesImages/Fiver.png"),
        },
        position: "Freelance Game Designer",
        duration: "Jan 2022-April 2022",
        description:
          "Fiver is a platform for enthusiastic free lancers where tons of niche experts provide their services to needy clients.",
        responsibilities: [
          "Responsible for conceptualizing, designing and creating innovative game worlds.",
          "Responsible for using plugins like gaia to develop large scale game globes and cities",
          "Creating and fixing mechanics for different games",
        ],
      },
    ],
  },
  socialMediaLinks: {
    facebook: "https://www.facebook.com/abdulmueedshahbaz",
    linkedin: "https://www.linkedin.com/in/abdul-mueed-shahbaz-8455b618a/",
    github: "https://github.com/Abdul-Mueed-Shahbaz?tab=repositories",
    twitter: "https://twitter.com/AbdulMu25549550",
    gmail: "abdulmueedshahbaz@gmail.com",
  },
};
