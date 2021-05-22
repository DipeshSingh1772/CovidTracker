import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MainState from './MainState'

const Header = () => {

    return(
        <>
            <nav class="navbar navbar-dark bg-dark">
                <div>
                    <Link to="/" ><font class="navbar-brand">INDIA  COVID-19  TRACKER</font></Link>
                    <Link to="/State" ><font class="navbar-brand">statewise</font></Link>
                </div>
            </nav>
        </>
    )
}

export default Header