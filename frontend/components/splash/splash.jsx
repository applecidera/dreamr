import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {

	render() {
		return (
			<div className="master-snap-container">
				<div className="splash1">
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
				{/* <div className="splash2">

				</div>
				<div className="splash3">

				</div> */}
			</div>
		);
	}
}

export default Splash;
