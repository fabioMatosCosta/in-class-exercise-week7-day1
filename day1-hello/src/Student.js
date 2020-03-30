import React, {Component} from "react";

class Students extends Component {
    render() {
        return(
            <div className = "students">
                <h1>Hello I'm {this.props.firstName}</h1>
                <p>I'm an IronHacker!</p>
            </div>
        )
    }
}



export default Students;