import React, {Component} from 'react';
import '../../style/test.scss'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from "@material-ui/core/FormControlLabel";



export default class CheckboxCSMP extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return(
            <FormControlLabel
                control={
                    <Checkbox
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
