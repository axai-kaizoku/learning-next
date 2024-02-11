'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
	{ name: 'Signup', href: '/signup' },
	{ name: 'Login', href: '/login' },
	{ name: 'Forgot Password', href: '/forgot-password' },
];

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();
	return (
		<>
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
