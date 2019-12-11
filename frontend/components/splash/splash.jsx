import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {

	render() {
		return (
			<div className="splash">
				<div className="content">
				<p className="logo">dreamr</p>
				<p className="motto">Show off your dreams.
												<br />Experience others.
				</p>
				<Link to="/signup">
					<button className="signup">Get Started</button>
				</Link>
				<Link to="/login">
					<button className="login">Login</button>
				</Link>
				</div>
			</div>
		);
	}
}

export default Splash;
