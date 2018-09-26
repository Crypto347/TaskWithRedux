import React from 'react';

//import classes from './Top.css';
import ItemList from '../ItemList/ItemList';

const top = (props) => {

    return(
            <div 
                style={{
                            transform: props.show ? 'translateY(0)': 'translateY(-100vh)',
                            opacity: props.show ? '1' : '0'
                        }}>
                <div >
                         <ItemList inputNotes={props.inputNotes}
                                     delay={1000}/>
                 </div>
                <input type="text" onChange={props.handleChange}/>
                <button onClick={props.handleClick}>Add</button>
            </div>
    );
}
    



export default top; 

