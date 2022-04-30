import { legacy_createStore as createStore } from 'redux';
import { reducer } from './reducer';

const initState = {
    todos: []
};

const store = createStore(reducer, initState);

export { store, reducer };

store.subscribe(() => {
    console.log("subscribe: ", store.getState().todos[0]);
})