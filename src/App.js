/** @format */

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Weather from "./Components/Weather/Weather";
import { Route, Link } from "react-router-dom";
import About from "./Components/About";

function App() {
	return (
		<div className='App'>
			<Link to='/'>
				<h2 className='Logo'>
					The
					<br /> Weather
					<br /> App
				</h2>
			</Link>
			<Route path='/' component={Weather} />
			<Link className='aboutLink' to='/About'>
				<footer>
					<h1>About</h1>
				</footer>
			</Link>

			<Route path='/About' component={About} />
		</div>
	);
}

export default App;
