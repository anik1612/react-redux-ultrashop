import React, { useEffect } from 'react';
import axios from 'axios';
import { Facebook } from 'react-content-loader';
import { useDispatch } from 'react-redux';
import { setProduct } from '../../redux/actions/productActions';
import ProductComponent from '../ProductComponent/ProductComponent';
import { useState } from 'react';

const ProductListing = () => {
	const [loader, setLoader] = useState(true);
	// const products = useSelector((state) => state);

	const dispatch = useDispatch();

	const fetchProducts = async () => {
		const response = await axios
			.get('https://fakestoreapi.com/products')
			.catch((err) => console.log(err));
		if (response.data) {
			dispatch(setProduct(response.data));
			setLoader(false);
		} else {
			setLoader(true);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<div className='product-container container'>
			{loader ? (
				<div className='mt-5'>
					<Facebook />
				</div>
			) : (
				<div className='row my-5'>
					<ProductComponent />
				</div>
			)}
		</div>
	);
};

export default ProductListing;
