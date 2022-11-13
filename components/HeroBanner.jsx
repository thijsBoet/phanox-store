import React from 'react';
import Link from 'next/link';

import {urlFor} from '../lib/client'

const HeroBanner = ({ heroBanner }) => {
	const {
		buttonText,
		product,
		desc,
		discount,
		image,
		largeText1,
		largeText2,
		midText,
		saleTime,
		smallText,
	} = heroBanner;
	return (
		<div className='hero-banner-container'>
			<div>
				<p className='beats-solo'>{smallText}</p>
				<h3>{midText}</h3>
				<h1>{largeText1}</h1>
				<img
					src={urlFor(image)}
					alt='heaadphones'
					className='hero-banner-image'
				/>
				<div>
					<Link href={`/product/${product}`}>
						<button>{buttonText}</button>
					</Link>
					<div className='desc'>
						<h5>Description</h5>
						<p>{desc}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;
