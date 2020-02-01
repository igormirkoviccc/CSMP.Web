import React, {Component} from 'react';
import '../../style/test.scss'
import TextField from '@material-ui/core/TextField';



export default class TextfieldCSMP extends Component {
    constructor(props){
        super(props);

    }

    handleTextFieldChange = (e) => {
        this.props.updateTextFieldValues(e.target.value, this.props.index);
    };

    render(){
        return(
            <TextField
                onChange={this.handleTextFieldChange}
                id="outlined-password-input"
                className={'textfieldcsmp'}
                label={this.props.item}
                type="text"
                autoComplete="current-password"
                variant="outlined"
            />
        );
    }
}
