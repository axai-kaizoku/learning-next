import React from 'react';

const Footer = () => {
	return (
		<footer className="w-full h-fit py-4  bg-gray-100 flex flex-row justify-between ">
			<p className="px-3">&copy; CopyRights Reserved</p>
			<ul className="flex flex-row">
				<li className="px-8">About</li>
				<li className="px-8">Contact us</li>
				<li className="px-8">Terms and Conditions</li>
			</ul>
		</footer>
	);
};

export default Footer;
