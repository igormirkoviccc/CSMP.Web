import React, {Component} from "react";
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';
import Operation from "../Operation";

class Canvas extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    handleDragStart = e => {
        e.target.setAttrs({
            shadowOffset: {
                x: 15,
                y: 15
            },
            scaleX: 1.1,
            scaleY: 1.1
        });
    };
    handleDragEnd = e => {
        e.target.to({
            duration: 0.5,
            easing: Konva.Easings.ElasticEaseOut,
            scaleX: 1,
            scaleY: 1,
            shadowOffsetX: 5,
            shadowOffsetY: 5
        });
    };

    render(){
        return (
            <div style={{width: window.innerWidth - this.props.resizableWidth}} className='canvas_context'>
                <Stage width={window.innerWidth - this.props.resizableWidth - 100} height={window.innerHeight}>
                    <Layer>
                        {[...Array(10)].map((_, i) => (
                        <Rect
                            key={i}
                            x={20}
                            y={20}
                            numPoints={5}
                            innerRadius={20}
                            outerRadius={40}
                            fill="#89b717"
                            opacity={0.8}
                            draggable
                            rotation={Math.random() * 180}
                            shadowColor="black"
                            shadowBlur={10}
                            shadowOpacity={0.6}
                            onDragStart={this.handleDragStart}
                            onDragEnd={this.handleDragEnd}
                        />
                        ))}
                    </Layer>
                </Stage>
            </div>
        );
    }
}

export default Canvas;