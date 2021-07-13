import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
	const products = useSelector((state) => state.allProducts.products);
	return products.map((product) => {
		const { id, title, image, price, category } = product;
		return (
			<div className='col-md-3 mb-3' key={id}>
				<Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>
					<div className='card text-center h-100'>
						<div>
							<img
								className='card-top-img py-3'
								height='230'
								width='170'
								src={image}
								alt='product-img'
							/>
						</div>
						<div className='card-footer h-100'>
							<h5 className='card-title'>{title}</h5>
							<h3 className='card-text'>$ {price}</h3>
							<p className='card-text'>{category}</p>
						</div>
					</div>
				</Link>
			</div>
		);
	});
};

export default ProductComponent;
