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
    constructor(startx, starty, endx, endy) {
        super(startx, starty);
        this.x = startx;
        this.y = starty;
    }
    render() {
        const points = [this.startx, this.starty, this.endx, this.endy];
        return <Arrow points={points} fill="black" stroke="black" />;
    }
}

class Canvas extends Component{
    constructor(props){
        super(props);
        this.state = {
            relationShips: [],
            selectedIndex: null,
            referenceIndex: null,
            selectedPosition: null,
            referencePosition: null
        }
        this.myRef = React.createRef();
    }

    handleMouseDown = e => {
        const { newDrawable } = this.state;
        if (newDrawable.length === 0 && this.state.selectedIndex != null && this.state.referenceIndex != null) {
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
                    <CustomizeCanvasOperation
                        referenceIndex={this.state.referenceIndex}
                        getPositionOfOperation={this.getPositionOfOperation}
                        selectedOperation={this.state.selectedIndex}
                        changeSelectedOperation={this.changeSelectedOperation}
                        makeReferenceIndex={this.makeReferenceIndex}
                        item={item}
                        index={index}/>
                )
            })
    }

    getPositionOfOperation = (e, param) =>{
        if(param =='referencedOperation'){
            this.setState({referencePosition: e.target.getStage().getPointerPosition()})
        }else{
            this.setState({selectedPosition: e.target.getStage().getPointerPosition()})
        }
    }

    changeSelectedOperation = (selectedIndex) =>{
        this.setState({selectedIndex})
    }

    makeReferenceIndex = (referenceIndex) =>{
            this.setState({referenceIndex});
    }

    makeArrow = () => {
        if (this.state.selectedPosition != null && this.state.referencePosition != null) {
            const newDrawable = new ArrowDrawable(this.state.selectedPosition.x, this.state.selectedPosition.y, this.state.referencePosition.x, this.state.referencePosition.y);
            this.setState({
                newDrawable: [newDrawable],
                selectedPosition: null,
                referencePosition: null
            }, () => {
                console.log('im here')
                this.renderCanvasArrows();
            });
        }
    }

    render(){
        return (
            <div className='canvas_context'>
                <Stage
                    width={window.innerWidth - this.props.resizableWidth - 100}
                    height={window.innerHeight}
                >
                    <Layer>
                        {this.renderCanvasOperations()}
                    </Layer>
                </Stage>
            </div>
        );
    }
}

export default Canvas;