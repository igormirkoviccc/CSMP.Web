import React,{Component} from 'react';
import './style/test.scss'
import ResizibleSideNav from "./components/context/ResizibleSideNav";
import Canvas from "./components/context/Canvas";



class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            resizableWidth: 0
        }
    }

    onChangeWidth = (newWidth) =>{
        this.setState({resizableWidth: newWidth});
    }

    render(){
     return(
         <div className="App">
             <ResizibleSideNav onChangeWidth={this.onChangeWidth}/>
             <Canvas resizableWidth={this.state.resizableWidth}/>
         </div>
     )
    }
}

export default App;
