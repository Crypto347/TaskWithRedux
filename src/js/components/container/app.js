import React, {  
    Component
} from "react";

import {
    connect
} from 'react-redux';
 
import {
    bindActionCreators
} from 'redux';

import * as Actions from '../../actions/todo.actions';

import List from './list';
//importiruem iz React function Component()
//importiruem iz react-redux function connect()
//importiruem iz redux function  bindActionCreators()
//importiruem iz todo.action.js vse pod nazvaniem ACtions. i 4tob vizvat 4to nam nujno pishem Actions. i funktsiya kotoraya nam nujna
class App extends Component { //sozdaem noviy komponent App (ya uje eto v List pisala)
    constructor() {
        super();        
    }
    
    render() {
        return (// sozdaem todos, kotoraya beret dannie iz store;  onAdd eto funktsiya addTodo iz todo.action.js i onDelete eto funktsiya deleteTodo is todo.action.js  
            <div>
                <List 
                todos={this.props.todos} onAdd={this.props.actions.addTodo}
                onDelete={this.props.actions.deleteTodo}
                >
                </List>
                <List 
                todos={this.props.todos} onAdd={this.props.actions.addTodo}
                onDelete={this.props.actions.deleteTodo}
                >
                </List>
            </div>
        );
    }
} // mi 2 raza renderim component List

export default connect( //ispolzuem funktsiyu connect, kotoraya soedinayet react( dannom slu4ae nash component <App>)c redux(so store). eta funksiya prinimaet 2 functsii
    (state)=>{//beret state iz store i peredaet v props etoqo komponenta
        return {
            todos: state.todos 
        };
    },
    (dispatch)=>{ //beret actions i peredaet v props etoqo komponenta
        return {
            actions: bindActionCreators(Actions, dispatch)
        };
    }
)(App);//connect vozvrashaet funktsiyu kotoraya kak argument uje beret App, to est blagodara connet mi svazivaem nash danniy component so Redux store
