import React from 'react';

const Header = () => {
	return (
		<nav class='navbar navbar-expand-lg navbar-dark bg-dark p-3'>
			<div class='container'>
				<h3 className='text-white border border-success rounded p-3'>
					Ultra Shop 🛍🛍🛍
				</h3>
				<button
					class='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarText'
					aria-controls='navbarText'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span class='navbar-toggler-icon'></span>
				</button>
				<div class='collapse navbar-collapse' id='navbarText'>
					<ul class='navbar-nav ms-auto mb-2 mb-lg-0'>
						<li class='nav-item'>
							<button className='btn btn-outline-success px-5'>
								Login
							</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
