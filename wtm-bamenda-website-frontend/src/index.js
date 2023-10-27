import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import MemberProfile from './pages/MemberProfile';
import memberImage1 from "./assets/home/s3-img-1.JPG";
import { BrowserRouter } from 'react-router-dom';
import BlogDetails from './pages/BlogDetails';
import blogImage from "./assets/home/s2-img.JPG";


const root = ReactDOM.createRoot(document.getElementById('root'));
let memberInfo = {
  image: memberImage1,
  twitterProfile: `https://twitter.com/AmandineNangah/status/1358828632924430336`,
  githubProfile: `https://github.com/nangahamandine`,
  linkedinProfile:`Linkedin: https://www.linkedin.com/in/nangah-amandine`
}
let blogInfo = {
  image: blogImage,
  title: 'The benefits of belonging to a WTM community',
  tag1: 'Frontend Development',
  tag2: 'Design',
  tag3: 'Backend Development',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet felis leo. Vestibulum porttitor tempor venenatis. Donec vel mollis ante. Sed faucibus erat a lectus viverra faucibus. Quisque risus ligula, interdum at placerat placerat, porttitor auctor nulla. Ut id enim molestie, consequat purus ut, consectetur elit. Integer dolor enim, facilisis non felis in, consectetur consectetur nisl. Pellentesque porta gravida quam varius tristique. Pellentesque ex libero, cursus eget lectus eu, volutpat semper metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum porta, nunc vel placerat iaculis, nisl libero aliquet augue, a lobortis turpis elit et justo. Morbi id congue enim. Pellentesque ultrices maximus sollicitudin. Sed massa purus, congue at purus id, ullamcorper sagittis erat. In scelerisque congue diam, ac porta dui scelerisque ac. Fusce eget eleifend eros.',
  name: 'Kinyuy Kelly',
  date: '24/03/2023',
  twitterProfile: `https://twitter.com/AmandineNangah/status/1358828632924430336`,
  githubProfile: `https://github.com/nangahamandine`,
  linkedinProfile:`Linkedin: https://www.linkedin.com/in/nangah-amandine`
}
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <App />
       <BlogDetails info={blogInfo} />
    </BrowserRouter>
    <MemberProfile info={memberInfo} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
