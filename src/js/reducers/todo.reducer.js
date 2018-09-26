import {
    ADD_TODO
} from '../actions/todo.actions';
// importiruem nashi constanti kotorie bili sozdani v todo.actions.js
const defaultState = [];// sozdaem konstantu defaulState v slu4ae esli nash store e6e ne imeet state

export default function todos(state=defaultState, action){// sozdaem funktsiyu todos, kotoraya prinimaet stariy state(ili defaulState) i action(to est 4to mi xotim izmenit v nashem starom sostoyanii) i v kontse vozvrashaet novoe sostoyanie
    switch(action.type){ // uspolzuem switch(dla udobstva) 
        case ADD_TODO: //switch provaraet case, esli on sovpodaet to suda peredaetsa action sootvetstvuyushiy.
            // const names = state.map((todo)=>todo);
            // names.push(action.payload.todo);
            // return names;
            return [ //vozvrashaetsa noviy state
                ...state,//vna4ale sozdaetsa kopiya staroqo array is store([...state])
                action.payload.text//posle zapatoy 4to pishem to kakbi push-itsa v array
            ];
        default:
        return state;//v slu4ae elsi ni odin case ne sovpal vipolnaetsa default, to est vozvrashaetsa stariy state
    }
} 
