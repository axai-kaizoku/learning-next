import Link from 'next/link';
import React from 'react';

const Page = () => {
	return (
		<div className="min-h-screen w-full p-8 ">
			<h1 className="text-center font-bold text-4xl py-8">Blog Post</h1>
			<div className="px-16">
				<Link href="/posts">Back</Link>
			</div>
			<div className="py-8 px-16">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid tenetur
				sunt itaque unde necessitatibus, atque harum iure deleniti aliquam sit
				quam ex, impedit eius blanditiis quo porro delectus esse fuga!
			</div>
			{/* <div className="h-screen w-full flex justify-center items-center">
				<div className="h-12 w-12 rounded-full border-solid border-4 border-gray-200  border-t-blue-400 animate-spin"></div>
			</div> */}
		</div>
	);
};

export default Page;
