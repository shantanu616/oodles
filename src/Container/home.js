import React from 'react'
import {Link} from 'react-router-dom';

const Home=(props)=>{
	return(  <div class="container1">
				<div class="row ml-5 p-5">
					<Link to="/question1" class="col-md-3 card"><div >Question 1</div></Link>
					<Link to="/question2" class="col-md-3 card"><div >Question 2</div></Link>
					<Link to="/question3" class="col-md-3 card"><div >Question 3</div></Link>
				</div>
			</div>)
}

export default Home