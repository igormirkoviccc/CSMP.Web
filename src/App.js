import React,{Component} from 'react';
import './style/test.scss'
import ResizibleSideNav from "./components/context/ResizibleSideNav";
import Canvas from "./components/context/Canvas";
import SideBarInfo from "./components/context/SideBarInfo";

let OperationID = 1;


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            addedItem: null,
            resizableWidth: 0,
            currentItems:[],
            relationShips: [],
            modalOpen: false,
            modalMode: '',
            selectedItem: null
        }
    }

    onChangeWidth = (newWidth) =>{
        this.setState({resizableWidth: newWidth});
    };

    onAddingRelationship = (relationship) =>{
        this.setState(prevState => ({
            relationShips: [...prevState.relationShips, relationship]
        }))
    };

    updateRelationships = (relationships) =>{
        this.setState({relationShips: relationships})
    };

    changeAddedItem = (operationArg) =>{
        if(operationArg.parametrs.length !== 0){
            let operation = {...operationArg, OperationID};
            OperationID++;
            this.setState({addedItem: operation, modalOpen: true, modalMode: 'adding_operation'});
        }else{
            let operation = {...operationArg, OperationID};
            OperationID++;
            this.onAddingOperation(operation);
        }
    };

    onAddingOperation = (operation) =>{
        this.setState(prevState => ({
            currentItems: [...prevState.currentItems, operation],
            modalOpen: false
        }))
    };


    changeAddedRelationship = () =>{
        this.setState({modalOpen: true, modalMode: 'adding_relationship'});
    };

    modalClose = () =>{
        this.setState({modalOpen: false, modalMode: ''});
    };

    changeSelectedItem = (selectedItem) =>{
        this.setState({selectedItem})
    };

    updateCurrentItems = (currentItems) =>{
        this.setState({currentItems})
    };



    render(){
        console.log(this.state.currentItems);
        return(
         <div className="App">
             <ResizibleSideNav onClickOperation={this.changeAddedItem} onChangeWidth={this.onChangeWidth}/>
             <Canvas modalClose={this.modalClose} onModalOpen={this.changeAddedRelationship} changeSelectedItem={this.changeSelectedItem} updateCurrentItems={this.updateCurrentItems} modalOpen={this.state.modalOpen} modalMode={this.state.modalMode} onAddingOperation={this.onAddingOperation} addedItem={this.state.addedItem} updateRelationships={this.updateRelationships} relationShips={this.state.relationShips} onAddingRelationship={this.onAddingRelationship}  currentItems={this.state.currentItems} resizableWidth={this.state.resizableWidth}/>
             <SideBarInfo selectedItem={this.state.selectedItem} currentItems={this.state.currentItems}/>
         </div>
     )
    }
}

export default App;
