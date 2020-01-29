import React, {Component} from "react";
import {Rect, Group, Text, Label, Arrow} from 'react-konva';

class Drawable {
    constructor(startx, starty) {
        this.startx = startx;
        this.starty = starty;
    }
}



class CustomizeCanvasOperation extends Component{
    constructor(props){
        super(props);
        this.state={
            shadowBlur: 0,
            x:100 + this.props.index * 100,
            y:100
        }
    }


    actionOnOperation = (e) =>{
        if(this.props.selectedOperation == null){
            this.props.getPositionOfOperation(e,'selectedOperation');
            this.props.changeSelectedOperation(this.props.index);
            return;
        }
        this.props.makeReferenceIndex(this.props.index);
        this.props.getPositionOfOperation(e,'referencedOperation');
    }

    fillOperation = () =>{
        if(this.props.selectedOperation === this.props.index || this.props.selectedOperation == null){
            return '#86CFCA';
        }else if(this.props.referenceIndex === this.props.index){
            return '#AAADC4';
        }else{
            return '#AFCBFF';
        }
    }


    render(){
        return (
            <Label onDragMove={e => {this.props.onPositionChange(e,this.props.index)}
            } onDblClick={(e) => this.actionOnOperation(e, this.props.index)}  x={this.state.x}
                   y={this.state.y}>
                <Group width={50}
                       height={50} draggable>
                    <Rect
                        width={50}
                        height={50}
                        fill={this.fillOperation()}
                        cornerRadius={7}
                        className='operation_container'
                        ref={this.props.myRef}
                        data={this.props.item}
                        shadowBlur={this.props.selectedOperation == this.props.index ? 10 : 0}
                    />
                    <Text fill={'#215263'} fontFamily={'Roboto'} fontSize={15} height={50} width={50} align="center"
                          verticalAlign="middle" text={this.props.item.label}/>
                </Group>
            </Label>
        )
    }

}

export default CustomizeCanvasOperation;

