import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import NameA from './NameA'
import NameB from './NameB'
const Question1=(props)=>{
const [value,Changevalue]=useState(0)

	return(<div class="container1">
			<h1>Question 1</h1>
		    <div class="row m-5 p-5">
				<NameA onClick={()=>Changevalue(value + 1)}/>
				<NameB value={value}/>
			</div>
			</div>)
}

export default Question1