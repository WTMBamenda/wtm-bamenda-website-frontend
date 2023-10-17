import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import MemberProfile from './pages/MemberProfile';
import memberImage1 from "./assets/home/s3-img-1.JPG";
import OrganizerAmbassadorCard from './card-component-amba-org/Card'
import ambassador1 from "./assets/about/ambassador-1.jpg";

const root = ReactDOM.createRoot(document.getElementById('root'));
let OrganizerAmbassadorCardInfo = {
  image: ambassador1,
  name: 'Mbongeya Noella',
  job: 'Computer engineer',
  twitterProfile: `https://twitter.com/MbongeyaNoella`,
  githubProfile: ``,
  linkedinProfile:`Linkedin: https://www.linkedin.com/in/mbongeya-noella-mary-640006bb/`
}

let memberInfo = {
  image: memberImage1,
  twitterProfile: `https://twitter.com/AmandineNangah/status/1358828632924430336`,
  githubProfile: `https://github.com/nangahamandine`,
  linkedinProfile:`Linkedin: https://www.linkedin.com/in/nangah-amandine`
}

root.render(
  <React.StrictMode>
    <App />
    <OrganizerAmbassadorCard info={OrganizerAmbassadorCardInfo}/>
    <MemberProfile info={memberInfo} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
