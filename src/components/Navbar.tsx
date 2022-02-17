import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar: React.FC = ()=>(
    <nav>
        <div className="nav-wrapper indigo lighten-2 px1">
            <a href="/" className="brand-logo">RT</a>
            <ul className="right hide-on-med-and-down">
                <li><NavLink to="/">Дела</NavLink></li>
                <li><NavLink to="/about">Инфо </NavLink></li>
            </ul>
        </div>
    </nav>
)
