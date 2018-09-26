import React from "react";
import {Component} from "react";


class List extends Component {
    constructor() {
        super();
        this.state = {

            names : ["Humay1","Humay2"],
            input:[],
            input2:[]
            
        }
    }

    onChange(event){
        this.state.input2 = event.target.value;
        console.log(this.state.input2);
    }
    stateChange(){
        this.setState({input:this.state.input2})
    }

    addName(){
        
    }

    render() {
        return (
            <div >
                <p>Names</p>
                
                <input type="text" onBlur={this.onChange.bind(this)}/>
                
                <p>your name: {this.state.input}</p>
                <div>
                   
                </div>
                <button onClick={()=>{this.stateChange()}}>Press</button>
                <ul>
                        {this.state.names.map((n,i)=><li key ={i}>{n}</li>)}
                </ul>
            </div>
        );
    }
}

export default List;


let a = ['z','x','c'];

for(var i = 0; i<a.length; i++){
console.log(a[i]);
}