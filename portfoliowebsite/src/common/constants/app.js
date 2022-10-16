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
    position: "A Software Engineer",
    introduction:
      "who loves making web apps with Javascript/ VueJs/ Django Rest and some other cool libraries and frameworks | Ex Google DSC core team member",
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
        { title: "Frontend/Design", sliderValue: 7 },
        { title: "Programming", sliderValue: 6 },
        { title: "Backend", sliderValue: 4 },
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
        projTitle: "Conjuctures",
        projLink: "",
        projDesc:
          "A menu driven program which revolves around various Conjuctures!",
        stars: 4,
        language: "c++",
        pullReqs: 5,
      },
      {
        projTitle: "Notes Application",
        projLink: "",
        projDesc: "A notes application made in flutter!",
        stars: 4,
        language: "Dart",
        pullReqs: 5,
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
          logo: "https://cdn.quasar.dev/img/boy-avatar.png",
          style: "top: 110px",
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
          logo: "https://cdn.quasar.dev/img/boy-avatar.png",
          style: "top: 150px",
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
        expCardBg: "bg-black",

        entityLogo: {
          logo: "https://cdn.quasar.dev/img/boy-avatar.png",
          style: "top: 150px",
        },
        position: "ML Intern",
        duration: "July 2019 – Aug 2019",
        description:
          "Intelligent Machines Lab, is an endeavor to establish close working relationship among researchers, engineers and developers",
        responsibilities: [
          "Responsible for generating training dataset of landscape features, from high resolution satellite imagery data using Labelbox",
          "The dataset was used for prediction of vector borne disease’s prevalence and quantification of agricultural land",
          "This Internship was supervised by NYU",
        ],
      },
      {
        entityName: "Fiver",
        expCardBg: "bg-green-7",

        entityLogo: {
          logo: "https://cdn.quasar.dev/img/boy-avatar.png",
          style: "top: 110px",
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
