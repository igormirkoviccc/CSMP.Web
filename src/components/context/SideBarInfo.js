import React, {Component} from 'react';
import '../../style/test.scss'
import SideBarInfoOperation from "./SideBarInfoOperation";




class SideBarInfo extends Component{
    constructor(props){
        super(props);
    }

    renderSideInfoParametars = () =>{
        return this.props.selectedItem.inputs.map((item, index) =>{
            return <div><div style={{display: 'inline-block', width: 50 + '%'}}>{item.label}</div><div style={{display: 'inline-block', width: 50 + '%'}}>{item.value}</div></div>
        })
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
                                {this.props.selectedItem ? this.renderSideInfoParametars() : null}
                            </div>
                        </div>
                        <div className='sidebarinfo_outputs'>
                            <div className='sidebarinfo_title'>
                                Izlazi
                            </div>
                            <div className='sidebarinfo_content'>

                            </div>
                        </div>
                    </div>
                </div>
            );
        }


}

export default SideBarInfo;
