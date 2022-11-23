import Link from 'next/link';
import React from 'react';
import { AiOutlineShopping } from 'react-icons/ai';

import { useStateContext } from '../context/StateContext';
import { Cart } from './';

const Navbar = () => {
	const { showCart, setShowCart, totalQuantities } = useStateContext();

	return (
		<div className='navbar-container'>
			<p className='logo'>
				<Link href='/'>
					<a>PHANOX Headphones</a>
				</Link>
			</p>

			<button
				type='submit'
				className='cart-icon'
				onClick={() => setShowCart(true)}
			>
				<AiOutlineShopping />
				<span className='cart-item-qty'>{totalQuantities}</span>
			</button>

			{showCart && <Cart />}
		</div>
	);
};

export default Navbar;
