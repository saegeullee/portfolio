import React from 'react';
import classes from './Project.module.scss';
import SkillsTag from './SkillsTag/SkillsTag';

const project = props => {
  let skills = '';
  if (props.project.skills) {
    skills = props.project.skills.map(el => <SkillsTag>{el}</SkillsTag>);
  }

  return (
    <div onClick={event => props.detailsClicked(event, props.title)} className={classes['project']}>
      <div className={classes['project__content']}>
        <div className={classes['project__title']}>{props.project.title}</div>
        <div className={classes['project__date']}>{props.project.date}</div>
        <div className={classes['project__description-label']}>Description</div>
        <div className={classes['project__description']}>{props.project.description}</div>
        <div className={classes['project__skills-label']}>Tech Stack</div>
        <div className={classes['project__skills']}>{skills}</div>
      </div>

      <div className={classes['project__bottom']}>
        <div
          onClick={event => props.detailsClicked(event, props.title)}
          className={classes['project__details']}
        >
          View details
        </div>
      </div>
    </div>
  );
};

export default project;
