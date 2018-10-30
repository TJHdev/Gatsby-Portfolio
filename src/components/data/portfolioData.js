import blogapp from '../../images/portfolio/blogapp.jpg';
import chatapp from '../../images/portfolio/chatapp.jpg';
import smartbrain from '../../images/portfolio/smartbrain.jpg';
import expensify from '../../images/portfolio/expensify.jpg';
import quotegen from '../../images/portfolio/quotegen.jpg';
import weatherapp from '../../images/portfolio/weatherapp.jpg';
import wikiapi from '../../images/portfolio/wikiapi.jpg';
import twitchapi from '../../images/portfolio/twitchapi.jpg';

const portfolioData = [
  {
    image: smartbrain,
    link: 'https://tjhdev.github.io/TJHdev-AN-Web-Dev-2018-SmartBrain/',
    title: 'SmartBrain',
    text:
      'App that detects faces on any image provided. React frontend. NodeJS and PostgreSQL backend.',
  },
  {
    image: blogapp,
    link: 'https://blog-app-tjh.herokuapp.com/',
    title: 'BlogApp',
    text: 'Blog site, built with a React front end with Firebase backend.',
  },
  {
    image: quotegen,
    link: 'https://codepen.io/devbeatz/full/MGayde/',
    title: 'QuoteGen',
    text: 'A Donald Trump quote generator.',
  },
  {
    image: chatapp,
    link: 'https://websock-chat-app.herokuapp.com/',
    title: 'ChatApp',
    text: 'Real time WebSocket chat app built on NodeJS backend.',
  },
  {
    image: weatherapp,
    link: 'https://codepen.io/devbeatz/full/rvOvRE/',
    title: 'WeatherApp',
    text:
      'Front end for a weather API, displaying the next 24 hours at your location.',
  },
  {
    image: expensify,
    link: 'https://react-course-2-expensify-th.herokuapp.com/dashboard',
    title: 'Expensify',
    text:
      'Expense tracking application. React front end with Firebase backend.',
  },
  {
    image: twitchapi,
    link: 'https://codepen.io/devbeatz/full/OZNdBQ/',
    title: 'TwitchTracker',
    text: 'Shows which of your favourite Twitch streamers are online.',
  },
  {
    image: wikiapi,
    link: 'https://codepen.io/devbeatz/full/zjrRXB/',
    title: 'WikiApi',
    text: 'A styled front end for the Wikipedia search API.',
  },
];

export default portfolioData;
