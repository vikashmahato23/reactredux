import { ADD_TODO, TOGGLE_TODO } from './actions';
import { nanoid } from 'nanoid';

export const reducer = (store, action) => {
    if (action.type === ADD_TODO) {
        return {
            ...store,
            todos: [
                ...store.todos,
                { title: action.payload, status: false, id: nanoid() }
            ]
        }
    }
    if (action.type === TOGGLE_TODO) {
        const id = action.payload;
        if (store.todos.find(e => e.id === id).status) {
            // console.log(`status is currently true`)
            store.todos.find(e => e.id === id).status = false;
        } else {
            // console.log(`status is currently false`)
            store.todos.find(e => e.id === id).status = true;
        }
        // console.log(store.todos.find(e => e.id === id).status)
        return store;
    }
    return store;
};