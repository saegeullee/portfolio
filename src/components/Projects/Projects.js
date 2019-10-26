import React, {Component} from "react"
import Project from "./Project/Project"
import classes from "./Projects.module.scss"

class Projects extends Component {

    state = {
        projects : [
            {
                title : "Enemy Rain",
                description : "Javascript game that hero has to survive among falling enemies",
                skills : ["html", "css", "javascript"]
            },
            {
                title : "Enemy Rain",
                description : "Javascript game that hero has to survive among falling enemies",
                skills : ["html", "css", "javascript"]
            },
            {
                title : "Enemy Rain",
                description : "Javascript game that hero has to survive among falling enemies",
                skills : ["html", "css", "javascript"]
            },
            {
                title : "Enemy Rain",
                description : "Javascript game that hero has to survive among falling enemies",
                skills : ["html", "css", "javascript"]
            },
            {
                title : "Enemy Rain",
                description : "Javascript game that hero has to survive among falling enemies",
                skills : ["html", "css", "javascript"]
            },
            {
                title : "Enemy Rain",
                description : "Javascript game that hero has to survive among falling enemies",
                skills : ["html", "css", "javascript"]
            }
        ]
    }

    render() {

        let projectItems = "";

        projectItems = this.state.projects.map(prj => <Project project={prj}/>)
     
        return(
            <div className={classes["projects"]}>
                {projectItems}
            </div>
        )
    }
}

export default Projects