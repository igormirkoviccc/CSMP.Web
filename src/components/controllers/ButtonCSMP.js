import React from 'react';
import '../../style/test.scss'
import Button from "@material-ui/core/Button";



export default function ButtonCSMP(props) {
    return(
        <Button onClick={props.onSave} className={'buttoncsmp'} variant="contained" color="primary">
            Sacuvaj
        </Button>
    );
}
