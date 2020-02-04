import React, {Component} from 'react';
import '../../style/test.scss'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextfieldCSMP from "../controllers/TextfieldCSMP";
import ButtonCSMP from "../controllers/ButtonCSMP";
import CheckboxCSMP from "../controllers/CheckboxCSMP";

export default class ParametarsModal extends Component{
    constructor(props){
        super(props);

        this.state = {
            textFieldOneValue: 0,
            textFieldSecondValue: 0,
            textFieldThirdValue: 0,
            checkboxOneValue: this.props.referencedItem ? !!((this.props.referencedItem.inputsArray[0] && this.props.referencedItem.inputsArray[0].location === 1) || (this.props.referencedItem.inputsArray[1] && this.props.referencedItem.inputsArray[1].location === 1) || (this.props.referencedItem.inputsArray[2] && this.props.referencedItem.inputsArray[2].location === 1)) : null,
            checkboxTwoValue: this.props.referencedItem ? !!((this.props.referencedItem.inputsArray[0] && this.props.referencedItem.inputsArray[0].location === 2) || (this.props.referencedItem.inputsArray[1] && this.props.referencedItem.inputsArray[1].location === 2) || (this.props.referencedItem.inputsArray[2] && this.props.referencedItem.inputsArray[2].location === 2)) : null,
            checkboxThirdValue: this.props.referencedItem ? !!((this.props.referencedItem.inputsArray[0] && this.props.referencedItem.inputsArray[0].location === 3) || (this.props.referencedItem.inputsArray[1] && this.props.referencedItem.inputsArray[1].location === 3) || (this.props.referencedItem.inputsArray[2] && this.props.referencedItem.inputsArray[2].location === 3)) : null,
            changed: 0
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
            default:
                break;
        }
    };

    getCheckedValues = (key) =>{
        switch (key) {
            case 0:
                return this.state.checkboxOneValue;
            case 1:
                return this.state.checkboxTwoValue;
            case 2:
                return this.state.checkboxThirdValue;
            default:
                break;
        }
    };

    updateTextFieldValues = (change, index) =>{
        switch (index) {
            case 0:
                this.setState({textFieldOneValue: change});
                break;
            case 1:
                this.setState({textFieldSecondValue: change});
                break;
            case 2:
                this.setState({textFieldThirdValue: change});
                break;
            default:
                break;
        }
    };

    renderTextfields = () =>{
        return this.props.item.parametrs.map((item, index) =>{
            return <TextfieldCSMP  key={'_' +index} updateTextFieldValues={this.updateTextFieldValues} textFieldValue={this.getTextFieldValues(index)} item={item} index={index}/>
        })
    };


    handleChangeCheckbox = (value, index) =>{
        switch (index) {
            case 0:
                this.setState({checkboxOneValue: value, changed: 1});
                break;
            case 1:
                this.setState({checkboxTwoValue: value, changed: 2});
                break;
            case 2:
                this.setState({checkboxThirdValue: value, changed: 3});
                break;
            default:
                break;

        }
    };

    checkIfItHas = (index) =>{
        for (let j = 0; j < this.props.referencedItem.inputsArray.length; j++) {
            if(this.props.referencedItem.inputsArray[j].location === index + 1){
                return true;
            }
        }
        return false;
    };



    renderInputs = () =>{
        let arrayOfCheckboxControlers = [];
        for (let i = 0; i < this.props.referencedItem.maxInputs ; i++) {
            arrayOfCheckboxControlers.push(
                <CheckboxCSMP disabled={this.checkIfItHas(i)} onChange={this.handleChangeCheckbox} index={i} checked={this.getCheckedValues(i)} className='csmp_checkbox' label={'Ulaz '+ (i+1)}/>
            )
        }

        if(this.props.referencedItem.maxInputs === 0){
            arrayOfCheckboxControlers.push(<div>Ne moze se povezati konstanta!</div>)
        }
        return arrayOfCheckboxControlers;
    };

    saveInputs = () =>{
        if(this.props.modalMode === 'adding_operation'){
            let addingItem = this.props.item;
            this.props.item.parametrs.forEach((item, index) =>{
                switch (index) {
                    case 0:
                        addingItem['inputs'].push({label: item, value: parseFloat(this.state.textFieldOneValue)});
                        return;
                    case 1:
                        addingItem['inputs'].push({label: item, value: parseFloat(this.state.textFieldSecondValue)});
                        return;
                    case 2:
                        addingItem['inputs'].push({label: item, value: parseFloat(this.state.textFieldThirdValue)});
                        return;
                    default:
                        break;
                }
            });
            this.props.onAddingOperation(addingItem)
        }else if(this.props.modalMode === 'adding_relationship'){
            if(this.state.changed !== 0){
                this.props.openModalOnRelationships(this.state.changed);
            }
        }
    };
    handleClose = () =>{
        this.props.modalClose();
    };

    checkModalMode = () =>{
        if(this.props.modalMode === 'adding_operation'){
            return this.renderTextfields();
        }else if(this.props.modalMode === 'adding_relationship'){
            return this.renderInputs();
        }
    };

    render() {
        return (
            <div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={this.props.modalOpen}
                    closeAfterTransition
                    onClose={this.handleClose}
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={this.props.modalOpen}>
                        <div className={'csmp_modal'}>
                            {this.checkModalMode()}
                            <ButtonCSMP variant={'contained'} text={'Save'} onClick={this.saveInputs}/>
                        </div>
                    </Fade>
                </Modal>
            </div>
        );
    }
}
