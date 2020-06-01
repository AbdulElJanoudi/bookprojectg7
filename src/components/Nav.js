import React from 'react'
import { NavLink } from 'react-router-dom'



export default function Nav() {
    return (
        <div>
            <nav>

                <ul>
                    <NavLink exact activeClassName="nav-active-style" to='/'> <li> Startsida </li> </NavLink>
                </ul>
            </nav>

        </div>
    )
}
