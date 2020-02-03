import React, {Component} from 'react';
import '../../style/test.scss'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from "@material-ui/core/FormControlLabel";



export default class CheckboxCSMP extends Component {
    constructor(props){
        super(props);

    }

    handleChange = () =>{
        this.props.onChange(!this.props.checked, this.props.index);
    };

    render(){
        return(
            <FormControlLabel
                control={
                    <Checkbox
                        disabled={this.props.disabled}
                        onChange={this.handleChange}
                        checked={this.props.checked}
                        value="checkedB"
                        color="primary"
                    />
                }
                className={this.props.className}
                label={this.props.label}
            />
        );
    }
}
