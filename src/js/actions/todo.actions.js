export const ADD_TODO = 'ADD_TODO';
//sozdaem konstati ADD_TODO i DELETE_TODO i ix exportiruem

export function addTodo (text){//sozdaem funktsiyu addTodo kotoraya yavlayetsa pure toe st ona ne menayet svoy input, 4to ey zadaem to vozvrashaet
    return {
        type: ADD_TODO,// zadaem tip to est eto imya kotoroe mi budem dalee v switch proverat, esli case ADD_TODO sovpodaet to function todos v todo.reducer.js budet vozvrashat noviy state 
        payload: {
            text: text,//action kotoriy peredaetsa v reduser
        },
    };
}
