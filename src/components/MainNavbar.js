import React from 'react'
import logo from '../assets/images/mlh-prep.png'
import { IoSearchOutline } from 'react-icons/io5'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineLogout } from 'react-icons/ai'

const MainNavbar = () => {
	const [city, setCity] = React.useState('')
	return (
		<div>
			<div className='h-70 w-full bg-blue-900 flex items-center justify-center p-4'>
				<img className='w-64' alt="mlh-logo" src={logo} />
			</div>

			<nav class="navbar navbar-expand-xl navbar-light bg-light">
				<button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div id="navbarCollapse" className="flex w-full items-center justify-around "class="collapse navbar-collapse justify-content-start">
					<div class="navbar-nav">
						<p class="nav-item nav-link disable">Search WHATS ON YOUR MIND</p>
					</div>
						<form className="flex items-center" onSubmit={(e) => e.preventDefault()}>
							<input type="text" value={city} onChange={(e) => setCity(e.target.value)} id="search" className="border focus:outline-none p-2" placeholder="Start your Search... " />
							<button type="submit"><IoSearchOutline className='mx-2'/></button>
						</form>
					<div>
						<div class="nav-item dropdown">
							<button data-toggle="dropdown" class="nav-link dropdown-toggle user-action"><img src="https://www.tutorialrepublic.com/examples/images/avatar/2.jpg" class="avatar" alt="Avatar" /> Paula Wilson <b class="caret"></b></button>
							<div class="dropdown-menu">
								<button className="flex items-center" class="dropdown-item"><AiOutlineUser className='mx-2' />Profile</button>
								<button className="flex items-center" class="dropdown-item"><AiOutlineLogout className='mx-2' />Logout</button>
							</div>
						</div>
					</div>
					
				</div>
			</nav>

		</div>
	)
}

export default MainNavbar
