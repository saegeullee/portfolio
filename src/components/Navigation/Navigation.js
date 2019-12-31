import React, { Component } from 'react';
import Text from '../Text/Text';
import Link from '../Link/Link';
import classes from './Navigation.module.scss';

class Navigation extends Component {
  state = {
    ishovered: false
  };

  render() {
    return (
      <div className={classes['navigation']}>
        <Text aboutDisplayed={this.props.aboutDisplayed}>about</Text>
        <Text skillsDisplayed={this.props.skillsDisplayed}>skills</Text>
        <Text projectDisplayed={this.props.projectDisplayed}>projects</Text>
        <Link target="blog">blog</Link>
        <Link target="github">github</Link>
      </div>
    );
  }
}

export default Navigation;
