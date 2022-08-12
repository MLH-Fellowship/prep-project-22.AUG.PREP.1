import React from 'react'
import logo from '../assets/images/mlh-prep.png'
import { IoSearchOutline } from 'react-icons/io5'
const MainNavbar = () => {
	return (
		<div>
			<div className='h-70 w-full bg-blue-900 flex items-center justify-center p-4'>
				<img style={{ width: "130px" }} alt="mlh-logo" src={logo} />
			</div>
			<nav className="navbar navbar-default">
        <div className="navbar-header">
          <a className="navbar-brand">SEARCH <b>What's on your mind!</b></a>  		
          <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
            <span className="navbar-toggler-icon" />
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
        </div>

        <div id="navbarCollapse" className="collapse navbar-collapse">
          <form className="navbar-form form-inline">
            <div className="input-group search-box">								
              <input type="text" id="search" className="form-control" placeholder="Search by Name" />
              <span className="input-group-addon"><i className="material-icons"></i></span>
            </div>
          </form>
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <a href="#" data-toggle="dropdown" className="dropdown-toggle user-action"><img src="https://www.tutorialrepublic.com/examples/images/avatar/2.jpg" className="avatar" alt="Avatar" /> Paula Wilson <b className="caret" /></a>
              <ul className="dropdown-menu">
                <li><a href="#"><i className="fa fa-user-o" /> Profile</a></li>
                <li className="divider" />
                <li><a href="#"><i className="material-icons"></i> Logout</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
		</div>
	)
}

export default MainNavbar
