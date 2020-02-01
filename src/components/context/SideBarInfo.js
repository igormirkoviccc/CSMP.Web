import React, {Component} from 'react';
import '../../style/test.scss'
import SideBarInfoOperation from "./SideBarInfoOperation";




class SideBarInfo extends Component{
    constructor(props){
        super(props);

    }

    renderSideInfoOperations = () =>{
        return this.props.currentItems.map((item, index) =>{
            return <SideBarInfoOperation index={index} item={item}/>
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
                        <div className='sidebarinfo_inputs'>
                            <div className='sidebarinfo_title'>
                                Generatori funkcija
                            </div>
                            <div className='sidebarinfo_content'>

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
