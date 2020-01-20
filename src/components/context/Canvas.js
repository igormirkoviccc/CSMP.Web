import React, {Component} from "react";
import { Stage, Layer, Rect, Group, Text} from 'react-konva';
import Konva from 'konva';
import Operation from "../Operation";

class Canvas extends Component{
    constructor(props){
        super(props);
        this.state = {


        }
        this.myRef = React.createRef();
    }



    check = ()=>{

    }

    render(){
        console.log(this.myRef.current);
        return (
            <div className='canvas_context'>
                <Stage width={window.innerWidth - this.props.resizableWidth - 100} height={window.innerHeight}>
                    <Layer>
                        {this.props.currentItems.map((item,index) =>{
                            return (<div>
                                <Rect
                                    onClick={this.check}
                                    x={100 + index * 100}
                                    y={100}
                                    draggable
                                    width={50}
                                    height={50}
                                    fill={'#86cfca'}
                                    borderRadius={7}
                                    className='operation_container'
                                    ref={this.myRef}
                                    data={item}
                                />
                            </div>)

                        })}
                    </Layer>
                </Stage>
            </div>
        );
    }
}

export default Canvas;