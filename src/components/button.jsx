import React from "react";

//create out button component as a functional component

const Button = (props) =>{
return(
    <input
    type="button"
    className={props.type==="action" ? "button action-button" : "button input-button"}
    onClick={props.handleClick}
    value={props.label}
    />

);
}

//describe our expected props types
/*Button.propTypes={
    type: React.PropTypes.string.isRequired,
    handleClick: React.func, //React.propTypes.func.isRequired og shit, i dont understand anything anymore
    label: React.PropTypes.string.isRequired
}*/
export default Button;