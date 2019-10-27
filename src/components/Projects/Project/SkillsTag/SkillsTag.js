import React from "react"
import classes from "./SkillsTag.module.scss"

const skillsTag = props => (

    <span className={classes["skills-tag"]}>
        {props.children}
    </span>

)

export default skillsTag