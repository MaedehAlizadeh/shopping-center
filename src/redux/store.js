import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import rootReducer from "./rootReducer"

// const store = createStore(rootReducer, applyMiddleware(thunk));


// Local Persistence
const loadState = () => {
	try {
		const state = localStorage.getItem("Items");
		return state ? JSON.parse(state) : undefined;
	} catch (e){
		return undefined;
	}
}
const saveState = () =>  {
	localStorage.setItem("Items", JSON.stringify(store.getState()));
}
const store = createStore(rootReducer, loadState() , applyMiddleware(thunk));

store.subscribe(saveState);

export default store;
