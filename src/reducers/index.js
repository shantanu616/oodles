import {combineReducers} from 'redux'
const State="Hello oodles"
const firstReducer=(state=State,action)=>{
	if(action.type=="FIRST")
	{
		return action.payload
	}
	return State
}
const reducers=combineReducers({
	data:firstReducer
});

export default reducers