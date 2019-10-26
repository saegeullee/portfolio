import React, {Component} from "react"
import classes from "./Layout.module.scss"
import Main from "../main/main"
import Projects from "../Projects/Projects"

class Layout extends Component {
    
    state = {
        displayProjects : false
    }

    displayProjectsHandler = () =>{
        this.setState(prevState => ({displayProjects : !prevState.displayProjects}))
    }

    render() {

        let projects = ""
        if(this.state.displayProjects) { projects = <Projects />}

        return(
            <div className={classes["Layout"]}>
                <div>
                    <Main projectDisplayed={this.displayProjectsHandler}/>
                </div>
                <div>
                    {projects}
                </div>
            </div>
        )
    }
}

export default Layout