import React from 'react'
import logo from '../assets/images/mlh-prep.png'
import { IoSearchOutline } from 'react-icons/io5'
const MainNavbar = () => {
	return (
		<div>
			<div className='h-70 w-full bg-blue-900 flex items-center justify-center p-4'>
				<img style={{ width: "130px" }} alt="mlh-logo" src={logo} />
			</div>
			<nav class="navbar navbar-expand-xl navbar-light bg-light">
				<button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div id="navbarCollapse" className="flex w-full items-center justify-around "class="collapse navbar-collapse justify-content-start">
					<div class="navbar-nav">
						<p class="nav-item nav-link disable">SEARCH What's on your mind</p>
					</div>

						<form className="flex items-center">
							<input type="text" id="search" className="border focus:outline-none p-2" placeholder="Start your Search... " />
							<IoSearchOutline className='mx-2' />
						</form>

					<div>
						<div class="nav-item dropdown">
							<a href="#" data-toggle="dropdown" class="nav-link dropdown-toggle user-action"><img src="https://www.tutorialrepublic.com/examples/images/avatar/2.jpg" class="avatar" alt="Avatar" /> Paula Wilson <b class="caret"></b></a>
							<div class="dropdown-menu">
								<a href="#" class="dropdown-item"><i class="fa fa-user-o"></i> Profile</a>
								<div class="dropdown-divider"></div>
								<a href="#" class="dropdown-item"><i class="material-icons">&#xE8AC;</i> Logout</a>
							</div>
						</div>
					</div>
					
				</div>
			</nav>

		</div>
	)
}

export default MainNavbar
