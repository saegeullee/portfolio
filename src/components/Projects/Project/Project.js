import React from "react"
import classes from "./Project.module.scss"

const project = props => (

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
                {props.project.skills}
            </div>

        </div>
    </div>

)

export default project