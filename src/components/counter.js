import { Component } from "react";

class Counter extends Component{
    constructor(){
        super();
        this.state={
            counter:0,
        };
    }
    action(){
        this.setState({
          counter: this.state.counter+1
        })
    }
    reaction(){     
        if(this.state.counter>0){
            this.setState({
                counter:this.state.counter-1
            })
        }
    }
    render(){
        return(
            <div>
                <h1>the value in the counter is: {this.state.counter}</h1>
                <button onClick={()=>this.action()}>Add to the counter</button>
                <button onClick={()=>this.reaction()}>mins from counter</button>
            </div>
        )
    }
}
export default Counter