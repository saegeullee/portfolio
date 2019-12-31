import React from 'react';
import classes from './Text.module.scss';

const text = props => {
  let currentNavHandler = props.projectDisplayed || props.aboutDisplayed || props.skillsDisplayed;

  return (
    <div onClick={currentNavHandler} className={classes['text-item']}>
      <span className={classes['text-item__text']}>{props.children}</span>
    </div>
  );
};

export default text;
