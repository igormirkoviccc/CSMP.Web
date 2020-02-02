import React, {Component} from 'react';
import '../../style/test.scss'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextfieldCSMP from "../controllers/TextfieldCSMP";
import ButtonCSMP from "../controllers/ButtonCSMP";
import SideBarInfoOperation from "./SideBarInfoOperation";

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default class ParametarsModal extends Component{
    constructor(props){
        super(props);

        this.state = {
            textFieldOneValue: '',
            textFieldSecondValue: '',
            textFieldThirdValue: ''
        }
    }

    getTextFieldValues = (index) =>{
        switch (index) {
            case 0:
                return this.state.textFieldOneValue;
            case 1:
                return this.state.textFieldSecondValue;
            case 2:
                return this.state.textFieldThirdValue;
        }
    };

    updateTextFieldValues = (change, index) =>{
        switch (index) {
            case 0:
                this.setState({textFieldOneValue: change})
                break;
            case 1:
                this.setState({textFieldSecondValue: change})
                break;
            case 2:
                this.setState({textFieldThirdValue: change})
                break;
        }
    }

    renderTextfields = () =>{
        return this.props.item.parametrs.map((item, index) =>{
            return <TextfieldCSMP  key={'_' +index} updateTextFieldValues={this.updateTextFieldValues} textFieldValue={this.getTextFieldValues(index)} item={item} index={index}/>
        })
    }

    saveInputs = () =>{
        let addingItem = {
            ...this.props.item,
        }
        this.props.item.parametrs.map((item, index) =>{
            switch (index) {
                case 0:
                    return addingItem[item] = parseInt(this.state.textFieldOneValue);
                case 1:
                    return addingItem[item] = parseInt(this.state.textFieldSecondValue);
                case 2:
                    return addingItem[item] = parseInt(this.state.textFieldThirdValue);
            }
        });
        this.props.onAddingOperation(addingItem)
    }

    render() {

        return (
            <div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={this.props.modalOpen}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={this.props.modalOpen}>
                        <div className={'csmp_modal'}>
                            {this.renderTextfields()}
                            <ButtonCSMP variant={'contained'} text={'Save'} onClick={this.saveInputs}/>
                        </div>
                    </Fade>
                </Modal>
            </div>
        );
    }
}
