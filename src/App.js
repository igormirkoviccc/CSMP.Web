import React,{Component} from 'react';
import './style/test.scss'
import ResizibleSideNav from "./components/context/ResizibleSideNav";
import Canvas from "./components/context/Canvas";
import SideBarInfo from "./components/context/SideBarInfo";
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

let OperationID = 1;


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            addedItem: null,
            resizableWidth: 300,
            currentItems:[],
            relationShips: [],
            modalOpen: false,
            modalMode: '',
            selectedItem: null,
            optionsData: []
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
        if(this.state.relationShips.length === 0){
            this.state.relationShips = relationships;
        }else{
            this.setState({relationShips: relationships})
        }
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

    onModalOpenOptions = () =>{
        this.setState({modalOpen: true, modalMode: 'simulation_options'});
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

    makeDataForExport = () =>{
      let exportData = [];
      this.state.currentItems.forEach((item) => {
          exportData.push({
              'R.B.': item.OperationID,
              'TIP': item.label.toUpperCase(),
              'U1': item.inputsArray[0] && item.inputsArray[0].node ? item.inputsArray[0].node.OperationID : 0,
              'U2': item.inputsArray[1] && item.inputsArray[1].node ? item.inputsArray[1].node.OperationID : 0,
              'U3': item.inputsArray[2] && item.inputsArray[2].node ? item.inputsArray[2].node.OperationID : 0,
              'P1': item.inputs[0] ? item.inputs[0].value : 0,
              'P2': item.inputs[1] ? item.inputs[1].value : 0,
              'P3': item.inputs[2] ? item.inputs[2].value : 0
          })
      });
      return exportData;
    };


    exportData = () =>{
        const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        const fileExtension = '.xlsx';
        const ws = XLSX.utils.json_to_sheet(this.makeDataForExport());
        const ws1 = XLSX.utils.json_to_sheet([this.state.optionsData]);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws,"Konfiguraciona tabela");
        XLSX.utils.book_append_sheet(wb, ws1,"Opcije");
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], {type: fileType});
        FileSaver.saveAs(data, 'export' + fileExtension);
    };

    saveOptionsData = (data) =>{
        this.setState({optionsData: data})
    };

    changeSelectedItemInput = (value, index) =>{
      let selectedItem = this.state.selectedItem;
      selectedItem['inputs'][index]['value'] = value;
      this.setState({selectedItem})
    };


    render(){
        return(
         <div className="App">
             <ResizibleSideNav
                 width={this.state.resizableWidth}
                 onClickOperation={this.changeAddedItem}
                 onChangeWidth={this.onChangeWidth}/>
             <Canvas
                 onModalOpenOptions={this.onModalOpenOptions}
                 onExportData={this.exportData}
                 modalClose={this.modalClose}
                 onModalOpen={this.changeAddedRelationship}
                 changeSelectedItem={this.changeSelectedItem}
                 updateCurrentItems={this.updateCurrentItems}
                 modalOpen={this.state.modalOpen}
                 modalMode={this.state.modalMode}
                 onAddingOperation={this.onAddingOperation}
                 addedItem={this.state.addedItem}
                 updateRelationships={this.updateRelationships}
                 relationShips={this.state.relationShips}
                 onAddingRelationship={this.onAddingRelationship}
                 currentItems={this.state.currentItems}
                 saveOptionsData={this.saveOptionsData}
                 resizableWidth={this.state.resizableWidth}/>
             <SideBarInfo
                 onSelectedItemChange={this.changeSelectedItemInput}
                 selectedItem={this.state.selectedItem}
                 currentItems={this.state.currentItems}/>
         </div>
     )
    }
}

export default App;
