import therapifyImg from '../assets/therapifyImg.png'


const myProjects = [
  {
    name: "Gallery",
    badges: ["React", "Firebase"],
    img: "https://github.com/nyozov/gallery/raw/master/src/assets/preview-wide.png?raw=true",
    url: "https://github.com/nyozov/gallery",
    siteUrl: "https://coherent-server-332620.web.app/",
    desc: "Image hosting app where a user can log in, upload and delete images in their personal storage. Fully functional with drag and drop upload, load transitions, and auth."
  },
  {
    name: "Etune",
    badges: ["React", "Express"],
    img: "https://github.com/nyozov/etune/raw/master/src/assets/wide-view.png?raw=true",
    url: "https://github.com/nyozov/etune",
    siteUrl: "https://nifty-chandrasekhar-58abcd.netlify.app/",
    desc: "Online vehicle ECU tuning service where a user can fill out a form, pay through Stripe, and then receive an email copy of their purchase through Twilio SendGrid.",
  },
  {
    name: "Therapify",
    badges: ["React", "Express"],
    img: therapifyImg,
    url: "https://github.com/habibcodes/therapify",
    desc: "Tele-health service connecting a patient and a practitioner through features including a calendar for appointments, text-chat, and video-chat through WebRTC.",
  },
  {
    name: "Weather App",
    badges: ["React"],
    img: "https://github.com/nyozov/weather-app/raw/master/public/weather-app-gif.gif?raw=true",
    url: "https://github.com/nyozov/weather-app",
    desc: "Simple weather app where a user can type in a location, and in return they will recieve a weather report including degrees, humidity, and conditions.",
  },
  {
    name: "Scheduler",
    badges: ["React"],
    img: "https://github.com/nyozov/scheduler/raw/master/docs/creating-interview.png?raw=true",
    url: "https://github.com/nyozov/scheduler",
    desc: "A user can book an appointment by selecing a day, selecting an open spot, typing in their name, and selecting an interviewer from a list.",
  },
  {
    name: "Url Shortener",
    badges: ["Express", "Vanilla JS"],
    img: "https://github.com/nyozov/tinyapp/raw/master/docs/newurl-page.png?raw=true",
    url: "https://github.com/nyozov/tinyapp",
    desc: "Full stack web application that allows users to shorten long URLs (à la bit.ly). A user's URLs are saved to a PSQL database. Uses cookies and password encryption. ",
  },
  {
    name: "Tweeter",
    badges: ["JQuery"],
    img: "https://github.com/nyozov/tweeter/raw/master/docs/tweet_widescreen.png?raw=true",
    url: "https://github.com/nyozov/tweeter",
    desc: "Single-page AJAX based Twitter clone that uses jQuery, HTML5, and CSS3. A user can write a message, and it will show up on their profile.",
  },
 
];


export default myProjects