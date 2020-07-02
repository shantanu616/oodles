import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import InputBox from '../../Component/InputBox'
const RouteComponentA=(props)=>{
	const [value,ChangeValue]=useState('')
	const ChangeComponentHandler=()=>{
		if(value.trim()!="")
		{
			props.history.push({ pathname:"/query_params", search: `?data=${value}` })
		}
	}
	return(<div class="container1">
				<h1>Question 2</h1>
				<div class="row m-5 p-5">
					<InputBox type="text" value={value} placeholder="Enter Your Text" onChange={(res)=>ChangeValue(res)}/>
					<button class="btn btn-primary" onClick={ChangeComponentHandler}>Save</button>
				</div>
			</div>)
}

export default RouteComponentA