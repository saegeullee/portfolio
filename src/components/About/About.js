import React from 'react';
import classes from './About.module.scss';
import {
  intro_title_1 as title_1,
  intro_title_2 as title_2,
  intro_details_1 as details_1,
  overall_experiences
} from '../../data/data';

const about = props => {
  let overallExperiences = '';

  if (overall_experiences) {
    overallExperiences = overall_experiences.map(el => (
      <>
        <div className={classes['about__bottom-title']}>{el.title}</div>
        <div className={classes['about__bottom-date']}>{el.date}</div>
        <div className={classes['about__bottom-details']}>{el.details}</div>
      </>
    ));
  }

  return (
    <div className={classes['about']}>
      <div className={classes['about__title']}>
        {title_1}
        <br></br>
        {title_2}
      </div>
      <div className={classes['about__details']}>{details_1}</div>
      <div className={classes['about__title']}>Overall Experiences</div>
      {overallExperiences}
    </div>
  );
};

export default about;
