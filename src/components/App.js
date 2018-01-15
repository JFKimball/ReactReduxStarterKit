import React, { Component } from 'react'

class App extends Component {
	render() {
		return (
			<div className="container">
				<h1>Hello From React!</h1>
				<div className="navbar-container">
					<nav className="navbar">
						<ul className="nav-left">
							<li><a href="#">Link</a></li>
							<li><a href="#">Link</a></li>
							<li><a href="#">Link</a></li>
							<li><a href="#">Link</a></li>
						</ul>
					</nav>
				</div>
			</div>
			)
	}
}

export default App