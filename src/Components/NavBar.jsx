import React from 'react'
import { Outlet, Link } from "react-router-dom";


const NavBar = () => {
  return (
    <>
      <div><nav class="navbar navbar-expand-lg navbar-dark bg-dark ">

        <div class="navbar-brand" >MyRouter</div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link to="/">Home   </Link>
            </li>
            <li class="nav-item">
              <Link to="/AboutUs">AboutUs     </Link>
            </li>
            <li class="nav-item">
              <Link to="/ContactUs">ContactUs</Link>
            </li>

          </ul>
        </div>
      </nav>


      </div>
      <Outlet /> </>
  )
}

export default NavBar