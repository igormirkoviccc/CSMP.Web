import React from "react";
import {Arrow} from 'react-konva';

const CustomizeCanvasArrow =({node1, node2}) =>{
    const dx = node1.x - node2.x;
    const dy = node1.y - node2.y;
    let angle = Math.atan2(-dy, dx);

    const radius = 0;

    const arrowStart = {
        x: node2.x + -radius * Math.cos(angle + Math.PI),
        y: node2.y + radius * Math.sin(angle + Math.PI)
    };

    const arrowEnd = {
        x: node1.x + -radius * Math.cos(angle),
        y: node1.y + radius * Math.sin(angle)
    };



        return (
          <Arrow fill="black" stroke="black" strokeWidth={1}
                 pointerWidth={6} points={[arrowStart.x,
              arrowStart.y,
              arrowEnd.x,
              arrowEnd.y]}/>
        );

}

export default CustomizeCanvasArrow;

