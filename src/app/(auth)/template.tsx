'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
	{ name: 'Signup', href: '/signup' },
	{ name: 'Login', href: '/login' },
	{ name: 'Forgot Password', href: '/forgot-password' },
];

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();
	const [input, setInput] = useState("");
	return (
		<>
			<input type="text" onChange={e => setInput(e.target.value)} className='border-solid border-4 rounded'/>

			<ul className="flex">
				{navLinks.map((link, i) => {
					const isActive = pathname.startsWith(link.href);
					return (
						<li
							key={i}
							className="p-4">
							<Link
								href={link.href}
								className={isActive ? 'font-bold' : 'text-blue-500'}>
								{link.name}
							</Link>
						</li>
					);
				})}
			</ul>
			<br />
			<br />
			
			<br />
			{children}
		</>
	);
};

export default AuthLayout;
