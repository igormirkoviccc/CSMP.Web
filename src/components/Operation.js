import React from 'react';
import '../style/test.scss'



function Operation(props) {
    return (
        <div className='operation_context'>
            <div class='operation_container'>
            {props.item.label}
            </div>
            {props.item.name}
        </div>
    );
}

export default Operation;
