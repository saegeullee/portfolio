import React, { Component } from 'react';
import Project from './Project/Project';
import classes from './Projects.module.scss';
import { projectsData } from '../../data/data';

class Projects extends Component {
  state = {
    projects: projectsData
  };

  render() {
    let projectItems = '';

    projectItems = this.state.projects.map(prj => (
      <Project title={prj.title} project={prj} detailsClicked={this.props.detailsClicked} />
    ));

    return <div className={classes['projects']}>{projectItems}</div>;
  }
}

export default Projects;
