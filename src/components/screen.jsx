import React from "react";
import ScreenRow from "./screenRow";
import "./components.css"

//create our screen component as a functional component
//it would display two screen rows, 1 for questions and the other for the answer
//the value would be passed down from its parent component as a prop

const Screen = (props)=>{
    return(
        <div className="">
         <ScreenRow className="screen" value={props.question}/>
         <ScreenRow className="screen1"value={props.answer}/>
        </div>
    );
}


// define our props expected from the parent component

/*Screen.propTypes = {
    question: React.PropTypes.string.isRequired,
     answer: React.PropTypes.string.isRequired
}*/

export default Screen;