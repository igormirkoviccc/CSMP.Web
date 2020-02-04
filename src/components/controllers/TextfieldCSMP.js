import React, {Component} from 'react';
import '../../style/test.scss'
import TextField from '@material-ui/core/TextField';



export default class TextfieldCSMP extends Component {

    handleTextFieldChange = (e) => {
        if(this.props.mode !== 'options'){
            this.props.updateTextFieldValues(e.target.value, this.props.index);
        }else{
            this.props.updateTextField(e.target.value, this.props.item);
        }
    };

    render(){
        return(
            <TextField
                value={this.props.textFieldValue}
                onChange={this.handleTextFieldChange}
                className={'textfieldcsmp'}
                label={this.props.item}
                type="text"
                autoComplete="current-password"
                variant="outlined"
            />
        );
    }
}
