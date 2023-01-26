import React from 'react';

const Contact = () => {
	return (
		<div className=''>
			<div className='relative font-type1'>
				<img
					src='https://www.unnatiunlimited.com/wp-content/uploads/2018/01/Shayona-Banner-Page-Banner-Contact-us-1024x256.jpg'
					alt=''
					className='w-full h-60 md:h-auto opacity-80 '
				/>
				<div className='absolute text-center text-white top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2'>
					<p className=' text-xl md:text-3xl lg:text-4xl pt-10'>
						How can we help?
					</p>
					<p className=' text-md md:text-lg lg:text-2xl'>Send us a message</p>
				</div>
			</div>

			{/* <div className='w-1/2 bg-gray-100 py-4 relative'>
					<div className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2'>
						<p className='text-center font-type2 text-4xl '>Get in touch</p>
						<span className='text-center  font-type2 text-2xl '>
							We'll reply in no time
						</span>
					</div>
				</div> */}
			<div className='my-10 flex flex-col justify-center items-center'>
				<form class='w-full max-w-lg '>
					<div class='flex flex-wrap sm:-mx-3 mb-6 '>
						<div class='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
							<label
								class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								for='grid-first-name'
							>
								First Name
							</label>
							<input
								class='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
								id='grid-first-name'
								type='text'
								placeholder='Jane'
							/>
						</div>
						<div class='w-full md:w-1/2 px-3'>
							<label
								class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								for='grid-last-name'
							>
								Last Name
							</label>
							<input
								class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='grid-last-name'
								type='text'
								placeholder='Doe'
							/>
						</div>
					</div>
					<div class='flex flex-wrap sm:-mx-3 mb-6'>
						<div class='w-full px-3'>
							<label
								class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								for='grid-password'
							>
								Message
							</label>
							<input
								class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='grid-password'
								type='password'
								placeholder="What's on your mind?"
							/>
							<p class='text-gray-600 text-xs italic'>
								Make it as long and as crazy as you'd like
							</p>
						</div>
					</div>
					<div class='flex flex-wrap sm:-mx-3 mb-2'>
						<div class='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
							<label
								class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								for='grid-city'
							>
								City
							</label>
							<input
								class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='grid-city'
								type='text'
								placeholder='City'
							/>
						</div>
						<div class='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
							<label
								class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								for='grid-state'
							>
								Country
							</label>
							<input
								class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='grid-country'
								type='text'
								placeholder='Country'
							/>
						</div>
						<div class='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
							<label
								class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								for='grid-zip'
							>
								Phone no
							</label>
							<input
								class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='grid-zip'
								type='tel'
								placeholder='902101234'
							/>
						</div>
					</div>
					<div className='md:mt-4 group mx-auto flex justify-center items-center relative w-1/4 h-8  lg:h-12 bg-gray-300 cursor-pointer'>
						<p className='text-sm md:text-lg lg:text-xl text-gray-700 font-type2 '>
							Submit
						</p>
						<div className='absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine' />
					</div>
				</form>
			</div>

			<div className=''>
				<div className='relative'>
					<img
						src='https://img.freepik.com/premium-photo/travel-vertical-stories-banner-lifestyle-people-concept-summer-adventure-holiday-vacation-journey-with-men-women-enjoying-nature-lifestyle-outdoor_425263-4834.jpg?w=2000'
						alt='subs_banner'
						className='w-full h-auto opacity-70'
					/>
					<div className='absolute flex flex-col md:flex-row top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
						<p className='text-white text-sm sm:text-lg md:text-xl lg:text-2xl font-extrabold drop-shadow-xl break-keep mb-2 md:mb-1 '>
							Subscribe to our Newsletter!
						</p>
						<form class='w-full max-w-sm'>
							<div class='flex  items-center py-1 md:py-2 bg-white opacity-90 md:mb-1'>
								<input
									class='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
									type='email'
									placeholder='abc.123@insaid.com'
									aria-label='email'
								/>
								<button
									class='flex-shrink-0 bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700 text-xs md:text-sm border-4 text-white py-1 px-2 rounded mr-2'
									type='button'
								>
									Subscribe
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
