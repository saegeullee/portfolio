import React from 'react';
import classes from './Skills.module.scss';
import { skills as skillsData } from '../../data/data';

const skills = props => {
  let skillsOverview = '';
  let skillsDetails = '';

  if (skillsData) {
    for (let i = 0; i < skillsData.length; i++) {
      if (i !== skillsData.length - 1) {
        skillsOverview = skillsOverview.concat(skillsData[i].title + ', ');
      } else {
        skillsOverview = skillsOverview.concat(skillsData[i].title);
      }
    }

    skillsDetails = skillsData.map(el => {
      return (
        <>
          <div className={classes['skills__label']}>{el.title}</div>
          <div className={classes['skills__details']}>
            <ul>
              {el.details &&
                el.details.map(detail => (
                  <li className={classes['skills__details-element']}>{detail}</li>
                ))}
            </ul>
          </div>
        </>
      );
    });
  }

  return (
    <div className={classes['skills']}>
      <div className={classes['skills__label-top']}>Overview</div>
      <div className={classes['skills__overview']}>{skillsOverview}</div>
      {skillsDetails}
    </div>
  );
};

export default skills;
