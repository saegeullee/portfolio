import React from "react"
import classes from "./About.module.scss"
import woman from "../../image/woman.jpg"

const about = props => (

    <div className={classes["about"]}>
        <div className={classes["about__profile"]}>
            <div className={classes["about__profile-top"]}>

                <div className={classes["about__profile-user"]}>
                    <img src={woman} className={classes["about__profile-img"]}>

                    </img>
                    <div className={classes["about__profile-name"]}>
                        SAEGEUL LEE
                    </div>
                </div>
                <div className={classes["about__position"]}>

                    FULLSTACK DEVELOPER
                </div>

            </div>

            <div className={classes["about__profile-bottom"]}>
                html, css, javascript, react, nodejs
            </div>
        </div>

    </div>

)

export default about