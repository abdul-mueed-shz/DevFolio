export const APP_CONSTANTS = {
  username: "Abdul Mueed",
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
      gifLink: "../assets/rocket.png",
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
};
