import React from "react";
import ReactDOM from 'react-dom';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Button, Menu} from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

import MetaTags from 'react-meta-tags';

function website() {

  

  return (
    <Router>
      <Menu>
      <Menu.Item name='home'  >
            <Link to="/"><Button inverted color='blue'>Home</Button></Link>
      </Menu.Item>

      <Menu.Item name='about-us'  >
            <Link to="/about-us"><Button inverted color='blue'>About Us</Button></Link>
      </Menu.Item>

      <Menu.Item name='contact-us'  >
            <Link to="/contact-us"><Button inverted color='blue'>Contact Us</Button></Link>
      </Menu.Item>
    {/* <Menu.Item name='home'  >
            <Link to="/">Home</Link>
      </Menu.Item>

      <Menu.Item name='about-us'  >
            <Link to="/about-us">About Us</Link>
      </Menu.Item>

      <Menu.Item name='contact-us'  >
            <Link to="/contact-us">Contact Us</Link>
      </Menu.Item> */}

    <Switch>
          <Route path="/" exact component={Home} />
          
          <Route path="/about-us" component={About} />
          <Route path="/contact-us" component={Contact} />
          <Route component={NoMatch} />
    </Switch>
    </Menu>
        </Router>
  );
}

function Home() {
  return (
      <div className='home-page-content'>
          <MetaTags>
            <title>Page 1</title>
            <meta name="description" content="Some description." />
            <meta property="og:title" content="NextSeed Home Page" />
            <meta property="og:site_name" content="NextSeed" />
            <meta property="og:description" content="Gain access to exclusive alternative investments in local businesses. Join thousands of local members on the first Regulation Crowdfunding portal in the US." />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="./images/logo1.jpeg" /> 
            <meta property="og:url" content="my_app_url" />

          </MetaTags>
          <p>
            This is our Home page
          </p>
      </div>
  );
}

function About(){
  return(
    <p> About Us Content </p>
  );
}
function Contact(){
  return(
    <p> Contact Us Content </p>
  );
}


function NoMatch({ location }) {
  return (
    <div>
    <h1>404</h1>
    <h1>Page Not Found</h1>

      <h3>
        No Page Found for URL : <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default website;
//const activeitem = this.state
ReactDOM.render(
  website(),
  document.getElementById('root')
);