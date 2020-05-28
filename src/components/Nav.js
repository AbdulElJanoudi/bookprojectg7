import React from 'react'
import { NavLink } from 'react-router-dom'



export default function Nav() {
    return (
        <div>
            <nav>

                <ul>
                    <NavLink exact activeClassName="nav-active-style" to='/'> <li> Startsida </li> </NavLink>
                    <NavLink activeClassName="nav-active-style" to='/booklib'> <li> Bokbibliotek </li> </NavLink>
                </ul>
            </nav>

        </div>
    )
}
