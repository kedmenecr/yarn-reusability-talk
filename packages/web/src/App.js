import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { add, mult, sub } from '@yarn-reusability-talk/common';


class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					This is from common add  : {add(1, 3)}
				</p>
				<p className="App-intro">
					This is from common mult : {mult(1, 3)}
				</p>
				<p className="App-intro">
					This is from common sub : {sub(1, 3)}
				</p>
			</div>
		);
	}
}

export default App;
