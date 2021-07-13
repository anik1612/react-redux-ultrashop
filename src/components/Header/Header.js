import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className='sticky-top'>
			<nav className='navbar navbar-expand-lg navbar-dark bg-dark p-3 '>
				<div className='container'>
					<Link to='/' style={{ textDecoration: 'none' }}>
						<h3 className='text-white border border-success rounded p-3'>
							Ultra Shop 🛍🛍🛍
						</h3>
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarText'
						aria-controls='navbarText'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarText'>
						<ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
							<li className='nav-item'>
								<button className='btn btn-outline-success px-5'>
									Login
								</button>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
