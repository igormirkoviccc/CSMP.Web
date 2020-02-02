import React from 'react';
import '../../style/test.scss'
import Button from "@material-ui/core/Button";



export default function ButtonCSMP(props) {
    return(
        <Button onClick={props.onClick} color={props.color} className={'buttoncsmp '+props.className} variant={props.variant}>
            {props.text}
        </Button>
    );
}
