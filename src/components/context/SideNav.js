import React,{Component} from "react";
import Operation from "../Operation";

class SideNav extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    mapData = () =>{
        return global._data.map((item,index) =>{
            return <Operation key={'_' + index} item={item}/>
        })
    };

    render(){
        return (
            <div className='side_nav'>
                <div className='side_nav_container'>
                    {this.mapData()}
                </div>
            </div>
        );
    }

}

export default SideNav;