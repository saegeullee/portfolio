import React, {Component} from "react"
import Text from "../Text/Text"
import Link from "../Link/Link"
import classes from "./main.module.scss"

class Main extends Component { 

    state = {
        ishovered : false
    }

    render() {
        return(
            <div className={classes["main"]}>
                <Text>about</Text>
                <Text projectDisplayed={this.props.projectDisplayed}>projects</Text>
                <Link target="blog">blog</Link>
                <Link target="github">github</Link>
            </div>
        )
    }
}

export default Main