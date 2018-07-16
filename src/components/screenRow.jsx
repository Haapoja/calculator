import React from "react";

import "./components.css"

//screen row component is written as a functional component
// it receives an displays (in an input field) a props (property) of value from
// its parent component
const ScreenRow = (props) =>{
    return (
        <div className="screen-row">
        <input className="screen" type="text" readOnly value ={props.value}/>
        </div>
    )
}

//we describe the props (property) that the parent element is required to pass 
// into this component 

/*ScreenRow.propTypes = {
    value: React.propTypes.string.isRequired
}*/

export default ScreenRow;