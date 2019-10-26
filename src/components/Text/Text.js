import React from "react"
import classes from "./Text.module.scss"

const text = props => {

    return(
        <div 
            onClick={props.projectDisplayed} 
            className={classes["text-item"]}>
                <span                 
                    className={classes["text-item__text"]}>
                    {props.children}
                </span>
        </div>
    )
}

export default text