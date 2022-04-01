import React from 'react';
import './nav.css';
import navLogo from '../../assets/Logos/knwmdzLogo.png';
window.addEventListener('scroll', function() {
	var navbar = document.getElementById('nav');
	navbar.classList.toggle('bg', window.scrollY > 0);
});

const Navbar = () => {
	return (
		<section id="nav">
			<div className="container">
				<div className="nav__logo">
					<a href="#header">
						<img src={navLogo} alt="" />
					</a>
				</div>
				<div className="nav__lists">
					<ul>
						<li>
							<a href="#experience">Бидний тухай</a>
						</li>
						<li>
							<a href="#event">Эвент</a>
						</li>
						<li>
							<a href="#team">Гишүүд</a>
						</li>
						<li>
							<a
								href="#involve"
								className="btn small__btn"
							>
								Нэгдэх
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Navbar;
