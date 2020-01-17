import React, {Component} from "react";
import Operation from "../Operation";

class Canvas extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }



    render(){
        return (
            <div style={{width: window.innerWidth - this.props.resizableWidth}} className='canvas_context'>

            </div>
        );
    }
}

export default Canvas;