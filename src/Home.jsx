import React, { Component } from 'react';
import Link from './components/Link';

class Home extends Component {
	render() {
		return (
			<main className="home">
				<div className="home-header">
					<span className="home-name">Epoch</span>
					<h1 className="home-title">The perfect <del><span className="home-highlight">email</span></del> <span className="home-highlight">communication</span> client.</h1>
				</div>
				<Link className="home-cta" href='/inbox'>Sign in</Link>
			</main>
		);
	}
}

export default Home;