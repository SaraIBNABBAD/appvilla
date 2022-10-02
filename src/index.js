import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './component/nav/nav.jsx';
import Team from './component/team/team.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Section from './component/sec2/sec2';
import Section1 from './component/sec2/sec1';
import Blog from './component/blog/blog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Section1/>
    <Section/>
    
    <Team/>
    <Blog/>
    
  </React.StrictMode>
);


