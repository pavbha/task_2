import React, {Component} from "react";


export class Head extends Component{
    constructor(){
        super();
        this.state={
                    title:"task_2",
                    name:"pavi"
        }
    }
    updateTitle =()=>{
        this.setState({title:"TASK_2"},()=>{
            // console.log("after state update",this.state,new Data());
        })
        // console.log("this.state", this.state,new Data());
    }
    render(){
        return(
        <React.Fragment><div>{this.state.title}</div>
        <button onClick={this.updateTitle}>change Title</button>
        </React.Fragment>)
    }
}
