import React from 'react'

const MainNavbar = () => {
  return (
    <>
      <br />
      <div class="nav" style={{ backgroundColor: "white" }}>
        <div class="container">
          <ul class="pull-left">
            <li style={{color:'gray'}}>Search Whats on your mind</li>
            <li>
              <form>
                <input
                  className="search"
                  type="search"
                  placeholder="Search..."
                />
                <button className="submit" type="submit">
                  Search
                </button>
              </form>
            </li>
          </ul>

          <ul class="pull-right">
            <li>
              <NavLink to="#">Log In</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <br/><br/>
    </>
  )
}

export default MainNavbar
