import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import About from './components/About/About';

import { Element } from 'react-scroll';
import Contect from './components/Contact/Contect';
import Skill from './components/Skills/Skill';
import Project from './components/Projects/Project';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Element name="home">
        <Featured/>
        </Element>
        <Element name="about">
        <About/>
        </Element>
        <Element name="Skill">
           <Skill/>        
        </Element>
        <Element name="Project">
          <Project/>
        </Element>
        <Element name="contact">
          <Contect></Contect>
        </Element>
       <footer/>
      </div>
    );
  }
}

export default App;
