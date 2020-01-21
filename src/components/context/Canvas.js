import React, {Component} from "react";
import { Stage, Layer, Arrow} from 'react-konva';
import CustomizeCanvasOperation from './CustomizeCanvasOperation';
import CustomizeCanvasArrow from "./CustomizeCanvasArrow";

class Canvas extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedIndex: null,
            referenceIndex: null,
            selectedPosition: null,
            referencePosition: null
        }
        this.myRef = React.createRef();
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
                        index={index}
                    />
                )
            })
    }

    getPositionOfOperation = (e, param) =>{
        if(param ==='referencedOperation'){
            this.setState({referencePosition: e.target.getStage().getPointerPosition()}, () =>{
                if (this.state.referenceIndex != null && this.state.selectedIndex != null) {
                    if(this.state.referenceIndex !== this.state.selectedIndex){
                        this.onAddingRelationship({'first_node': this.state.selectedIndex,'first_node_position':this.state.selectedPosition, 'second_node':this.state.referenceIndex, 'second_node_position':this.state.referencePosition})
                    }
                }
            })
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


    onAddingRelationship = (relationship) =>{
        this.props.onAddingRelationship(relationship);
    }

    renderArrows = () =>{
        return this.props.relationShips.map((item, index) =>{
            return (
                <CustomizeCanvasArrow
                    item={item}
                />
            )
        })
    };

    render(){
        console.log(this.state.referencePosition);
        return (
            <div className='canvas_context'>
                <Stage
                    width={window.innerWidth - this.props.resizableWidth - 100}
                    height={window.innerHeight}
                >
                    <Layer>
                        {this.renderCanvasOperations()}
                        {this.renderArrows()}
                    </Layer>
                </Stage>
            </div>
        );
    }
}

export default Canvas;