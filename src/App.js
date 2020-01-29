import React,{Component} from 'react';
import './style/test.scss'
import ResizibleSideNav from "./components/context/ResizibleSideNav";
import Canvas from "./components/context/Canvas";



class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            resizableWidth: 0,
            currentItems:[],
            relationShips: []
        }
    }

    onChangeWidth = (newWidth) =>{
        this.setState({resizableWidth: newWidth});
    }

    onAddingRelationship = (relationship) =>{
        this.setState(prevState => ({
            relationShips: [...prevState.relationShips, relationship]
        }))
    }

    updateRelationships = (relationships) =>{
        this.setState({relationShips: relationships})
    }

    onAddingOperations = (operation) =>{
        this.setState(prevState => ({
            currentItems: [...prevState.currentItems, operation]
        }))
    }

    render(){
     return(
         <div className="App">
             <ResizibleSideNav onClickOperation={this.onAddingOperations} onChangeWidth={this.onChangeWidth}/>
             <Canvas updateRelationships={this.updateRelationships} relationShips={this.state.relationShips} onAddingRelationship={this.onAddingRelationship}  currentItems={this.state.currentItems} resizableWidth={this.state.resizableWidth}/>
         </div>
     )
    }
}

export default App;
