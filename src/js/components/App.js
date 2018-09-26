import React, { Component } from 'react';

import {
  connect
} from 'react-redux';

import {
  bindActionCreators
} from 'redux';

import * as Actions from '../actions/todo.actions';
import * as Show from '../actions/show.actions';

import Aux from '../hoc/Aux';
import Button from './Button/Button';
import ItemList from './ItemList/ItemList';
import Top from './Top/Top';
//import classes from './App.css';



class App extends Component {
  state = {
    input: ""
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      input: value
    });
  };

  handleClick = () => {
    // const inputNote = this.state.inputNotes.map((name)=>name);
    // inputNote.push(this.state.input);
    // this.setState({
    //     inputNotes: inputNote
    // })
    this.props.actions.addTodo(this.state.input)
  }

  showHandler = () => {
    //this.setState({ show: !this.state.show });
    this.props.showAction.show();
  }

  render() {
    return (
      <Aux>
        <ItemList inputNotes={this.props.todos}
          delay={2000} />
        <Top handleChange={this.handleChange}
          handleClick={this.handleClick}
          inputNotes={this.props.todos}
          show={this.props.show} />
        <div >
          <Button clicked={this.showHandler}><svg viewBox="0 0 28 32"><path d="M28,32 C28,32 23.2863266,30.1450667 19.4727818,28.6592 L3.43749107,28.6592 C1.53921989,28.6592 0,27.0272 0,25.0144 L0,3.6448 C0,1.632 1.53921989,0 3.43749107,0 L24.5615088,0 C26.45978,0 27.9989999,1.632 27.9989999,3.6448 L27.9989999,22.0490667 L28,22.0490667 L28,32 Z M23.8614088,20.0181333 C23.5309223,19.6105242 22.9540812,19.5633836 22.5692242,19.9125333 C22.5392199,19.9392 19.5537934,22.5941333 13.9989999,22.5941333 C8.51321617,22.5941333 5.48178311,19.9584 5.4277754,19.9104 C5.04295119,19.5629428 4.46760991,19.6105095 4.13759108,20.0170667 C3.97913051,20.2124916 3.9004494,20.4673395 3.91904357,20.7249415 C3.93763774,20.9825435 4.05196575,21.2215447 4.23660523,21.3888 C4.37862552,21.5168 7.77411059,24.5386667 13.9989999,24.5386667 C20.2248893,24.5386667 23.6203743,21.5168 23.7623946,21.3888 C23.9467342,21.2215726 24.0608642,20.9827905 24.0794539,20.7254507 C24.0980436,20.4681109 24.0195551,20.2135019 23.8614088,20.0181333 Z"></path></svg></Button>
        </div>
      </Aux>
    );
  }
}

export default connect(
  (state) => {
    return {
      todos: state.todos,
      show: state.show
    };
  },
  (dispatch) => {
    return {
      actions: bindActionCreators(Actions, dispatch),
      showAction: bindActionCreators(Show, dispatch),
    };
  }
)(App);
