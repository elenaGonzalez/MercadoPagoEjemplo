import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';

export default function Nav() {
    return (
        <header className="navbar">
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/" >Home</NavLink>
                    </li>
                    <li className="list-item">
                        <NavLink exact to="/direccion" >Proceder a la compra</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}