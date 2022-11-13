import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

const Navbar = () => {
	return (
		<div className='navbar-container'>
			<p className='logo'>
				<Link href='/'>
					<a>PHANOX Headphones</a>
				</Link>
			</p>

			<button type='submit' className='cart-icon' onClick={() => console.log()}>
				<AiOutlineShopping />
				<span className='cart-item-qty'>1</span>
			</button>
		</div>
	);
};

export default Navbar;
