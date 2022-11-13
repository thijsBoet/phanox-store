import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price } }) => {
	return (
		<div>
			<Link href={`/product/${slug.current}`}>
				<div className='product-card'>
					<img
						src={urlFor(image && image[0])}
						width={250}
						height={250}
            alt={name}
						className='product-image'
          />
          <p className="product-name">{name }</p>
          <p className="product-name">${price.toFixed(2)}</p>
				</div>
			</Link>
		</div>
	);
};

export default Product;
