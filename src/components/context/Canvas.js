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
                        onPositionChange={this.onPositionChange}
                        item={item}
                        index={index}
                    />
                )
            })
    }

    onPositionChange = (e,index)=>{
        console.log(e);
        let obj = {
            x: e.evt.x - 300,
            y: e.evt.y
        }
        if(index == this.state.selectedIndex){
            this.setState({selectedPosition: obj})
        }
        if(index == this.state.referenceIndex){
            this.setState({referencePosition: obj})
        }
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
                <CustomizeCanvasArrow node1={this.state.referencePosition} node2={this.state.selectedPosition}/>
            )
        })
    };

    render(){
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