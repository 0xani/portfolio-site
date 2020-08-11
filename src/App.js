import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css'
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import Projects from './components/Projects/Projects';

import LandingPage from './components/LandingPage/LandingPage';

const pages = ["Resume", "Projects", "Contact", "Privacy Policy"]



function App() {
  return (
   <div>
       <Router>
           {/*<h3>Top level routes</h3>*/}

           <nav className="navbar navbar-expand-lg navbar-dark bg-light header-color">
           <a className="navbar-brand " href="/portfolio-site">JOE TORRES (BETA)</a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                       aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarNav">
                   <ul className="navbar-nav ml-auto">
               {pages.map((page, index) => {
                   return (
                       <li class="nav-item px-4" key={index}>
                           <Link to={`/${page}`} class="text-link" >{page.toUpperCase()}</Link>
                       </li>
                   );
               })}
                   </ul>
               </div>
           </nav>
           <Route path="/portfolio-site" component={LandingPage}/>
           <Route path="/resume/" component={Resume}/>
           <Route path="/projects/" component={Projects}/>
           <Route path="/contact/" component={Contact}/>
           <Route path="/privacy policy/" component={PrivacyPolicy}/>

       </Router>
   </div>
  );
}

export default App;
