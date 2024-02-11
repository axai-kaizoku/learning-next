'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
	const hprofile = 'https://picsum.photos/100/100';
	const pathname = usePathname();

	return (
		<header>
			<nav className="flex flex-row bg-sky-100">
				<div className="w-full h-12 flex flex-row justify-between ">
					<Link href="/">
						{/* <Image
							src={hprofile}
							alt="picsum"
							width={80}
							height={100}
							className="px-4"
						/> */}
						<div className="px-4 flex flex-row">
							<h1>N</h1>
							<p>ext.</p>
						</div>
					</Link>
					<ul className=" flex flex-row justify-evenly m-4">
						<li className="px-8">
							<Link
								href="/"
								className={pathname === '/' ? 'font-bold' : ''}>
								Home
							</Link>
						</li>
						<li className="px-8">
							<Link
								href="/login"
								className={pathname.startsWith('/login') ? 'font-bold' : ''}>
								Login
							</Link>
						</li>
						<li className="px-8">
							<Link
								href="/posts"
								className={pathname.startsWith('/posts') ? 'font-bold' : ''}>
								Posts
							</Link>
						</li>
						<li className="px-8">
							<Link
								href="/docs"
								className={pathname.startsWith('/docs') ? 'font-bold' : ''}>
								Docs
							</Link>
						</li>
						<li className="px-8">
							<Link
								href="/products"
								className={pathname.startsWith('/products') ? 'font-bold' : ''}>
								Products
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
