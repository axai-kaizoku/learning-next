'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

const navLinks = [
	{ name: 'Home', href: '/' },
	{ name: 'Login', href: '/login' },
	{ name: 'Posts', href: '/posts' },
	{ name: 'Docs', href: '/docs' },
	{ name: 'Products', href: '/products' },
];

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
						{navLinks.map((link) => {
							const isActive = pathname.match(link.href);
							return (
								<li
									className="px-8"
									key={link.name}>
									<Link
										href={link.href}
										className={isActive ? 'font-bold' : ''}>
										{link.name}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
