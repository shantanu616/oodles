import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Action} from '../../Actions'
const ModuleA=(props)=>{
	const [value,changeValue]=useState("")
	const dispatchHandler=()=>{
		if(value.trim()!="")
		{
			props.first(value);
			props.history.push('/question3/moduleB')
		}
	}
	return(<div class="">
			<h1>Module A</h1>
		    <div class="d-flex p-2 m-5 ques3">
				<input type="text" value={value} onChange={(e)=>{changeValue(e.target.value)}}/>
				<button class="btn btn-primary" onClick={dispatchHandler}>Dispatch</button>
			</div>
			</div>)
	}
const dispatchAction={
	first:Action.first
}
export default connect(null,dispatchAction)(ModuleA)