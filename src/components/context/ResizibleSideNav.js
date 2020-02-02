import React, {Component} from 'react';
import '../../style/test.scss'
import SideNav from "./SideNav";
import Operation from "../Operation";




class ResizibleSideNav extends Component{
    constructor(props){
        super(props);
        this.state = {
            m_pos: 0,
            width: 300
        }
    }

    onResize = (e) =>{
            const dx = this.state.m_pos - e.x;
            this.setState({m_pos : e.x, width: (parseInt(getComputedStyle(document.getElementsByClassName('resize_side_nav_container')[0], '').width) - dx)}, () =>{
                this.props.onChangeWidth(this.state.width);
            });

    }

    addToArray = (item) =>{
        this.props.onClickOperation(item);
    }

    mapData = () =>{
        let data = JSON.parse(JSON.stringify(global._data));
        return data.map((item,index) =>{
            return <Operation onClickOperation={() => this.addToArray(item)} key={'_' + index} item={item}/>
        })
    };

    // componentDidMount() {
    //     const panel = document.getElementsByClassName("resize_side_nav_container")[0];
    //     panel.addEventListener("mousedown", (e) =>{
    //             if (e.offsetX > this.state.width - 15) {
    //                 this.setState({m_pos:  e.x});
    //                 document.addEventListener("mousemove", this.onResize, false);
    //             }
    //     }, false);
    //
    //     document.addEventListener("mouseup", ()=>{
    //         document.removeEventListener("mousemove", this.onResize, false);
    //     }, false);
    // }

    render(){

        return (
            <div className="resize_side_nav">
                    <div style={{width: this.state.width}} className='resize_side_nav_container'>
                        <div className='side_nav'>
                            <div className='side_nav_container'>
                                {this.mapData()}
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default ResizibleSideNav;
