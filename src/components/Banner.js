import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
	return (
		<div className=''>
			<div className='flex flex-row'>
				<img
					src='http://cdn.shopify.com/s/files/1/0620/9952/1784/collections/nordlich-colorweave-mens-shirts-banner.jpg?v=1642249687'
					alt='banner'
					className='h-auto w-2/3 border-solid border-2 border-slate-600 rounded-md'
				/>
				<div className='my-auto mx-6 md:mx-12'>
					<div className='text-xs sm:text-lg md:text-xl lg:text-4xl  lg:pb-5 font-type1 border-solid border-slate-600 '>
						<p className=''>SUMMER WEAR </p>
						<p className=''>COLLECTIONS</p>
					</div>
					<div className='text-xs sm:text-sm md:text-md lg:text-xl font-type2'>
						<p className=''>Offers upto 50% Off</p>
					</div>
				</div>
			</div>
			<div className='flex flex-row w-full justify-between '>
				<div className='ml-12 sm:ml-20 md:ml-28 lg:ml-36 my-auto text-right'>
					<div className='text-xs sm:text-lg md:text-xl lg:text-4xl  lg:pb-5 font-type1 '>
						<p className=''>ETHNIC WEAR </p>
						<p className=''>COLLECTIONS</p>
					</div>
					<div className='text-xs sm:text-sm md:text-md lg:text-xl font-type2'>
						<p className=''>Offers upto 70% Off</p>
					</div>
				</div>
				<img
					src='https://g3fashion.com/blog/wp-content/uploads/2022/06/mens-kurta-styles.jpg'
					alt='banner'
					className='h-auto w-2/3 inset-y-0 right-0 border-solid border-2 border-slate-600 rounded-md'
				/>
			</div>

			<div className='mt-6 md:mt-12 mb-8  flex justify-center items-center'>
				<div className='group flex justify-center items-center relative w-1/4 h-6 sm:h-8 md:h-12 lg:h-16 bg-gray-300 cursor-pointer text-4xl'>
					<Link to='/products'>
						<p className='text-xs sm:text-sm md:text-lg lg:text-2xl text-gray-700 font-type2'>
							Explore products ->
						</p>
					</Link>
					<div className='absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine' />
				</div>
			</div>
		</div>
	);
};

export default Banner;
