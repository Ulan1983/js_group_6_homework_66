import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";

const Header = () => {
	return (
		<header className="header">
			<div className="logo">My Blog</div>
			<nav className="main_nav">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/posts/add">Add</NavLink>
			</nav>
		</header>
	);
};

export default Header;