import React from 'react';
import {Link} from 'react-router-dom';
const Header=(props)=>{
  	return(
          <header>
              <div class="shadow-sm ">
                  <nav class="navbar navbar-expand-lg navbar-light " style={{backgroundColor:'rgb(240, 245, 251)'}}>
                    <a class="navbar-brand" href="/"><img src="/logo.svg"  alt="" /></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav mr-auto">
                        <Link to="/question3"><li class="nav-item m-1">Module A</li></Link>
                        <Link to="/question3/moduleB"><li class="nav-item m-1">Module B</li></Link>
                      </ul>
                    </div>
                  </nav>
              </div>
          </header>)
  	}
export default Header