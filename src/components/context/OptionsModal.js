import React,{Component} from "react";
import Backdrop from "@material-ui/core/Backdrop/Backdrop";
import Fade from "@material-ui/core/Fade";
import ButtonCSMP from "../controllers/ButtonCSMP";
import Modal from "@material-ui/core/Modal";
import TextfieldCSMP from "../controllers/TextfieldCSMP";

class OptionsModal extends Component{
    constructor(props){
        super(props);
        this.state = {
            duzinaSimulacije: 0,
            intervalIntegracije: 0,
            intervalStampanjaRezultata: 0
        }
    }

    saveOptions = () =>{
        let data = {
            'Duzina simulacije': parseFloat(this.state.duzinaSimulacije),
            'Interval integracije': parseFloat(this.state.intervalIntegracije),
            'Interval stampanja rezultata': parseFloat(this.state.intervalStampanjaRezultata)
        };
        this.props.onModalSaveAndClose(data);
    };

    cancelModal = () =>{
        this.props.closeOptionsModal();
    };

    updateTextField = (change, item) =>{
        if(item === 'Duzina simulacije'){
            this.setState({duzinaSimulacije: change})
        }else if(item === 'Interval integracije'){
            this.setState({intervalIntegracije: change})
        }else if(item === 'Interval stampanja rez.'){
            this.setState({intervalStampanjaRezultata: change})
        }
    };



    render(){
        return (
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={this.props.modalOpen}
                closeAfterTransition
                onClose={this.cancelModal}
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={this.props.modalOpen}>
                    <div className={'csmp_modal'}>
                        <TextfieldCSMP mode={'options'} updateTextField={this.updateTextField} textFieldValue={this.state.duzinaSimulacije} item={'Duzina simulacije'}/>
                        <TextfieldCSMP mode={'options'} updateTextField={this.updateTextField} textFieldValue={this.state.intervalIntegracije} item={'Interval integracije'}/>
                        <TextfieldCSMP mode={'options'} updateTextField={this.updateTextField} textFieldValue={this.state.intervalStampanjaRezultata} item={'Interval stampanja rez.'}/>
                        <ButtonCSMP variant={'contained'} text={'Save'} onClick={this.saveOptions}/>
                    </div>
                </Fade>
            </Modal>
        );
    }

}

export default OptionsModal;