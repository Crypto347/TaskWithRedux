import React, {Component} from 'react';

//import classes from './ItemList.css';


class ItemList extends Component {
    state = {
        inputNotes: []
    }

    componentWillReceiveProps = (nextProps) => {
        setTimeout(() => {
                this.setState({inputNotes: nextProps.inputNotes});
        },this.props.delay);
    } 

    render(){
        const list = this.state.inputNotes.map((n,i)=>{
            return(
                <li key = {n+i}>
                    {n}
                </li>
            );
        })
    
        return(
            <div >
                <h1>Notes:</h1>
                <ul>
                     {list}
                </ul>
            </div>
        );
    }
}

export default ItemList;