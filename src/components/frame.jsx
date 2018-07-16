import React from "react";
import Screen from "./screen";
import Button from "./button";

//create a class which extends react component
class Frame extends React.Component {

    constructor() {
        super();
        //set the default state
        this.state = {
            question: "",
            answer: ""
        }
        //bind our handleclick method(sets "this" explicitly to refer to this component)
        //we did this because "this" would refer to the source of the click events
        this.handleClick = this.handleClick.bind(this);
       // this.handleKey = this.handleKey.bind(this);
    }

    //render function to create component to be rendered on the dom
    //this method must return a single parent element as you can see here
    //the component is wrapped around () to makke it a single expression

    render() {
        return (
            <div className="frame">
                <div className="calculator-title">
                    calculator
        </div>
                <Screen question={this.state.question} answer={this.state.answer} />
                <div className="button-row">
                    <Button label={"1"} handleClick={this.handleClick}tabIndex="0" onKeyDown={this.handleKey} type="input" />
                    <Button label={"2"} handleClick={this.handleClick} type="input" />
                    <Button label={"3"} handleClick={this.handleClick} type="input" />
                    <Button label={"+"} handleClick={this.handleClick} type="input" />
                   
                </div>
                <div className="button-row">
                    <Button label={"4"} handleClick={this.handleClick} type="input" />
                    <Button label={"5"} handleClick={this.handleClick} type="input" />
                    <Button label={"6"} handleClick={this.handleClick} type="input" />
                    <Button label={"-"} handleClick={this.handleClick} type="input" />
                  
                </div>
                <div className="button-row">
                    <Button label={"7"} handleClick={this.handleClick} type="input" />
                    <Button label={"8"} handleClick={this.handleClick} type="input" />
                    <Button label={"9"} handleClick={this.handleClick} type="input" />
                    <Button label={"/"} handleClick={this.handleClick} type="input" />
                   

                </div>
                <div className="button-row">
                    <Button label={"0"} handleClick={this.handleClick} type="input" />
                    <Button label={"."} handleClick={this.handleClick} type="input" />
                    <Button label={"*"} handleClick={this.handleClick} type="input" />
                    <Button label={"C"} handleClick={this.handleClick} type="input" />

                </div>
            </div>
        );
    }

    

    //handles all click events
    handleClick(event) {//get the value from the element that fired the event
        const value = event.target.value; //get the value from the target element(button)
        switch (value) {
            case "=": { //if its and equal sign, use the eval module to evaluate the question
                //convert the answer (number) to string
                const answer = eval(this.state.question).toString();
                //update answer in our state.
                this.setState({ answer });
                break;

            }
            case "C": {
                //if its the Cls sign, just clean our question and answer in the state
                this.setState({ question: "", answer: "" });
                break;
            }
            default: {
                //for every other command, update the answer in the state
                this.setState({ question: this.state.question += value })
                break;
            }
        }
    } 

   
}

export default Frame;