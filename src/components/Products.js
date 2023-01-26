import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Products = () => {
	const [product, setProduct] = useState([]);

	useEffect(() => {
		axios
			.get('https://fakestoreapi.com/products')
			.then(res => {
				setProduct(res.data);
				console.log(res.data);
			})
			.catch(err => console.log(err));
	}, []);

	//console.log(product, 'product');
	return (
		<div className='bg-gray-100 pt-6 pb-8'>
			<div className=''>
				<p className='text-center text-xl md:text-2xl lg:text-3xl font-type2 my-12'>
					Shop All Products
				</p>
			</div>
			<div className='mx-4 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4'>
				{product.map(data => (
					<div className=' p-2 shadow-lg shadow-gray-500   bg-white rounded-xl'>
						{data.description?.length > 50 ? (
							<p className='text-md md:text-lg lg:text-xl font-type1'>
								{data.title.substring(0, 47) + '...'}
							</p>
						) : (
							<p className='text-md md:text-lg lg:text-xl font-type1'>
								{data.title}
							</p>
						)}

						<p className='text-sm md:text-md lg:text-lg text-right font-semibold'>
							${data.price}
						</p>
						{data.description?.length > 150 ? (
							<p className='text-xs md:text-sm'>
								{data.description.substring(0, 247) + '...'}
							</p>
						) : (
							<p className='text-xs md:text-sm'>{data.description}</p>
						)}
						<img
							src={data.image}
							alt={data.id}
							className='h-24 w-24 md:h-40 md:w-40 m-4 mx-auto  '
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Products;
