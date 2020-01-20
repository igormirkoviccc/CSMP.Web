import React, {Component} from "react";
import { Stage, Layer, Arrow} from 'react-konva';
import CustomizeCanvasOperation from './CustomizeCanvasOperation';

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

class Canvas extends Component{
    constructor(props){
        super(props);
        this.state = {
            drawables: [],
            newDrawable: []
        }
        this.myRef = React.createRef();
    }

    handleMouseDown = e => {
        const { newDrawable } = this.state;
        if (newDrawable.length === 0) {
            const { x, y } = e.target.getStage().getPointerPosition();
            const newDrawable = new ArrowDrawable(x,y);
            this.setState({
                newDrawable: [newDrawable]
            });
        }
    };

    handleMouseUp = e => {
        const { newDrawable, drawables } = this.state;
        if (newDrawable.length === 1) {
            const { x, y } = e.target.getStage().getPointerPosition();
            const drawableToAdd = newDrawable[0];
            drawableToAdd.registerMovement(x, y);
            drawables.push(drawableToAdd);
            this.setState({
                newDrawable: [],
                drawables
            });
        }
    };

    handleMouseMove = e => {
        const { newDrawable } = this.state;
        if (newDrawable.length === 1) {
            const { x, y } = e.target.getStage().getPointerPosition();
            const updatedNewDrawable = newDrawable[0];
            updatedNewDrawable.registerMovement(x, y);
            this.setState({
                newDrawable: [updatedNewDrawable]
            });
        }
    };


    renderCanvasArrows = () =>{
        const drawables = [...this.state.drawables, ...this.state.newDrawable];
        return drawables.map(drawable => {
            return drawable.render()
        })
    }

    renderCanvasOperations = () => {
        return this.props.currentItems.map((item,index) =>{
                return (
                    <CustomizeCanvasOperation item={item} index={index}/>
                )
            })
    }

    render(){
        return (
            <div className='canvas_context'>
                <Stage
                    width={window.innerWidth - this.props.resizableWidth - 100}
                    height={window.innerHeight}
                    onMouseDown={this.handleMouseDown}
                    onMouseUp={this.handleMouseUp}
                    onMouseMove={this.handleMouseMove}
                >
                    <Layer>
                        {this.renderCanvasOperations()}
                        {this.renderCanvasArrows()}
                    </Layer>
                </Stage>
            </div>
        );
    }
}

export default Canvas;