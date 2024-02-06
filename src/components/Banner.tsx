import Image from 'next/image';
import React from 'react';
import imgbruh from '../img/nodejs.png';

const Banner = () => {
	return (
		<div className="w-full h-fit flex flex-row justify-center my-8 ">
			<Image
				src={imgbruh}
				alt="demo-pic"
			/>
			{/* <div>
				<h1 className="text-8xl font-bold">Node Js</h1>
				<p>&nbsp;A Man who changed web dev</p>
			</div> */}
		</div>
	);
};

export default Banner;
