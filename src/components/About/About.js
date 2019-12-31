import React from 'react';
import classes from './About.module.scss';
import { intro_title as title, intro_details as details } from '../../data/data';

const about = props => (
  <div className={classes['about']}>
    <div className={classes['about__title']}>{title}</div>
    <div className={classes['about__details']}>{details}</div>
  </div>
);

export default about;
