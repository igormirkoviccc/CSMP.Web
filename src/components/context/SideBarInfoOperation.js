import React from 'react';
import '../../style/test.scss'




function SideBarInfoOperation(props){

    return (
        <div className='sidebarinfo_operation'>
            {props.index + 1}. {props.item.name}
        </div>
    );
}

export default SideBarInfoOperation;
