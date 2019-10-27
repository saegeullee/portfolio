import React from "react"
import classes from "./Project.module.scss"
import SkillsTag from "./SkillsTag/SkillsTag"

const project = props => {

    let skills = "";
    if(props.project.skills) {
        skills = props.project.skills.map(el => <SkillsTag>{el}</SkillsTag>)
    }

    return (

        <div className={classes["project"]}>
            <div className={classes["project__content"]}>

                <div className={classes["project__title"]}>
                    {props.project.title}
                </div>

                <div className={classes["project__description-label"]}>
                    description
                </div>
                
                <div className={classes["project__description"]}>
                    {props.project.description}
                </div>

                <div className={classes["project__skills-label"]}>
                    skills
                </div>

                <div className={classes["project__skills"]}>
                    {skills}
                </div>

            </div>
        </div>
    )
}

export default project