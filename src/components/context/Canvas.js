import React, {Component} from "react";
import { Stage, Layer, Arrow} from 'react-konva';
import CustomizeCanvasOperation from './CustomizeCanvasOperation';
import CustomizeCanvasArrow from "./CustomizeCanvasArrow";
import ParametarsModal from "./ParametarsModal";
import SideBarInfoOperation from "./SideBarInfoOperation";
import ButtonCSMP from "../controllers/ButtonCSMP";
import {Tooltip} from "@material-ui/core";
import TooltipCSMP from "../controllers/TooltipCSMP";




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
                        key={'_' +index}
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
    };

    changeRelationshipsPosition = (e,index)=>{
        let obj = {
            x: e.evt.x - 300,
            y: e.evt.y
        };
        let relationShips = this.props.relationShips.slice();
        relationShips.forEach((part, count) => {
            if(part['first_node'] === index){
                part['first_node_position'] = obj;
            }else if(part['second_node'] === index){
                part['second_node_position'] = obj;
            }
        });
        this.props.updateRelationships(relationShips)
    };

    onPositionChange = (e,index)=>{
        let obj = {
            x: e.evt.x - 300,
            y: e.evt.y
        };

        this.changeRelationshipsPosition(e,index);

        if(index === this.state.selectedIndex){
            this.setState({selectedPosition: obj})
        }
        if(index === this.state.referenceIndex){
            this.setState({referencePosition: obj})
        }
    };


    getPositionOfOperation = (e, param) =>{
        if(param ==='referencedOperation'){
            this.setState({referencePosition: e.target.getStage().getPointerPosition()}, () =>{
                if (this.state.referenceIndex != null && this.state.selectedIndex != null) {
                    if(this.state.referenceIndex !== this.state.selectedIndex){
                        this.onAddingRelationship({'first_node': this.state.selectedIndex, 'first_node_position': this.state.selectedPosition, 'second_node':this.state.referenceIndex, 'second_node_position':this.state.referencePosition})
                        this.setState({selectedOperation: null, referencedOperation: null, selectedIndex: null, referenceIndex: null})
                    }
                }
            })
        }else{
            this.setState({selectedPosition: e.target.getStage().getPointerPosition()})
        }
    };

    changeSelectedOperation = (selectedIndex) =>{
        this.setState({selectedIndex})
    };

    makeReferenceIndex = (referenceIndex) =>{
            this.setState({referenceIndex});
    };

    onAddingRelationship = (relationship) =>{
        this.props.onAddingRelationship(relationship);
    };

    renderArrows = () =>{
        return this.props.relationShips.map((item, index) =>{
            return (
                <CustomizeCanvasArrow key={'_' +index} node1={item.second_node_position} node2={item.first_node_position}/>
            )
        })
    };



    render(){
        return (
            <div className='canvas_context'>
                {this.props.modalOpen ? <ParametarsModal modalOpen={this.props.modalOpen} onAddingOperation={this.props.onAddingOperation} item={this.props.addedItem}/> : null }
                <Stage
                    width={window.innerWidth - this.props.resizableWidth - 100}
                    height={window.innerHeight}
                >
                    <Layer>
                        {this.renderCanvasOperations()}
                        {this.renderArrows()}
                    </Layer>
                </Stage>
                <ButtonCSMP text={'Delete'} variant={'outlined'} color="secondary" className={'delete_button'}/>
                <ButtonCSMP text={'Export'} variant={'outlined'} className={'export_button'}/>
                <TooltipCSMP className={'tooltip_csmp'} title={global._info}/>

            </div>
        );
    }
}

export default Canvas;