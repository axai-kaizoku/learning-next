'use client';
import Image from 'next/image';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

const navLinks = [
	{ name: 'Home', href: '/' },
	{ name: 'Login', href: '/login' },
	{ name: 'Posts', href: '/posts' },
	{ name: 'Docs', href: '/docs' },
	{ name: 'Products', href: '/products' },
];
import headImg from '../../public/android-chrome-512x512.png';

const Header = () => {
	const pathname = usePathname();

	return (
		<header>
			<nav className="flex flex-row bg-black text-white">
				<div className="w-full h-12 flex flex-row justify-between ">
					<Link href="/">
						<Image
							src={headImg}
							alt="picsum"
							width={80}
							height={100}
							className="px-4"
						/>
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
