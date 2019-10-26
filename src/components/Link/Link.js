import React from "react"
import classes from "./Link.module.scss"

const link = props => {

    let target="";

    switch(props.target) {
        case "blog":
            target = "https://saegeullee.github.io/";
            break;
        case "github":
            target = "https://github.com/saegeullee";
            break;
        default:
            target = "https://github.com/saegeullee";
            break;
    }

    return(
        <a  target="_blank" className={classes["link-item"]}
            href={target}>
            <span className={classes["link-item__text"]}>
                {props.children}
            </span>
        </a>
    )
}

export default link