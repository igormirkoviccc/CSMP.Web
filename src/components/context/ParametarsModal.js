import React, {Component} from 'react';
import '../../style/test.scss'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextfieldCSMP from "../controllers/TextfieldCSMP";
import ButtonCSMP from "../controllers/ButtonCSMP";

export default class ParametarsModal extends Component{
    constructor(props){
        super(props);

        this.state = {
            textFieldOneValue: 0,
            textFieldSecondValue: 0,
            textFieldThirdValue: 0
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

    saveInputs = () =>{
        let addingItem = this.props.item;
        console.log(addingItem);
        this.props.item.parametrs.forEach((item, index) =>{
            switch (index) {
                case 0:
                    addingItem['inputs'].push({label: item, value: parseInt(this.state.textFieldOneValue)});
                    return;
                case 1:
                    addingItem['inputs'].push({label: item, value: parseInt(this.state.textFieldSecondValue)});
                    return;
                    case 2:
                        addingItem['inputs'].push({label: item, value: parseInt(this.state.textFieldThirdValue)});
                    return;
                default:
                    break;
            }
        });
        this.props.onAddingOperation(addingItem)
    };

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
