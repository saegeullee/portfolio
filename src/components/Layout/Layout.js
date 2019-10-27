import React, {Component} from "react"
import classes from "./Layout.module.scss"
import Main from "../main/main"
import Projects from "../Projects/Projects"
import About from "../About/About"

class Layout extends Component {
    
    state = {
        displayProjects : false,
        displayAbout : true
    }

    displayProjectsHandler = () =>{
        this.setState({displayProjects : true, displayAbout : false})
    }

    displayAboutHandler = () => {
        this.setState({displayProjects : false, displayAbout:true})
    }

    render() {

        let projects, about = ""
        if(this.state.displayProjects) { projects = <Projects />}
        if(this.state.displayAbout) { about = <About />}

        return(
            <div className={classes["Layout"]}>
                <div>
                    <Main 
                        aboutDisplayed={this.displayAboutHandler}
                        projectDisplayed={this.displayProjectsHandler}/>
                </div>
                <div>
                    {projects}
                    {about}
                </div>
            </div>
        )
    }
}

export default Layout