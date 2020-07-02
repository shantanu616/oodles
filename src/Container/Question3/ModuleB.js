import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Action from '../../Actions'
const ModuleB=(props)=>{
	return(<div ><h1>{props.data}</h1></div>)
	}
const mapStateToProps=(state)=>{
	return {"data":state.data}
}
export default connect(mapStateToProps,null)(ModuleB)