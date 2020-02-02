import React from 'react';
import '../style/test.scss'
import Tooltip from "@material-ui/core/Tooltip";



function Operation(props) {
    return (
        <div onClick={()=> props.onClickOperation()} className='operation_context'>
            <div className='operation_container'>
                <img style={{verticalAlign:'middle',display:"inline-block"}} src={('../operations/'+props.item.img +'.png')} alt={props.item.label}/>
                <div style={{verticalAlign:'middle',width:'0',height:100+'%',display:"inline-block"}}/>
            </div>
            <Tooltip title={props.item.name} >
                <div className='operation_title'>{props.item.name}</div>
            </Tooltip>
        </div>
    );
}

export default Operation;
