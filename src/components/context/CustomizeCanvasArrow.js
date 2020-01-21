import React from "react";
import {Arrow} from 'react-konva';




function CustomizeCanvasArrow(props){
        return (
          <Arrow fill="black" stroke="black" points={[
              props.item.first_node_position['x'],
              props.item.first_node_position['y'],
              props.item.second_node_position['x'],
              props.item.second_node_position['y']]}/>
        );

}

export default CustomizeCanvasArrow;

