import React,{Component} from 'react';
import './style/test.scss'
import ResizibleSideNav from "./components/context/ResizibleSideNav";
import Canvas from "./components/context/Canvas";



class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            resizableWidth: 0,
            currentItems:[]
        }
    }

    onChangeWidth = (newWidth) =>{
        this.setState({resizableWidth: newWidth});
    }

    onClickOperation = (operation) =>{
        this.setState(prevState => ({
            currentItems: [...prevState.currentItems, operation]
        }))
    }

    render(){
     return(
         <div className="App">
             <ResizibleSideNav onClickOperation={this.onClickOperation} onChangeWidth={this.onChangeWidth}/>
             <Canvas currentItems={this.state.currentItems} resizableWidth={this.state.resizableWidth}/>
         </div>
     )
    }
}

export default App;
