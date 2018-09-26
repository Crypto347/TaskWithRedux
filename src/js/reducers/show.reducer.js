import {
    SHOW_DIALOG
} from '../actions/show.actions';

const defaultState = false;

export default function show(state=defaultState, action){
    switch(action.type){ 
        case SHOW_DIALOG: 
            return !state;
        default:
        return state;//v slu4ae elsi ni odin case ne sovpal vipolnaetsa default, to est vozvrashaetsa stariy state
    }
} 
