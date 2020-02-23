import React, {Component} from 'react';
import '../../style/test.scss'
import SideBarInfoOperation from "./SideBarInfoOperation";
import {TextField} from "@material-ui/core";




class SideBarInfo extends Component{
    constructor(props){
        super(props);
    }

    renderSideInfoParametars = () =>{
        return this.props.selectedItem.inputs.map((item, index) =>{
            return <div><div key={index + '_'} style={{display: 'inline-block', width: 50 + '%'}}>{item.label}</div><div style={{display: 'inline-block', width: 50 + '%'}}>{item.value}</div></div>
        })
    };

    renderSideInfoInputs = () =>{
        return this.props.selectedItem.inputsArray.map((item, index) =>{
            return <div><div key={index + '_'} style={{display: 'inline-block', width: 50 + '%'}}>{item.node.OperationID}</div><div style={{display: 'inline-block', width: 50 + '%'}}>{item.node.name}</div></div>
        })
    };

    enterClicked = (e, index) =>{
        if (e.keyCode === 13) {
            this.props.onSelectedItemChange(e.target.value, index);
        }
    };

    renderBoth = () =>{
        let array = [];
        array.push(<div>Parametri</div>)
        this.props.selectedItem.inputs.forEach((item, index) =>{
            array.push(<div><div key={'_'+index} style={{display: 'inline-block', width: 50 + '%'}}>{item.label}</div>
                <input onKeyDown={(e) => this.enterClicked(e, index)} defaultValue={item.value} style={{display: 'inline-block', width: 30 + '%'}}/></div>);
        });
        array.push(<div>Ulazi</div>)
        this.props.selectedItem.inputsArray.forEach((item,index) =>{
            array.push(<div><div key={'_'+index} style={{display: 'inline-block'}}>{item.node.OperationID+'.'}</div><div style={{display: 'inline-block'}}>{item.node.name}</div></div>);
        });
        return array;
    };

    renderExport = () =>{
        if(this.props.selectedItem.export){
                return <div><div style={{display: 'inline-block'}}>{this.props.selectedItem.export.OperationID+'. '}</div><div style={{display: 'inline-block'}}>{this.props.selectedItem.export.name}</div></div>
        }
    };

    renderSideInfoOperations = () =>{
        return this.props.currentItems.map((item, index) =>{
            return <SideBarInfoOperation key={'_' +index} index={index} item={item}/>
        })
    };

        render() {
            return (
                <div className='sidebarinfo'>
                    <div className='sidebarinfo_container'>
                        <div className='sidebarinfo_operations'>
                            <div className='sidebarinfo_title'>
                                Blokovi
                            </div>
                            <div className='sidebarinfo_content'>
                                {this.renderSideInfoOperations()}
                            </div>
                        </div>
                        <div className='sidebarinfo_operation_detail'>{this.props.selectedItem ? this.props.selectedItem.OperationID + '. '+this.props.selectedItem.name : ''}</div>
                        <div className='sidebarinfo_inputs'>
                            <div className='sidebarinfo_title'>
                                Ulazi/Parametri
                            </div>
                            <div className='sidebarinfo_content'>
                                {this.props.selectedItem ? this.renderBoth() : null}
                            </div>
                        </div>
                        <div className='sidebarinfo_outputs'>
                            <div className='sidebarinfo_title'>
                                Izlazi
                            </div>
                            <div className='sidebarinfo_content'>
                                {this.props.selectedItem ? this.renderExport() : null}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }


}

export default SideBarInfo;
