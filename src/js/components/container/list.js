import React from "react"; // importiruem iz modula "react" React
import {Component} from "react"; //importiruem iz React funktsiyu Component()


class List extends Component { //sozdaem noviy komponent-List 
    constructor() {
        super();// ssilaetsa na constraktor Objecta, mi doljni sna4alo napisat super(),tak kak mojet dat oshibku esli budut odinakovie svoystava v parent
        this.state = { //pishem nachalnoe sostoyanie
            input:""  //sozdaem property input, kotoriy yavlayetsa pustim stringom
        }
    }

    handleChange=(event)=>{ //sozdaem function kotoraya prinimaet zna4enie event
        const value = event.target.value; // sozdaem novuyu konstantu value v kotoruyu zapisivaetsa slovo kotoroe mi vvodim v okoshko <input>
        this.setState({
            input: value // posle toqo kak novoe slovo vvodim, blagodara setState nashe input iz pustoqo stringa beret zna4enie value, to est slovo kotoroe mi vveli
        });
    };

    handleClick=()=>{ //soszdaem function handleClick
        this.props.onAdd(this.state.input)//peredaet parametr iz nasheqo state v function onAdd={} kotoriy naxoditsa v App componente, to est nashe slovo kotoroe mi vveli. dalee ono idet v addTodo(){} v todo.action.js
       
    }

    // deleteElement(i){
    //     const delEl= this.state.names.map((name)=>name);
    //     delEl.splice(i,1);
    //     this.setState({
    //         names: delEl
    //     });
    //   }  

    handleClickDel=(i)=>{ //sozdaem funksiyu handleClickDel i parametr 'i'
        return ()=>{ //delaem currying
            this.props.onDelete(i)//peredaet i v function onDelete={} kotoriy naxoditsa v App componente. i eto nomer elementa v array
        }
    }

    renderList=()=>{ //sozdaem funksiyu renderList, kotoru vizovem v rendere
        
        const list = this.props.todos.map((n,i)=>{ //sozdaem novuyu konstantu list.kotoraya yavlaetsa massivom.berem massiv todos(kotoriy ssilaetsa na <App todos={}>),i ispolzuyem map funksiyu
            return (                                // funksiya map yavlayetsa map(function(item(u nas 'n'),index (u nas 'i'), array){})
                <li  key={n+i} onClick={this.handleClickDel(i)}>
                    {n}
                </li>
            );
        })
        
        // let list = [...this.props.todos]; //to je samoe s for loop, sozdaem novuyu peremennuyu list i sozdaem kopiyu todos array, rtob na kopii delat izmeneniya
        // let list2 = []; //sozdaem novuyu peremennuyu list2, kotoraya yavlaetsa pustim array

        // for(var i = 0; i<list.length; i++){ //for loop, sozdaem peremennuyu 'i', na4inaya s 0 do posledneqo elementa array krutit
        //     list2.push( // v pustoy aaray zapisivaem, kajduyu stro4ku <li> so svoim key(to est 0, potom 1,potom2 i td) i event onClick
        //         <li key={i} onClick={this.handleClickDel(i)}> 
        //             {list[i]}  
        //         </li>);
        // } //zdes koqda najimaem na slovo v brauzere srobativaet functiya handleClickDel i tem samim peredaet nujniy index slova v onDelete v <App> kotoriy v svoyu o4ered idet v functiyu deleteTodo(){} v todo.action.js
       
        return ( // vozvrashaem nash list2 
            <ul>
                {list} 
            </ul>
        );
    }

    render() { //vse 4to mi videm v brauzere: paragraf:Names pustuyu ya4eyku dla vvoda,knopku
        return (
            <div >
                <p>Names</p>
                <input type="text" onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Press</button>
                {this.renderList()}
            </div> 
        );
    }
}

export default List;//exportim 4tob v drugix komponentax ispolzovat komponent List 
