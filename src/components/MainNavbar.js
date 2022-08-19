import React, { useState } from 'react'
import logo from '../assets/images/mlh-prep.png'
import pp from '../assets/images/profile_pic.png'
import Autocomplete from './Autocomplete'
import suggestionGenerator from './CityAutocompleteGenerator'

// TODO: Search bar moves up when showing autocomplete results
// TODO: Hide autocomplete when clicking on non autocomplete parts of page

const MainNavbar = () => {
  const [city, setCity] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(city)
  }

  return (
    <div>
      <div className='h-70 w-full bg-blue-900 flex items-center justify-center p-4'>
        <img style={{ width: "130px" }} alt="mlh-logo" src={logo} />
      </div>
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <div className="animatep">
            <div className="titleWrapper">
              <div className="titleId">SEARCH What's on your mind</div>
              <div className="titleId">SEARCH For Weather</div>
              <div className="titleId">SEARCH For Accomodations</div>
            </div>
          </div>
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
              <Autocomplete
                suggestionGenerator={suggestionGenerator}
                minLength={3}
              />
              <span className="input-group-addon"><i className="material-icons"></i></span>
            </div>
          </form>
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <a href="#" data-toggle="dropdown" className="dropdown-toggle user-action"><img src={pp} className="avatar" alt="Avatar" /> Hello,</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default MainNavbar
