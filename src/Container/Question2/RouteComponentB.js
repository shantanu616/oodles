import React,{useState} from 'react'
import {Link} from 'react-router-dom';

const RouteComponentB=(props)=>{
	let params = new URLSearchParams(props.location.search);
	return(<div class="container1">
				<h1>Question 2</h1>
				<div class="row m-5 p-5">
					<div class="col-md-12 result">{params.get("data")}</div>
				</div>
			</div>)
}

export default RouteComponentB