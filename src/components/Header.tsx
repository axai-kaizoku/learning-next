import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
	const hprofile = 'https://picsum.photos/100/100';
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
							<Link href="/">Home</Link>
						</li>
						<li className="px-8">
							<Link href="/posts">Posts</Link>
						</li>
						<li className="px-8">
							<Link href="/docs">Docs</Link>
						</li>
						<li className="px-8">
							<Link href="/products">Products</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
