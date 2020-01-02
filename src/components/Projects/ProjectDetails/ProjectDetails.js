import React from 'react';
import classes from './ProjectDetails.module.scss';
import { projectsData } from '../../../data/data';

const projectDetails = props => {
  let currentProject = '';

  for (let i = 0; i < projectsData.length; i++) {
    if (projectsData[i].title === props.title) {
      currentProject = projectsData[i];
    }
  }

  let gifs = '';
  if (currentProject.gifs) {
    gifs = currentProject.gifs.map(gif => (
      <img className={classes['projectDetails__gif']} src={gif} alt="gif" />
    ));
  }

  let whatIHaveDoneSummary = '';
  if (currentProject.whatIHaveDoneSummary) {
    whatIHaveDoneSummary = (
      <p className={classes['projectDetails__whatIhaveDoneSummary']}>
        {currentProject.whatIHaveDoneSummary}
      </p>
    );
  }

  let whatIHaveDone = '';
  if (currentProject.whatIHaveDone) {
    whatIHaveDone = currentProject.whatIHaveDone.map(el => (
      <li className={classes['projectDetails__whatIhaveDone-element']}>{el}</li>
    ));
    whatIHaveDone = (
      <ul className={classes['projectDetails__whatIhaveDone-ul']}>{whatIHaveDone}</ul>
    );
  }

  let whatIHaveDoneForBackend = '';
  if (currentProject.whatIHaveDoneForBackend) {
    whatIHaveDoneForBackend = currentProject.whatIHaveDoneForBackend.map(el => (
      <li className={classes['projectDetails__whatIhaveDone-element']}>{el}</li>
    ));
    whatIHaveDoneForBackend = (
      <ul className={classes['projectDetails__whatIhaveDone-ul']}>{whatIHaveDoneForBackend}</ul>
    );
    whatIHaveDoneForBackend = (
      <>
        <div className={classes['projectDetails__whatIhaveDone-label']}>백엔드</div>
        {whatIHaveDoneForBackend}
      </>
    );
  }

  let whatIHaveDoneForFrontend = '';
  if (currentProject.whatIHaveDoneForFrontend) {
    whatIHaveDoneForFrontend = currentProject.whatIHaveDoneForFrontend.map(el => (
      <li className={classes['projectDetails__whatIhaveDone-element']}>{el}</li>
    ));
    whatIHaveDoneForFrontend = (
      <ul className={classes['projectDetails__whatIhaveDone-ul']}>{whatIHaveDoneForFrontend}</ul>
    );
    whatIHaveDoneForFrontend = (
      <>
        <div className={classes['projectDetails__whatIhaveDone-label']}>프론트엔드</div>
        {whatIHaveDoneForFrontend}
      </>
    );
  }

  let techStack = '';
  if (currentProject.skills) {
    techStack = currentProject.skills.map((el, idx) => {
      if (idx !== currentProject.skills.length - 1) {
        const comaAdded = el + ', ';
        return comaAdded;
      } else {
        return el;
      }
    });
  }

  let additionalSources = '';
  if (currentProject.additionalSources) {
    additionalSources = currentProject.additionalSources.map(el => (
      <li className={classes['projectDetails__additionalSources']}>
        <a href={el.link} target="_blank" rel="noopener noreferrer">
          {el.title}
        </a>
      </li>
    ));
    additionalSources = (
      <ul className={classes['projectDetails__whatIhaveDone-ul']}>{additionalSources}</ul>
    );
  }

  return (
    <>
      <div className={classes['projectDetails']}>
        <div className={classes['projectDetails__title']}>{currentProject.title}</div>
        <div className={classes['projectDetails__date']}>{currentProject.date}</div>
        <div className={classes['projectDetails__label']}>Description</div>
        <div className={classes['projectDetails__description-wrapper']}>
          <div className={classes['projectDetails__description']}>{currentProject.description}</div>
          <div className={classes['projectDetails__description']}>
            {currentProject.additionalDescription}
          </div>
        </div>
        <div className={classes['projectDetails__label']}>What I have done</div>
        {whatIHaveDoneSummary}
        {whatIHaveDone}
        <div className={classes['projectDetails__whatIhaveDoneForBackend']}>
          {whatIHaveDoneForBackend}
        </div>
        <div className={classes['projectDetails__whatIhaveDoneForFrontend']}>
          {whatIHaveDoneForFrontend}
        </div>
        <div className={classes['projectDetails__label']}>Tech Stack</div>
        <div className={classes['projectDetails__techStack']}>{techStack}</div>
        <div className={classes['projectDetails__label']}>Related Sources</div>
        {additionalSources}
        {gifs}
      </div>
    </>
  );
};

export default projectDetails;
