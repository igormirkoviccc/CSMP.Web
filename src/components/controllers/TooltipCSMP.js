import React from 'react';
import '../../style/test.scss'
import Tooltip from "@material-ui/core/Tooltip";



export default function TooltipCSMP(props) {
    return(
        <Tooltip title={props.title} className={props.className} aria-label="add">
            <div className={'tooltip_element'}>
                ?
            </div>
        </Tooltip>
    );
}
