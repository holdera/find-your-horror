'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Nav() {
	const [openMenu, setOpenMenu] = useState(false);

	function handleMobileBtn() {
		setOpenMenu((curState) => !curState);
	}
	console.log(openMenu);
	const navLinks = [
		{ text: 'Home', link: '/' },
		{ text: 'About', link: '/' },
		{ text: 'Sign In', link: '/login' },
	];

	return (
		<div>
			<button
				id='mobile-menu-btn'
				className={`${openMenu ? 'open' : ''}`}
				onClick={handleMobileBtn}
				aria-label='Menu'
				aria-expanded={openMenu}
				aria-controls='menu'
			>
				<span className='lines'></span>
				<span className='lines'></span>
				<span className='lines'></span>
			</button>

			<nav id='menu'>
				<ul className={`${openMenu ? 'menu-is-open' : ''}`}>
					{navLinks.map((link) => (
						<li key={link.text}>
							<Link href={link.link}>{link.text}</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
}
