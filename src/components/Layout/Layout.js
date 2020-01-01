import React, { Component } from 'react';
import classes from './Layout.module.scss';
import Navigation from '../Navigation/Navigation';
import Projects from '../Projects/Projects';
import About from '../About/About';
import Skills from '../Skills/Skills';
import ProjectDetails from '../Projects/ProjectDetails/ProjectDetails';

class Layout extends Component {
  state = {
    displayAbout: false,
    displayProjects: true,
    displayProjectDetails: false,
    displaySkills: false,
    currentDetailsTitle: ''
  };

  displayProjectsHandler = () => {
    this.setState({
      displayProjects: true,
      displayAbout: false,
      displayProjectDetails: false,
      displaySkills: false
    });
  };

  displayAboutHandler = () => {
    this.setState({
      displayProjects: false,
      displayAbout: true,
      displayProjectDetails: false,
      displaySkills: false
    });
  };

  displaySkillsHandler = () => {
    this.setState({
      displayProjects: false,
      displayAbout: false,
      displayProjectDetails: false,
      displaySkills: true
    });
  };

  displayProjectDetailsHandler = (event, title) => {
    this.setState({
      displayProjectDetails: true,
      displayProjects: false,
      displayAbout: false,
      displaySkills: false,
      currentDetailsTitle: title
    });
  };

  render() {
    let { displayAbout, displaySkills, displayProjects, displayProjectDetails } = this.state;

    return (
      <div className={classes['layout']}>
        <Navigation
          aboutDisplayed={this.displayAboutHandler}
          projectDisplayed={this.displayProjectsHandler}
          skillsDisplayed={this.displaySkillsHandler}
        />
        {displayAbout && <About />}
        {displayProjects && <Projects detailsClicked={this.displayProjectDetailsHandler} />}
        {displayProjectDetails && <ProjectDetails title={this.state.currentDetailsTitle} />}
        {displaySkills && <Skills />}
      </div>
    );
  }
}

export default Layout;
