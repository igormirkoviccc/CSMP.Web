import React, {Component} from "react";
import {Rect, Group, Text, Label, Arrow} from 'react-konva';

class Drawable {
    constructor(startx, starty) {
        this.startx = startx;
        this.starty = starty;
    }
}

class ArrowDrawable extends Drawable {
    constructor(startx, starty) {
        super(startx, starty);
        this.x = startx;
        this.y = starty;
    }
    registerMovement(x, y) {
        this.x = x;
        this.y = y;
    }
    render() {
        const points = [this.startx, this.starty, this.x, this.y];
        return <Arrow points={points} fill="black" stroke="black" />;
    }
}


class CustomizeCanvasOperation extends Component{
    constructor(props){
        super(props);
        this.state={
            shadowBlur: 0
        }
    }


    actionOnOperation = () =>{
        this.setState({shadowBlur: 5})
    }


    render(){
        return (
            <Label onClick={this.actionOnOperation} x={100 + this.props.index * 100}
                   y={100}>
                <Group width={50}
                       height={50} draggable>
                    <Rect
                        width={50}
                        height={50}
                        fill={'#86cfca'}
                        cornerRadius={7}
                        className='operation_container'
                        ref={this.props.myRef}
                        data={this.props.item}
                        shadowBlur={this.state.shadowBlur}
                    />
                    <Text fill={'#215263'} fontFamily={'Roboto'} fontSize={15} height={50} width={50} align="center"
                          verticalAlign="middle" text={this.props.item.label}/>
                </Group>
            </Label>
        )
    }

}

export default CustomizeCanvasOperation;

