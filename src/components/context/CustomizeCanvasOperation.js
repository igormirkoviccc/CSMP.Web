import React, {Component} from "react";
import {Rect, Group, Text, Label, Image} from 'react-konva';


class CustomizeCanvasOperation extends Component{
    constructor(props){
        super(props);
        this.state={
            shadowBlur: 0,
            x:100 + this.props.index * 100,
            y:100,
            image: null
        }
    }

    actionOnOperation = (e) =>{
        if(this.props.selectedOperation == null){
            this.props.getPositionOfOperation(e,'selectedOperation');
            this.props.changeSelectedOperation(this.props.index, this.props.item);
            return;
        }
        this.props.makeReferenceIndex(this.props.index, this.props.item);
        this.props.getPositionOfOperation(e,'referencedOperation');
    };

    fillOperation = () =>{
        if(this.props.selectedOperation === this.props.index || this.props.selectedOperation == null){
            return '#86CFCA';
        }else if(this.props.referenceIndex === this.props.index){
            return '#AAADC4';
        }else{
            return '#AFCBFF';
        }
    };


    componentDidMount() {
        this.updateImage();
    }


    updateImage() {
        const image = new window.Image();
        image.src = '../operations/'+this.props.item.img +'.png';
        image.onload = () => {
            this.setState({
                image: image
            });
        };
    }




    render(){
        return (
            <Label
                onDragMove={e => {this.props.onPositionChange(e,this.props.index)}}
                onDblClick={(e) => this.actionOnOperation(e, this.props.index)}
                x={this.state.x}
                y={this.state.y}
                onMouseEnter={() => {
                    document.body.style.cursor = "pointer";
                }}
                onMouseLeave={() => {
                    document.body.style.cursor = "default";
                }}

            >
                <Group width={51}
                       height={51}
                       draggable

                    // dragBoundFunc={(pos) =>{
                       //     console.log(pos)
                       //     return pos
                       // }}

                >
                    <Rect
                        fillPatternImage={('../operations/'+this.props.item.img +'.png')}
                        width={51}
                        height={51}
                        fill={this.fillOperation()}
                        cornerRadius={7}
                        className='operation_container'
                        ref={this.props.myRef}
                        data={this.props.item}
                        strokeWidth={this.props.selectedOperation === this.props.index ? 1 : 0}
                        shadowForStrokeEnabled={true}
                        stroke="black"
                    />
                    <Group offsetX={-5} offsetY={-5}>
                    <Image image={this.state.image} space="fill"/>
                    </Group>
                </Group>
            </Label>
        )
    }

}

export default CustomizeCanvasOperation;

