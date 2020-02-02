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
            modalOpen: false
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
        let operation = {...operationArg, OperationID};
        OperationID++;
        this.setState({addedItem: operation, modalOpen: true});

    };

    onAddingOperation = (operation) =>{
        this.setState(prevState => ({
            currentItems: [...prevState.currentItems, operation],
            modalOpen: false
        }))
    };

    updateCurrentItems = (currentItems) =>{
        this.setState({currentItems})
    };

    render(){
     return(
         <div className="App">
             <ResizibleSideNav onClickOperation={this.changeAddedItem} onChangeWidth={this.onChangeWidth}/>
             <Canvas updateCurrentItems={this.updateCurrentItems} modalOpen={this.state.modalOpen} onAddingOperation={this.onAddingOperation} addedItem={this.state.addedItem} updateRelationships={this.updateRelationships} relationShips={this.state.relationShips} onAddingRelationship={this.onAddingRelationship}  currentItems={this.state.currentItems} resizableWidth={this.state.resizableWidth}/>
             <SideBarInfo currentItems={this.state.currentItems}/>
         </div>
     )
    }
}

export default App;
