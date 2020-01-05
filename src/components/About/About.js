import React from 'react';
import classes from './About.module.scss';
import {
  intro_title_1 as title_1,
  intro_title_2 as title_2,
  intro_details_1 as details_1,
  intro_details_2 as details_2
} from '../../data/data';

const about = props => (
  <div className={classes['about']}>
    <div className={classes['about__title']}>
      {title_1}
      <br></br>
      {title_2}
    </div>
    <div className={classes['about__details']}>{details_1}</div>
  </div>
);

export default about;
