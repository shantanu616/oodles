import React,{useState} from 'react'
import {Link} from 'react-router-dom';

const InputBox=(props)=>{
	return(<input {...props} onChange={(e)=>props.onChange(e.target.value)}/>)
}
InputBox.defaultProps = {
  placeholder: "Enter Text",
  type:'text',
  name: "",
  id:'',
  required:false,
  class:'None'
};
export default InputBox