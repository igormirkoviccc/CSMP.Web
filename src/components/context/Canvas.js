import React, {Component} from "react";
import { Stage, Layer, Rect} from 'react-konva';
import Konva from 'konva';
import Operation from "../Operation";

class Canvas extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div className='canvas_context'>
                <Stage width={window.innerWidth - this.props.resizableWidth - 100} height={window.innerHeight}>
                    <Layer>
                        {this.props.currentItems.map((item,index) =>{
                            return <Rect onClick={() => {console.log('hello im '+item)}}
                                x={100 + index * 100}
                                y={100}
                                draggable
                                width={50}
                                height={50}
                                fill={'blue'}
                                className='operation_container'
                            />
                        })}
                    </Layer>
                </Stage>
            </div>
        );
    }
}

export default Canvas;