import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Facebook } from 'react-content-loader';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectedProduct } from '../../redux/actions/productActions';

const ProductDetail = () => {
	const { productId } = useParams();
	const [loader, setLoader] = useState(true);
	const product = useSelector((state) => state.product);
	const dispatch = useDispatch();
	const fetchProductDetails = async () => {
		const response = await axios
			.get(`https://fakestoreapi.com/products/${productId}`)
			.catch((err) => console.log(err));

		if (response.data) {
			dispatch(selectedProduct(response.data));
			setLoader(false);
		} else {
			setLoader(true);
		}
	};

	useEffect(() => {
		if (productId && productId !== '') fetchProductDetails();
	}, [productId]);

	const { title, price, image, category, description } = product;

	return (
		<div>
			{loader ? (
				<div className='row mt-5 d-flex justify-content-center'>
					<div className='col-md-9'>
						<Facebook />
					</div>
				</div>
			) : (
				<div className='row mt-5 d-flex justify-content-center'>
					<div className='col-md-9'>
						<div className='card mb-3 py-5 px-3'>
							<div className='row g-0 d-flex align-items-center'>
								<div className='col-md-4'>
									<img
										src={image}
										className='img-fluid rounded-start'
										alt='product-img'
									/>
								</div>
								<div className='col-md-8 ps-5'>
									<div className='card-footer border-0 p-5'>
										<h3 className='card-title mb-3'>{title}</h3>
										<h4 className='card-text bg-info text-white d-inline-block px-3 py-1 border rounded'>
											$ {price}
										</h4>
										<div>
											<p className='card-text bg-dark text-white d-inline-block px-3 py-1 border rounded mt-2'>
												<small className=''>
													{category}
												</small>
											</p>
										</div>
										<div className='card-text mt-3'>
											<p>{description}</p>
										</div>

										<div className='mt-3'>
											<button className='btn btn-danger'>
												Add to cart
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProductDetail;
