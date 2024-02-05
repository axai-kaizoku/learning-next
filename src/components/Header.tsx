import Image from 'next/image';
import React from 'react';

const Header = () => {
	const hprofile = 'https://picsum.photos/100/100';
	return (
		<div className="flex flex-row bg-sky-100">
			<div className="w-full h-12 flex flex-row justify-between ">
				<Image
					src={hprofile}
					alt="picsum"
					width={100}
					height={100}
					className="object-cover bg-center"
				/>
				<ul className=" flex flex-row justify-evenly m-4">
					<li className="px-8">Home</li>
					<li className="px-8">Posts</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
