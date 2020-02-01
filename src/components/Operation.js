import React from 'react';
import '../style/test.scss'



function Operation(props) {
    return (
        <div onClick={()=> props.onClickOperation()} className='operation_context'>
            <div className='operation_container'>
            {props.item.label}
            </div>
            {props.item.name}
        </div>
    );
}

export default Operation;
