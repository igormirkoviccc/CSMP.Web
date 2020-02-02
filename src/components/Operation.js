import React from 'react';
import '../style/test.scss'



function Operation(props) {
    return (
        <div onClick={()=> props.onClickOperation()} className='operation_context'>
            <div className='operation_container'>
                <img style={{verticalAlign:'middle',display:"inline-block"}} src={('../operations/'+props.item.img +'.png')} alt={props.item.label}/>
                <div style={{verticalAlign:'middle',width:'0',height:100+'%',display:"inline-block"}}/>
            </div>
            {props.item.name}
        </div>
    );
}

export default Operation;
