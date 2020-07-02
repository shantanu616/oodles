import React from 'react'
import {Link,Route} from 'react-router-dom';
import Header from '../../Component/header';
import Footer from '../../Component/footer';
import ModuleA from './ModuleA'
import ModuleB from './ModuleB'
const Question3=(props)=>{
	return(<div>
			<Header/>
				<div class="main_cont">
					<Route exact path="/question3" component={ModuleA}/>
					<Route exact path="/question3/moduleB" component={ModuleB}/>
				</div>
			<Footer/>
			</div>)
}

export default Question3