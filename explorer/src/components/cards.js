import React from "react";
import Box from "./box";

const CardsWidget = () => {
    return <div>
    <h2>Transform Property</h2>
     {[
        'transform: translate(-5px, -10px);',
        'transform: rotate(15deg);',
        'transform: skew(-5deg, -10deg);',
        'transform: scale(0.7);',
        'transform: matrix(0, 1, 1, 0, 0, 0);',
    ].map(element => {
       return <Box data = {element}/>
     })}
    </div>
}
export default CardsWidget;